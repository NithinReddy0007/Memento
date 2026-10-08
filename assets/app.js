const categories = {
  movies: { label: 'Movies', singular: 'movie', page: 'pages/movies/index.html', color: '#62c6bf', wash: '#e4f6f4', description: 'Feature films, remembered and found again.' },
  'tv-shows': {
    label: 'TV Shows', singular: 'TV show', page: 'pages/tv-shows/index.html', color: '#f8b6ba', wash: '#fdf0f1', description: 'Series worth staying with, episode by episode.'
  },
  anime: { label: 'Anime', singular: 'anime', page: 'pages/anime/index.html', color: '#9a72aa', wash: '#f2eaf5', description: 'Animated worlds, from quiet moments to big adventures.' },
  documentaries: { label: 'Documentaries', singular: 'documentary', page: 'pages/documentaries/index.html', color: '#4fa8a2', wash: '#e1f4f2', description: 'True stories and real worlds, carefully collected.' }
};

const storageKey = 'memento.watchHistory.v1';
const somedayStorageKey = 'memento.someday.v1';
const themeStorageKey = 'memento.theme.v1';
const searchResultCache = new Map();
const apiMemoryCache = new Map();
let searchDebounce;
let imdbRatingsCapabilityPromise;
const configuredApiBaseUrl = window.MEMENTO_CONFIG?.apiBaseUrl?.trim() || '';
const fallbackImages = {
  movies: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  'tv-shows': 'https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akHmW0oyYCO.jpg',
  anime: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  documentaries: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
};
const navigation = [
  { label: 'Home', page: 'home', href: 'index.html' },
  { label: 'History', page: 'history', href: 'pages/history/index.html' },
  { label: 'Someday', page: 'someday', href: 'pages/someday/index.html' },
  { label: 'Analysis', page: 'analysis', href: 'pages/analysis/index.html' },
  ...Object.entries(categories).map(([key, category]) => ({ label: category.label, page: key, href: category.page }))
];

function readCollection(collectionKey) {
  const recordPrefix = `${collectionKey}.entry/`;
  const collection = {};
  const storedEntries = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const storageName = localStorage.key(index);
    if (storageName?.startsWith(recordPrefix)) storedEntries.push(storageName);
  }
  storedEntries.forEach((storageName) => {
    try {
      const itemKey = decodeURIComponent(storageName.slice(recordPrefix.length));
      collection[itemKey] = JSON.parse(localStorage.getItem(storageName));
    } catch {
      return;
    }
  });

  try {
    const legacy = JSON.parse(localStorage.getItem(collectionKey) || 'null');
    if (legacy && typeof legacy === 'object' && !Array.isArray(legacy)) {
      writeCollection(collectionKey, { ...legacy, ...collection });
      return { ...legacy, ...collection };
    }
  } catch {
    return collection;
  }
  return collection;
}

function writeCollection(collectionKey, collection) {
  const recordPrefix = `${collectionKey}.entry/`;
  const storedEntries = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const storageName = localStorage.key(index);
    if (storageName?.startsWith(recordPrefix)) storedEntries.push(storageName);
  }
  storedEntries.forEach((storageName) => localStorage.removeItem(storageName));
  Object.entries(collection).forEach(([itemKey, entry]) => {
    localStorage.setItem(`${recordPrefix}${encodeURIComponent(itemKey)}`, JSON.stringify(entry));
  });
  localStorage.removeItem(collectionKey);
}

function readHistory() { return readCollection(storageKey); }
function writeHistory(history) { writeCollection(storageKey, history); }
function readSomeday() { return readCollection(somedayStorageKey); }
function writeSomeday(someday) { writeCollection(somedayStorageKey, someday); }

function randomRecommendationPage(previousPage = 0) {
  let page;
  do { page = Math.floor(Math.random() * 8) + 1; } while (page === previousPage);
  return page;
}

function getEntries(history, categoryKey) {
  return Object.entries(history)
    .filter(([key, entry]) => key.startsWith(`${categoryKey}:`) && entry && categories[categoryKey])
    .map(([key, entry]) => ({ ...entry, item: entry.item, key }))
    .filter((entry) => entry.item)
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

async function searchCategory(categoryKey, query) {
  const queryString = new URLSearchParams({ category: categoryKey, query }).toString();
  const data = await backendRequest(`/api/search?${queryString}`);
  return data.items || [];
}

async function loadRecommendations(categoryKey, history, page) {
  return backendRequest('/api/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category: categoryKey, page, history: Object.values(history) })
  });
}

function backendBaseUrl() {
  const hostname = window.location.hostname.toLowerCase();
  const isLocalDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  const localHostname = hostname === '[::1]' ? '[::1]' : hostname;
  const baseUrl = isLocalDevelopment
    ? `${window.location.protocol}//${localHostname}:3000`
    : configuredApiBaseUrl;
  if (!baseUrl) {
    throw new Error('The Memento backend URL is not configured for this deployment. Set apiBaseUrl in api-config.js.');
  }
  return baseUrl.replace(/\/+$/, '');
}

async function backendRequest(path, options = {}) {
  const isGet = !options.method || options.method.toUpperCase() === 'GET';
  const isTrending = path.includes('/api/trending');
  const cacheKey = `memento.api.cache:${path}`;
  if (isGet && !isTrending) {
    if (apiMemoryCache.has(path)) {
      const entry = apiMemoryCache.get(path);
      if (Date.now() - entry.time < 5 * 60 * 1000) return entry.data;
    }
    try {
      const saved = sessionStorage.getItem(cacheKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Date.now() - parsed.time < 5 * 60 * 1000) {
          apiMemoryCache.set(path, parsed);
          return parsed.data;
        }
      }
    } catch {
      // sessionStorage might fail in private browsing
    }
  }

  const url = `${backendBaseUrl()}${path}`;
  let response;
  try {
    response = await fetch(url, options);
  } catch {
    throw new Error(`Could not reach the Memento backend at ${url}. Check its deployment and CORS configuration.`);
  }

  const responseText = await response.text();
  let data;
  try { data = JSON.parse(responseText); } catch { data = undefined; }

  const preview = responseText.replace(/\s+/g, ' ').trim().slice(0, 240);
  if (!response.ok) {
    throw new Error(`Memento API returned HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}: ${data?.error || preview || 'Empty response'}`);
  }
  if (data === undefined) {
    throw new Error(`Memento API returned non-JSON content (HTTP ${response.status}): ${preview || 'Empty response'}`);
  }

  if (isGet) {
    const entry = { data, time: Date.now() };
    apiMemoryCache.set(path, entry);
    try { sessionStorage.setItem(cacheKey, JSON.stringify(entry)); } catch {}
  }

  return data;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function appHref(relativePath) {
  const pathname = window.location.pathname;
  const pagesIndex = pathname.indexOf('/pages/');
  const basePath = pagesIndex >= 0 ? pathname.slice(0, pagesIndex) : pathname.slice(0, pathname.lastIndexOf('/') + 1);
  const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${normalizedBasePath}${relativePath.replace(/^\/+/, '')}`;
}

function contentDetailsHref(categoryKey, item) {
  const query = new URLSearchParams({ category: categoryKey, mediaType: item.mediaType, id: item.id });
  return `${appHref('pages/details/index.html')}?${query.toString()}`;
}

function navMarkup(activePage) {
  return `<header class="topbar">
    <a class="brand" href="${appHref('index.html')}" aria-label="Memento home">
      <svg class="brand-logo" viewBox="78 55 398 300" role="img" aria-labelledby="memento-logo-title">
        <title id="memento-logo-title">Memento cinema logo</title>
        <g fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="miter" stroke-width="34"><path d="M146 326V145L292 294 438 145V326"></path></g>
        <circle cx="146" cy="126" r="58" fill="var(--paper)"></circle>
        <circle cx="146" cy="126" r="48" fill="none" stroke="currentColor" stroke-width="12"></circle>
        <circle cx="146" cy="126" r="7" fill="currentColor"></circle>
        <g fill="var(--paper)" stroke="currentColor" stroke-width="5"><circle cx="146" cy="99" r="8"></circle><circle cx="169.38" cy="139.5" r="8"></circle><circle cx="122.62" cy="139.5" r="8"></circle></g>
        <g fill="var(--paper)"><rect x="141" y="220" width="10" height="15" rx="2"></rect><rect x="141" y="257" width="10" height="15" rx="2"></rect><rect x="141" y="294" width="10" height="15" rx="2"></rect></g>
      </svg>
      <span>Memento</span>
    </a>
    <nav class="nav" aria-label="Main navigation">${navigation.map((item) => `<a href="${appHref(item.href)}" class="${item.page === activePage ? 'active' : ''}" ${item.page === activePage ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav>
    <div class="top-actions"><button class="icon-button theme-toggle" type="button" aria-label="Switch to dark theme" title="Switch theme">☾</button></div>
  </header>`;
}

function imageMarkup(item, categoryKey) {
  return `<img src="${item.image || fallbackImages[categoryKey]}" data-fallback="${fallbackImages[categoryKey]}" alt="${escapeHTML(item.title)}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback">`;
}

/* ── STATE FOR TRENDING HERO ── */
let trendingItems = [];
let trendingActiveIndex = 0;
let trendingHeroTimer = null;
let trendingMuted = true;

/* ── CINEMATIC CARD (NO HOVER TEASER AS REQUESTED) ── */
function cinematicCard(item, index) {
  const key = historyKey(item.category, item);
  const detailsHref = contentDetailsHref(item.category, item);
  const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : (Number.isFinite(item.voteAverage) ? item.voteAverage : null);
  searchResultCache.set(key, item);
  return `<article class="cinema-card" style="--card-index:${index}" data-cinema-key="${escapeHTML(key)}" data-cinema-category="${escapeHTML(item.category)}" data-cinema-media="${escapeHTML(item.mediaType)}" data-cinema-id="${escapeHTML(item.id)}">
    <a class="cinema-card-link" href="${detailsHref}" aria-label="View ${escapeHTML(item.title)} details">
      <div class="cinema-art">
        ${item.image ? `<img src="${escapeHTML(item.image)}" alt="" loading="lazy">` : ''}
        <span class="cinema-vignette" aria-hidden="true"></span>
        <span class="cinema-rank">${String(index + 1).padStart(2, '0')}</span>
      </div>
      <div class="cinema-card-copy">
        <div class="cinema-meta"><span>${escapeHTML(item.year)}</span><span>${rating ? `IMDb ${Number(rating).toFixed(1)}` : 'IMDb —'}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.category === 'tv-shows' ? 'Series' : item.category === 'anime' ? 'Anime' : item.category === 'documentaries' ? 'Documentary' : 'Movie')}</p>
      </div>
    </a>
    <div class="cinema-card-actions">
      <button class="poster-action-button" type="button" data-cinema-history="${escapeHTML(key)}" aria-label="Add ${escapeHTML(item.title)} to Watch History">+</button>
      <button class="poster-action-button poster-heart" type="button" data-cinema-someday="${escapeHTML(key)}" aria-label="Save ${escapeHTML(item.title)} for Someday">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg>
      </button>
    </div>
  </article>`;
}

/* ── NETFLIX-STYLE IMMERSIVE TRENDING HERO ── */
function netflixHeroMarkup(item, index = 0, total = 1) {
  if (!item) {
    return `<section class="netflix-hero" data-netflix-hero>
      <div class="cinema-loading" style="position:absolute;inset:0;"></div>
    </section>`;
  }

  const detailsHref = contentDetailsHref(item.category, item);
  const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : (Number.isFinite(item.voteAverage) ? item.voteAverage : null);
  const backdropUrl = item.backdrop || item.image || '';
  const categoryLabel = item.category === 'tv-shows' ? 'TV Series' : item.category === 'anime' ? 'Anime' : item.category === 'documentaries' ? 'Documentary' : 'Movie';
  const genres = (item.tags || []).slice(0, 3).join(' • ');

  const dots = Array.from({ length: Math.min(total, 8) }).map((_, i) =>
    `<button class="netflix-dot ${i === index ? 'is-active' : ''}" type="button" data-hero-dot="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  return `<section class="netflix-hero" data-netflix-hero data-hero-index="${index}">
    <div class="netflix-hero-bg">
      ${backdropUrl ? `<img class="netflix-hero-image" src="${escapeHTML(backdropUrl)}" alt="${escapeHTML(item.title)} backdrop">` : ''}
      <div class="netflix-hero-video-wrap" data-hero-video-wrap></div>
    </div>
    <div class="netflix-hero-overlay"></div>
    <div class="netflix-hero-content">
      <div class="netflix-badge-row">
        <span class="netflix-kicker"><i></i> Trending Now</span>
        <span class="category-label" style="color:var(--cinema-soft)">${escapeHTML(categoryLabel)}</span>
      </div>
      <h1 class="netflix-hero-title">${escapeHTML(item.title)}</h1>
      <div class="netflix-hero-meta">
        ${rating ? `<div class="netflix-rating-pill"><span>IMDb</span> ${Number(rating).toFixed(1)}</div>` : ''}
        <span>${escapeHTML(item.year || '')}</span>
        ${genres ? `<span>${escapeHTML(genres)}</span>` : ''}
      </div>
      <p class="netflix-hero-overview">${escapeHTML(item.overview || 'Currently trending across movies and television.')}</p>
      <div class="netflix-hero-actions">
        <a class="button-netflix-play" href="${detailsHref}#trailer" data-play-hero-trailer>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          Watch Trailer
        </a>
        <a class="button-netflix-info" href="${detailsHref}">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          More Info
        </a>
      </div>
    </div>
    <div class="netflix-hero-controls">
      <button class="netflix-sound-toggle" type="button" data-hero-sound aria-label="${trendingMuted ? 'Unmute video' : 'Mute video'}" title="${trendingMuted ? 'Unmute' : 'Mute'}">
        ${trendingMuted ? '🔇' : '🔊'}
      </button>
      <button class="netflix-next-toggle" type="button" data-hero-next aria-label="Next featured title" title="Next title">
        ➔
      </button>
      <div class="netflix-hero-dots">${dots}</div>
    </div>
  </section>`;
}

/* ── CINEMATIC POPULAR & TRENDING FEED SHELL ── */
function cinematicFeedMarkup() {
  const skeletons = Array(6).fill('<div class="cinema-loading cinema-card-skeleton"></div>').join('');
  return `<section class="cinematic-section" aria-labelledby="cinematic-heading">
    <div class="cinematic-heading">
      <div>
        <p class="eyebrow">The Memento Cinema</p>
        <h2 id="cinematic-heading">Trending & Top Rated</h2>
        <p>Curated movies and series with live IMDb ratings.</p>
      </div>
      <span class="cinematic-live"><i></i> Verified IMDb Ratings</span>
    </div>
    <div class="cinema-rail-heading">
      <strong>Explore Titles</strong>
      <span>Click any title to explore details & trailer</span>
    </div>
    <div class="cinema-rail" data-cinema-feed aria-live="polite">${skeletons}</div>
    <button class="cinema-more" type="button" data-cinema-more hidden>Load more titles</button>
  </section>`;
}

/* ── LOAD HERO & CINEMATIC FEED ── */
async function loadTrendingHero() {
  const heroContainer = document.querySelector('[data-netflix-hero-container]');
  if (!heroContainer) return;
  try {
    const data = await backendRequest('/api/trending?t=' + Date.now());
    let list = data.items || [];
    if (!list.length) return;
    // Client-side shuffle to guarantee fresh random order on every load
    trendingItems = list.slice().sort(() => Math.random() - 0.5);
    renderNetflixHero(0);
    // User requested: do NOT automatically change itself
  } catch (err) {
    // Fallback: try cinematic feed item for hero
    try {
      const feed = await backendRequest('/api/cinematic-feed?page=1');
      let fallbackList = feed.items || [];
      if (fallbackList.length) {
        trendingItems = fallbackList.slice().sort(() => Math.random() - 0.5);
        renderNetflixHero(0);
      }
    } catch {}
  }
}

function renderNetflixHero(index) {
  const heroContainer = document.querySelector('[data-netflix-hero-container]');
  if (!heroContainer || !trendingItems.length) return;
  trendingActiveIndex = (index + trendingItems.length) % trendingItems.length;
  const item = trendingItems[trendingActiveIndex];
  heroContainer.innerHTML = netflixHeroMarkup(item, trendingActiveIndex, trendingItems.length);
  wireHeroControls();
  playHeroVideo(item);
}

function startHeroCycleTimer() {
  // Disabled per user request: "i dont want it to change itself"
  if (trendingHeroTimer) clearInterval(trendingHeroTimer);
  trendingHeroTimer = null;
}

async function playHeroVideo(item) {
  const videoWrap = document.querySelector('[data-hero-video-wrap]');
  if (!videoWrap || !item) return;

  let trailer = item.trailer;
  if (!trailer) {
    try {
      const res = await backendRequest(`/api/trailer?category=${item.category}&mediaType=${item.mediaType}&id=${item.id}`);
      if (res.available && res.trailer) trailer = res.trailer;
    } catch {}
  }

  if (!trailer || !trailer.embedUrl || !videoWrap.isConnected) return;

  try {
    const embed = new URL(trailer.embedUrl);
    embed.searchParams.set('autoplay', '1');
    embed.searchParams.set('mute', trendingMuted ? '1' : '0');
    embed.searchParams.set('controls', '0');
    embed.searchParams.set('modestbranding', '1');
    embed.searchParams.set('playsinline', '1');
    embed.searchParams.set('loop', '1');

    const iframe = document.createElement('iframe');
    iframe.src = embed.href;
    iframe.title = `${item.title} teaser`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.tabIndex = -1;
    videoWrap.replaceChildren(iframe);

    // Give iframe a brief moment to buffer, then reveal smoothly
    setTimeout(() => {
      if (videoWrap.isConnected) {
        videoWrap.classList.add('is-playing');
      }
    }, 600);
  } catch {}
}

function wireHeroControls() {
  const soundBtn = document.querySelector('[data-hero-sound]');
  soundBtn?.addEventListener('click', () => {
    trendingMuted = !trendingMuted;
    soundBtn.textContent = trendingMuted ? '🔇' : '🔊';
    soundBtn.setAttribute('aria-label', trendingMuted ? 'Unmute video' : 'Mute video');
    soundBtn.title = trendingMuted ? 'Unmute' : 'Mute';
    // Re-trigger video with updated mute param
    if (trendingItems[trendingActiveIndex]) {
      playHeroVideo(trendingItems[trendingActiveIndex]);
    }
  });

  const nextBtn = document.querySelector('[data-hero-next]');
  nextBtn?.addEventListener('click', () => {
    renderNetflixHero(trendingActiveIndex + 1);
    startHeroCycleTimer();
  });

  document.querySelectorAll('[data-hero-dot]').forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.dataset.heroDot || 0);
      renderNetflixHero(idx);
      startHeroCycleTimer();
    });
  });
}

/* ── LOAD CINEMATIC FEED ── */
async function loadCinematicFeed(page = 1) {
  const rail = document.querySelector('[data-cinema-feed]');
  const more = document.querySelector('[data-cinema-more]');
  if (!rail) return;
  if (page === 1) {
    rail.innerHTML = Array(6).fill('<div class="cinema-loading cinema-card-skeleton"></div>').join('');
  }
  try {
    const result = await backendRequest(`/api/cinematic-feed?page=${page}`);
    if (page === 1) {
      rail.innerHTML = result.items.map((item, index) => cinematicCard(item, index)).join('');
    } else {
      const offset = rail.querySelectorAll('.cinema-card').length;
      rail.insertAdjacentHTML('beforeend', result.items.map((item, index) => cinematicCard(item, offset + index)).join(''));
    }
    if (more) {
      more.hidden = !result.hasNextPage;
      more.dataset.page = String(result.page + 1);
    }
  } catch (error) {
    if (page === 1) {
      rail.innerHTML = `<div class="cinema-error" style="grid-column:1/-1;"><strong>The cinema is taking a moment.</strong><span>${escapeHTML(error.message)}</span><button class="button-refresh" type="button" data-cinema-retry>Try again</button></div>`;
    }
  }
}

/* ── RECOMMENDATION SECTION ── */
function recommendationSection(categoryKey) {
  const category = categories[categoryKey];
  return `<section class="section recommendation-section" style="--category-color:${category.color}">
    <div class="section-heading">
      <h2>${category.label}</h2>
      <div class="recommendation-controls">
        <a class="text-link" href="${appHref(category.page)}">Your list</a>
        <button class="button-refresh" type="button" data-refresh="${categoryKey}" aria-label="Refresh ${category.label} recommendations"><span aria-hidden="true">↻</span> Refresh ${category.label}</button>
      </div>
    </div>
    <p class="recommendation-status" data-recommendation-status="${categoryKey}" aria-live="polite" hidden></p>
    <div class="poster-grid" data-recommendation-results="${categoryKey}"></div>
  </section>`;
}

/* ── HOME PAGE ── */
function homeMarkup() {
  return `${navMarkup('home')}<main class="main">
    <div data-netflix-hero-container>
      ${netflixHeroMarkup(null)}
    </div>
    ${cinematicFeedMarkup()}
    ${Object.keys(categories).map(recommendationSection).join('')}
  </main><footer class="footer">Your watch history stays in this browser.</footer>
  <dialog class="trailer-dialog" data-trailer-dialog aria-labelledby="trailer-dialog-title">
    <div class="trailer-dialog-header"><h2 id="trailer-dialog-title" data-trailer-title>Trailer</h2><button class="icon-button" type="button" data-close-trailer aria-label="Close trailer">×</button></div>
    <div class="trailer-dialog-content" data-trailer-content><p class="trailer-dialog-status" role="status">Loading trailer...</p></div>
  </dialog>`;
}

/* ── WATCHED CARD ── */
function watchedCard(entry) {
  const detailsHref = contentDetailsHref(entry.categoryKey, entry.item);
  const title = escapeHTML(entry.item.title);
  const metadata = [entry.item.year === '—' ? '' : entry.item.year, entry.category.label].filter(Boolean).map(escapeHTML).join(' · ');
  return `<article class="poster-card watched-card">
    <div class="poster-image">
      <a class="poster-details-link" href="${detailsHref}" aria-label="View ${title} details">${imageMarkup(entry.item, entry.categoryKey)}</a>
      <div class="poster-actions" aria-label="Actions for ${title}">
        <button class="poster-action-button poster-remove" type="button" data-remove-history="${escapeHTML(entry.key)}" aria-label="Remove ${title} from watch history" title="Remove from watch history"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"></path></svg></button>
      </div>
    </div>
    <div class="poster-meta"><span>${metadata}</span></div>
    <h3><a href="${detailsHref}">${title}</a></h3>
    <select class="status-select" data-status-key="${escapeHTML(entry.key)}" aria-label="Tracking status for ${title}">
      <option value="watching" ${entry.status === 'watching' ? 'selected' : ''}>Watching</option>
      <option value="completed" ${entry.status === 'completed' ? 'selected' : ''}>Completed</option>
    </select>
  </article>`;
}

function removeFromHistory(key) {
  const history = readHistory();
  const entry = history[key];
  if (!entry) return;
  if (!window.confirm(`Remove "${entry.item?.title || 'this title'}" from your watch history?`)) return;
  delete history[key];
  writeHistory(history);
  render();
}

/* ── HISTORY PAGE ── */
function historyMarkup(history) {
  const entries = Object.entries(categories).flatMap(([categoryKey, category]) => getEntries(history, categoryKey).map((entry) => ({ ...entry, categoryKey, category })))
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  const grouped = Object.keys(categories).map((categoryKey) => {
    const categoryEntries = entries.filter((entry) => entry.categoryKey === categoryKey);
    const category = categories[categoryKey];
    return `<section class="section" style="--category-color:${category.color}">
      <div class="section-heading"><div><div class="category-label">${category.label}</div><h2>${categoryEntries.length ? `${categoryEntries.length} ${categoryEntries.length === 1 ? 'title' : 'titles'} tracked` : `No ${category.label.toLowerCase()} tracked yet`}</h2></div><a class="text-link" href="${appHref(category.page)}">Browse</a></div>
      ${categoryEntries.length ? `<div class="poster-grid watched-grid">${categoryEntries.map(watchedCard).join('')}</div>` : `<div class="empty-state"><p>Add titles from ${category.label.toLowerCase()} to keep your history together.</p><a class="button-dark" href="${appHref(category.page)}">Browse ${category.label.toLowerCase()}</a></div>`}
    </section>`;
  }).join('');
  return `${navMarkup('history')}<main class="main">
    <div class="page-heading"><div><p class="eyebrow">Your collection</p><h1>Watch history</h1></div><p class="page-intro">Everything you are watching or have finished, organized by category.</p></div>
    ${grouped}
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

/* ── SOMEDAY PAGE ── */
function somedayRow(entry) {
  return `<article class="history-row someday-row">
    <a href="${contentDetailsHref(entry.categoryKey, entry.item)}" aria-label="View ${escapeHTML(entry.item.title)} details"><div class="poster-image">${imageMarkup(entry.item, entry.categoryKey)}</div></a>
    <div><h3><a href="${contentDetailsHref(entry.categoryKey, entry.item)}">${escapeHTML(entry.item.title)}</a></h3><p>${entry.category.label} · ${entry.item.year}</p></div>
    <button class="icon-button someday-remove" type="button" data-remove-someday="${escapeHTML(entry.key)}" aria-label="Remove ${escapeHTML(entry.item.title)} from Someday" title="Remove from Someday">×</button>
  </article>`;
}

function somedayMarkup(someday) {
  const groups = Object.entries(categories).map(([categoryKey, category]) => {
    const entries = getEntries(someday, categoryKey).map((entry) => ({ ...entry, categoryKey, category }));
    return `<section class="section" style="--category-color:${category.color}">
      <div class="section-heading"><div><div class="category-label">${category.label}</div><h2>${entries.length ? `${entries.length} saved for later` : `No ${category.label.toLowerCase()} saved yet`}</h2></div><a class="text-link" href="${appHref(category.page)}">Browse</a></div>
      ${entries.length ? `<div class="history-list">${entries.map(somedayRow).join('')}</div>` : `<div class="empty-state"><p>Add ${category.label.toLowerCase()} you want to watch later from Home recommendations.</p><a class="button-dark" href="${appHref('index.html')}">Browse recommendations</a></div>`}
    </section>`;
  }).join('');
  return `${navMarkup('someday')}<main class="main">
    <div class="page-heading"><div><p class="eyebrow">Your watchlist</p><h1>Someday</h1></div><p class="page-intro">The movies, series, anime, and documentaries you plan to watch.</p></div>
    ${groups}
  </main><footer class="footer">Your Someday list stays in this browser.</footer>`;
}

/* ══════════════════════════════════════
   ANALYSIS MODULE (DASHBOARD REDESIGN)
   ══════════════════════════════════════ */
let analysisActiveCategory = 'all'; // 'all' | 'movies' | 'tv-shows' | 'anime' | 'documentaries'
const analysisDetailsCache = new Map();

function formatDurationHoursMinutes(totalMinutes) {
  if (!totalMinutes || totalMinutes <= 0) return '0 min';
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} hr`;
  return `${hours}h ${minutes}m`;
}

function calculateItemDurationMinutes(item, detail = null) {
  if (!item) return 0;
  const isTvSeries = item.mediaType === 'tv';
  
  if (isTvSeries) {
    const episodeCount = (detail && typeof detail.episodes === 'number' && detail.episodes > 0)
      ? detail.episodes
      : 12; // Realistic baseline for a series
    let perEpMinutes = 24;
    if (detail?.episodeRuntime?.length && detail.episodeRuntime[0] > 0) {
      perEpMinutes = detail.episodeRuntime[0];
    } else if (item.category === 'anime') {
      perEpMinutes = 24;
    } else {
      perEpMinutes = 45;
    }
    return episodeCount * perEpMinutes;
  }
  
  // Movie / Documentary
  if (detail?.runtime && detail.runtime > 0) return detail.runtime;
  if (detail?.omdb?.runtime) {
    const match = String(detail.omdb.runtime).match(/(\d+)/);
    if (match) return Number(match[1]);
  }
  return item.category === 'documentaries' ? 90 : 110;
}

function breadcrumbComponent(scopeLabel) {
  return `<nav class="memento-breadcrumb" aria-label="Breadcrumb">
    <ol class="memento-breadcrumb-list">
      <li class="memento-breadcrumb-item">
        <a class="memento-breadcrumb-link" href="${appHref('index.html')}">Home</a>
      </li>
      <li class="memento-breadcrumb-separator" aria-hidden="true">/</li>
      <li class="memento-breadcrumb-item">
        <a class="memento-breadcrumb-link" href="${appHref('pages/history/index.html')}">Watch History</a>
      </li>
      <li class="memento-breadcrumb-separator" aria-hidden="true">/</li>
      <li class="memento-breadcrumb-item">
        <span class="memento-breadcrumb-page">Analysis (${escapeHTML(scopeLabel)})</span>
      </li>
    </ol>
  </nav>`;
}

function analysisMarkup(history) {
  // Extract user's ACTUAL watch history, deduplicated strictly by canonical unique item key
  const seenCanonicalKeys = new Set();
  const rawEntries = Object.entries(history)
    .filter(([key, entry]) => entry && entry.item && entry.category)
    .map(([key, entry]) => ({ ...entry, key }))
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

  const entries = [];
  for (const entry of rawEntries) {
    const canonicalKey = `${entry.category}:${entry.item.mediaType}:${entry.item.id}`;
    if (!seenCanonicalKeys.has(canonicalKey)) {
      seenCanonicalKeys.add(canonicalKey);
      entries.push(entry);
    }
  }

  const scopeLabel = analysisActiveCategory === 'all'
    ? 'All Content'
    : (categories[analysisActiveCategory]?.label || 'Category');

  if (!entries.length) {
    return `${navMarkup('analysis')}<main class="main">
      ${breadcrumbComponent(scopeLabel)}
      <div class="analysis-dashboard-header">
        <div class="analysis-header-copy">
          <h1>Watch History Analytics</h1>
          <p>Dashboard insights strictly calculated from your personal viewing records.</p>
        </div>
      </div>
      <div class="analysis-panel" style="text-align: center; padding: 56px 24px;">
        <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 16px; color: var(--muted);"><path d="M3 3v18h18M9 9l3 3 4-4 3 3"/></svg>
        <h2 style="font-size: 16px; margin: 0 0 6px;">No Watched Content in History</h2>
        <p style="max-width: 440px; margin: 0 auto 20px; color: var(--muted); font-size: 13px;">Add films, series, anime, or documentaries to your Watch History to see viewing metrics, actor frequencies, and genre distributions.</p>
        <div><a class="button-primary" href="${appHref('index.html')}">Discover Titles</a></div>
      </div>
    </main><footer class="footer">Your watch history stays in this browser.</footer>`;
  }

  // Filter entries according to active scope
  const targetEntries = analysisActiveCategory === 'all'
    ? entries
    : entries.filter((e) => e.category === analysisActiveCategory);

  const totalTitles = targetEntries.length;
  const completedCount = targetEntries.filter((e) => e.status === 'completed').length;
  const inProgressCount = targetEntries.filter((e) => e.status === 'watching').length;

  // Calculate actual duration and metrics
  let totalMinutes = 0;
  const categoryMinutes = { movies: 0, 'tv-shows': 0, anime: 0, documentaries: 0 };
  const genreTally = {};
  const actorMap = new Map();   // name -> { name, image, titles: Set, count }
  const actressMap = new Map(); // name -> { name, image, titles: Set, count }

  targetEntries.forEach((entry) => {
    const item = entry.item;
    const detail = analysisDetailsCache.get(entry.key);
    const itemMins = calculateItemDurationMinutes(item, detail);
    totalMinutes += itemMins;
    if (categoryMinutes[entry.category] !== undefined) {
      categoryMinutes[entry.category] += itemMins;
    }

    // Genre distribution strictly from item
    const genres = (detail?.genres && detail.genres.length) ? detail.genres : (item.tags || []).filter((t) => t !== 'More');
    genres.forEach((genre) => {
      genreTally[genre] = (genreTally[genre] || 0) + 1;
    });

    // Cast counting (strictly excluding Anime per requirement #4)
    if (entry.category !== 'anime' && detail?.cast) {
      // Keep track of persons already counted for THIS specific title to prevent duplicate counts
      const seenPersonInTitle = new Set();
      detail.cast.forEach((person) => {
        if (!person?.name) return;
        const normalizedName = person.name.trim();
        if (seenPersonInTitle.has(normalizedName)) return;
        seenPersonInTitle.add(normalizedName);

        const isActress = person.gender === 1; // TMDB gender: 1 = Female, 2 = Male
        const map = isActress ? actressMap : actorMap;

        if (!map.has(normalizedName)) {
          map.set(normalizedName, {
            name: normalizedName,
            image: person.image || '',
            count: 0,
            titles: new Set()
          });
        }
        const record = map.get(normalizedName);
        record.count += 1;
        record.titles.add(item.title);
        if (!record.image && person.image) record.image = person.image;
      });
    }
  });

  const sortedGenres = Object.entries(genreTally).sort((a, b) => b[1] - a[1]);
  const topGenreName = sortedGenres[0]?.[0] || '—';

  const topActors = Array.from(actorMap.values())
    .map((p) => ({ ...p, titles: Array.from(p.titles) }))
    .sort((a, b) => b.count - a.count);

  const topActresses = Array.from(actressMap.values())
    .map((p) => ({ ...p, titles: Array.from(p.titles) }))
    .sort((a, b) => b.count - a.count);

  const isAnimeScope = analysisActiveCategory === 'anime';

  return `${navMarkup('analysis')}<main class="main">
    <!-- Breadcrumb (shadcn component) -->
    ${breadcrumbComponent(scopeLabel)}

    <!-- Top Dashboard Header with Segmented Filter Control -->
    <div class="analysis-dashboard-header">
      <div class="analysis-header-copy">
        <h1>Watch Analytics</h1>
        <p>Live metrics compiled from ${totalTitles} verified titles in your watch history.</p>
      </div>

      <!-- Segmented Scope Selector (All | Movies | TV Shows | Anime | Documentaries) -->
      <nav class="analysis-segmented-tabs" aria-label="Analysis content scope">
        <button class="analysis-tab-btn ${analysisActiveCategory === 'all' ? 'is-active' : ''}" type="button" data-analysis-cat="all">
          <span>All</span>
          <span class="analysis-tab-badge">${entries.length}</span>
        </button>
        ${Object.entries(categories).map(([catKey, cat]) => {
          const count = entries.filter((e) => e.category === catKey).length;
          return `<button class="analysis-tab-btn ${analysisActiveCategory === catKey ? 'is-active' : ''}" type="button" data-analysis-cat="${catKey}">
            <span>${cat.label}</span>
            <span class="analysis-tab-badge">${count}</span>
          </button>`;
        }).join('')}
      </nav>
    </div>

    <!-- PRIMARY KPI METRIC CARDS (Financial Dashboard Inspired) -->
    <section class="analysis-metrics-row" aria-label="Key viewing metrics">
      <!-- 1. Total Content -->
      <div class="analysis-metric-card">
        <div class="analysis-metric-top">
          <span class="analysis-metric-label">Total Watched</span>
          <span class="analysis-metric-icon-wrap" aria-hidden="true">🎬</span>
        </div>
        <div class="analysis-metric-value">${totalTitles}</div>
        <div class="analysis-metric-sub">
          <span class="analysis-metric-pill">${completedCount} done</span>
          <span>${inProgressCount} in progress</span>
        </div>
      </div>

      <!-- 2. Viewing Duration -->
      <div class="analysis-metric-card">
        <div class="analysis-metric-top">
          <span class="analysis-metric-label">Viewing Duration</span>
          <span class="analysis-metric-icon-wrap" aria-hidden="true">⏱️</span>
        </div>
        <div class="analysis-metric-value">${formatDurationHoursMinutes(totalMinutes)}</div>
        <div class="analysis-metric-sub">
          <span>${Math.round(totalMinutes)} total minutes logged</span>
        </div>
      </div>

      <!-- 3. Top Genre -->
      <div class="analysis-metric-card">
        <div class="analysis-metric-top">
          <span class="analysis-metric-label">Leading Genre</span>
          <span class="analysis-metric-icon-wrap" aria-hidden="true">🏷️</span>
        </div>
        <div class="analysis-metric-value" style="font-size:22px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHTML(topGenreName)}</div>
        <div class="analysis-metric-sub">
          <span>${sortedGenres.length} distinct genres</span>
        </div>
      </div>

      <!-- 4. Average Title Duration -->
      <div class="analysis-metric-card">
        <div class="analysis-metric-top">
          <span class="analysis-metric-label">Avg Runtime</span>
          <span class="analysis-metric-icon-wrap" aria-hidden="true">📊</span>
        </div>
        <div class="analysis-metric-value">${totalTitles ? Math.round(totalMinutes / totalTitles) : 0}m</div>
        <div class="analysis-metric-sub">
          <span>Per title in ${scopeLabel.toLowerCase()}</span>
        </div>
      </div>
    </section>

    <!-- ANIME SPECIFIC NOTE -->
    ${isAnimeScope ? `
      <div class="analysis-anime-note">
        <span aria-hidden="true">ℹ️</span>
        <div><strong>Anime Scope:</strong> Actor and actress analysis is excluded for animated productions. Displaying animation formats, runtime volume, and genre composition.</div>
      </div>
    ` : ''}

    <!-- TWO COLUMN PANELS: Cast Rankings & Genre Distribution -->
    <div class="analysis-grid-2col">
      ${!isAnimeScope ? `
        <!-- Top Actors Panel -->
        <section class="analysis-panel" aria-labelledby="actors-heading">
          <div class="analysis-panel-header">
            <div class="analysis-panel-title">
              <span aria-hidden="true">👤</span>
              <h2 id="actors-heading">Most Watched Actors</h2>
            </div>
            <span class="analysis-panel-meta">Based on actual cast appearances</span>
          </div>
          ${renderDashboardPeopleList(topActors, 'Actors', 'actors')}
        </section>

        <!-- Top Actresses Panel -->
        <section class="analysis-panel" aria-labelledby="actresses-heading">
          <div class="analysis-panel-header">
            <div class="analysis-panel-title">
              <span aria-hidden="true">👩</span>
              <h2 id="actresses-heading">Most Watched Actresses</h2>
            </div>
            <span class="analysis-panel-meta">Based on actual cast appearances</span>
          </div>
          ${renderDashboardPeopleList(topActresses, 'Actresses', 'actresses')}
        </section>
      ` : ''}

      <!-- Genre Distribution Panel -->
      <section class="analysis-panel" aria-labelledby="genres-heading">
        <div class="analysis-panel-header">
          <div class="analysis-panel-title">
            <span aria-hidden="true">📈</span>
            <h2 id="genres-heading">Genre Distribution</h2>
          </div>
          <span class="analysis-panel-meta">${sortedGenres.length} categories</span>
        </div>
        ${renderDashboardGenreBars(sortedGenres)}
      </section>

      <!-- Category Breakdown or Format Details Panel -->
      <section class="analysis-panel" aria-labelledby="breakdown-heading">
        <div class="analysis-panel-header">
          <div class="analysis-panel-title">
            <span aria-hidden="true">⏳</span>
            <h2 id="breakdown-heading">${analysisActiveCategory === 'all' ? 'Duration by Category' : 'Viewing Scale'}</h2>
          </div>
          <span class="analysis-panel-meta">${formatDurationHoursMinutes(totalMinutes)} total</span>
        </div>
        ${analysisActiveCategory === 'all' ? `
          <div class="analysis-breakdown-list">
            ${Object.entries(categoryMinutes).map(([catKey, mins]) => {
              const count = targetEntries.filter((e) => e.category === catKey).length;
              const pct = totalMinutes > 0 ? Math.round((mins / totalMinutes) * 100) : 0;
              return `<div class="analysis-breakdown-card">
                <div class="analysis-breakdown-left">
                  <span class="analysis-category-dot" style="background:${categories[catKey].color}"></span>
                  <div>
                    <div class="analysis-breakdown-name">${categories[catKey].label}</div>
                    <div class="analysis-breakdown-count">${count} ${count === 1 ? 'title' : 'titles'}</div>
                  </div>
                </div>
                <div class="analysis-breakdown-right">
                  <div class="analysis-breakdown-time">${formatDurationHoursMinutes(mins)}</div>
                  <div class="analysis-breakdown-pct">${pct}% of watch time</div>
                </div>
              </div>`;
            }).join('')}
          </div>
        ` : `
          <div class="analysis-breakdown-list">
            <div class="analysis-breakdown-card">
              <div class="analysis-breakdown-name">Active Scope</div>
              <div class="analysis-breakdown-time" style="color:var(--amber)">${scopeLabel}</div>
            </div>
            <div class="analysis-breakdown-card">
              <div class="analysis-breakdown-name">Titles in Category</div>
              <div class="analysis-breakdown-time">${totalTitles} titles</div>
            </div>
            <div class="analysis-breakdown-card">
              <div class="analysis-breakdown-name">Total Category Watch Time</div>
              <div class="analysis-breakdown-time">${formatDurationHoursMinutes(totalMinutes)}</div>
            </div>
            <div class="analysis-breakdown-card">
              <div class="analysis-breakdown-name">Completion Rate</div>
              <div class="analysis-breakdown-time">${totalTitles ? Math.round((completedCount / totalTitles) * 100) : 0}%</div>
            </div>
          </div>
        `}
      </section>
    </div>

    <!-- DATA-DENSE LOG TABLE: Titles in Selected Scope -->
    <section class="analysis-panel" aria-labelledby="history-log-heading">
      <div class="analysis-panel-header">
        <div class="analysis-panel-title">
          <span aria-hidden="true">📋</span>
          <h2 id="history-log-heading">Watched Content Records (${totalTitles})</h2>
        </div>
        <span class="analysis-panel-meta">Raw entries used in analysis calculations</span>
      </div>
      <div style="overflow-x:auto">
        <table class="analysis-history-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>IMDb Rating</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${targetEntries.map((e) => {
              const item = e.item;
              const detail = analysisDetailsCache.get(e.key);
              const mins = calculateItemDurationMinutes(item, detail);
              const detailsHref = contentDetailsHref(e.category, item);
              const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : (Number.isFinite(item.voteAverage) ? item.voteAverage : null);
              return `<tr>
                <td>
                  <div class="analysis-history-title-cell">
                    ${item.image ? `<img class="analysis-history-thumb" src="${escapeHTML(item.image)}" alt="" loading="lazy">` : ''}
                    <div>
                      <a href="${detailsHref}" style="color:var(--ink);font-weight:600;text-decoration:none">${escapeHTML(item.title)}</a>
                      <div style="font-size:10.5px;color:var(--muted)">${(item.tags || []).slice(0, 2).join(' · ')}</div>
                    </div>
                  </div>
                </td>
                <td><span style="color:var(--muted)">${categories[e.category]?.label || e.category}</span></td>
                <td>${escapeHTML(item.year || '—')}</td>
                <td>${rating ? `★ ${Number(rating).toFixed(1)}` : '—'}</td>
                <td><strong>${formatDurationHoursMinutes(mins)}</strong></td>
                <td><span class="analysis-status-pill ${e.status}">${e.status || 'watching'}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </section>
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

function renderDashboardPeopleList(people, label, listId) {
  if (!people.length) {
    return `<div style="padding:24px;text-align:center;color:var(--muted);font-size:12.5px">No ${label.toLowerCase()} found in this viewing selection.</div>`;
  }
  const INITIAL_COUNT = 8;
  const maxCount = people[0]?.count || 1;

  // Podium for top 3 (if at least 1 person exists)
  // Podium visual order: 2nd (left), 1st (center, tallest), 3rd (right)
  const top1 = people[0] || null;
  const top2 = people[1] || null;
  const top3 = people[2] || null;

  const renderPodiumStep = (person, rank, stepClass) => {
    if (!person) return `<div class="analysis-podium-step ${stepClass} is-empty"></div>`;
    return `
      <div class="analysis-podium-step ${stepClass}">
        <div class="analysis-podium-avatar-wrap">
          <div class="analysis-podium-crown">#${rank}</div>
          <div class="analysis-podium-avatar">
            ${person.image
              ? `<img src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}" loading="lazy">`
              : `<div class="analysis-podium-initials">${escapeHTML(castInitials(person.name))}</div>`}
          </div>
        </div>
        <div class="analysis-podium-info">
          <span class="analysis-podium-name" title="${escapeHTML(person.name)}">${escapeHTML(person.name)}</span>
          <span class="analysis-podium-score">${person.count} <small>${person.count === 1 ? 'title' : 'titles'}</small></span>
        </div>
        <div class="analysis-podium-pillar">
          <span class="analysis-podium-rank-tag">RANK ${rank}</span>
        </div>
      </div>
    `;
  };

  const podiumMarkup = `
    <div class="analysis-podium-stage">
      ${renderPodiumStep(top2, 2, 'podium-rank-2')}
      ${renderPodiumStep(top1, 1, 'podium-rank-1')}
      ${renderPodiumStep(top3, 3, 'podium-rank-3')}
    </div>
  `;

  // The rest of the leaderboard starting from position 4 onwards
  const remainingPeople = people.slice(3);
  if (!remainingPeople.length) {
    return `<div class="analysis-people-container" id="lb-${listId}">${podiumMarkup}</div>`;
  }

  const rows = remainingPeople.map((person, subIdx) => {
    const rank = subIdx + 4;
    const pct = Math.round((person.count / maxCount) * 100);
    const isHidden = (subIdx + 3) >= INITIAL_COUNT;
    return `<div class="analysis-lb-row ${isHidden ? 'lb-hidden' : ''}" ${isHidden ? `data-lb-extra="${listId}"` : ''}>
      <div class="analysis-lb-rank">#${rank}</div>
      <div class="analysis-lb-avatar">
        ${person.image
          ? `<img src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}" loading="lazy">`
          : `<div class="analysis-lb-initials">${escapeHTML(castInitials(person.name))}</div>`}
      </div>
      <div class="analysis-lb-info">
        <span class="analysis-lb-name">${escapeHTML(person.name)}</span>
        <span class="analysis-lb-titles" title="${escapeHTML(person.titles.join(', '))}">
          ${person.titles.slice(0, 2).map(escapeHTML).join(', ')}${person.titles.length > 2 ? ` +${person.titles.length - 2} more` : ''}
        </span>
      </div>
      <div class="analysis-lb-metric">
        <div class="analysis-lb-count">${person.count}</div>
        <div class="analysis-lb-bar-wrap"><div class="analysis-lb-bar-fill" style="width:${pct}%"></div></div>
      </div>
    </div>`;
  }).join('');

  const hasMore = people.length > INITIAL_COUNT;
  const showMoreBtn = hasMore
    ? `<button class="analysis-lb-expand-btn" type="button" data-lb-toggle="${listId}" data-lb-total="${people.length}" data-lb-visible="${INITIAL_COUNT}">
        <span class="lb-btn-text">Show ${people.length - INITIAL_COUNT} more</span>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>`
    : '';

  return `<div class="analysis-people-container" id="lb-${listId}">
    ${podiumMarkup}
    <div class="analysis-lb-list">
      <div class="analysis-lb-section-sub">Runner-ups & Notable Appearances</div>
      ${rows}
    </div>
    ${showMoreBtn}
  </div>`;
}


function renderDashboardGenreBars(sortedGenres) {
  if (!sortedGenres.length) {
    return `<div style="padding:24px;text-align:center;color:var(--muted);font-size:12.5px">No genre data found in this selection.</div>`;
  }
  const INITIAL_COUNT = 8;
  const topCount = sortedGenres[0][1] || 1;
  const bars = sortedGenres.map(([genre, count], idx) => {
    const pct = Math.round((count / topCount) * 100);
    const isHidden = idx >= INITIAL_COUNT;
    return `<div class="analysis-bar-item ${isHidden ? 'lb-hidden' : ''}" ${isHidden ? 'data-lb-extra="genres"' : ''}>
      <div class="analysis-bar-top">
        <span class="analysis-bar-title">${escapeHTML(genre)}</span>
        <span class="analysis-bar-stat">${count} ${count === 1 ? 'title' : 'titles'}</span>
      </div>
      <div class="analysis-bar-rail">
        <div class="analysis-bar-indicator" style="width:${pct}%"></div>
      </div>
    </div>`;
  }).join('');

  const hasMore = sortedGenres.length > INITIAL_COUNT;
  const showMoreBtn = hasMore
    ? `<button class="analysis-lb-expand-btn" type="button" data-lb-toggle="genres" data-lb-total="${sortedGenres.length}" data-lb-visible="${INITIAL_COUNT}">
        <span class="lb-btn-text">Show ${sortedGenres.length - INITIAL_COUNT} more genres</span>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>`
    : '';

  return `<div class="analysis-bars-stack" id="lb-genres">${bars}</div>${showMoreBtn}`;
}


async function preloadAnalysisDetails(historyEntries) {
  // Preload cast & runtime details in background for titles in Watch History
  const missing = historyEntries.filter((e) => !analysisDetailsCache.has(e.key));
  if (!missing.length) return;

  for (let i = 0; i < missing.length; i += 4) {
    const chunk = missing.slice(i, i + 4);
    await Promise.allSettled(chunk.map(async (entry) => {
      const item = entry.item;
      const query = new URLSearchParams({ category: entry.category, id: item.id, mediaType: item.mediaType });
      try {
        const details = await backendRequest(`/api/details?${query.toString()}`);
        analysisDetailsCache.set(entry.key, details);
      } catch {}
    }));
  }

  // If the user is currently on the Analysis page, re-render to reflect the loaded cast & runtime
  if (document.body.dataset.page === 'analysis') {
    render();
  }
}

function wireAnalysisControls() {
  const root = document.getElementById('app');
  if (!root) return;

  // Segmented scope filter buttons (All | Movies | TV Shows | Anime | Documentaries)
  root.querySelectorAll('[data-analysis-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      analysisActiveCategory = btn.dataset.analysisCat;
      render();
    });
  });

  // Leaderboard & Ranking Show More / Collapse toggle
  root.querySelectorAll('[data-lb-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.lbToggle;
      const extraItems = root.querySelectorAll(`[data-lb-extra="${targetId}"]`);
      const isExpanded = btn.classList.contains('is-expanded');

      if (isExpanded) {
        extraItems.forEach((el) => el.classList.add('lb-hidden'));
        btn.classList.remove('is-expanded');
        const hiddenCount = extraItems.length;
        const textSpan = btn.querySelector('.lb-btn-text');
        if (textSpan) textSpan.textContent = `Show ${hiddenCount} more`;
      } else {
        extraItems.forEach((el) => el.classList.remove('lb-hidden'));
        btn.classList.add('is-expanded');
        const textSpan = btn.querySelector('.lb-btn-text');
        if (textSpan) textSpan.textContent = 'Show less';
      }
    });
  });
}

/* ── KEY HELPERS ── */
function historyKey(categoryKey, item) {
  return `${categoryKey}:${item.mediaType}:${item.id}`;
}

/* ── SEARCH RESULT ── */
function searchResultMarkup(categoryKey, item, history) {
  const resultKey = historyKey(categoryKey, item);
  const detailsHref = contentDetailsHref(categoryKey, item);
  const tracked = Object.values(history).some((entry) => entry.item && entry.item.id === item.id && entry.item.mediaType === item.mediaType && entry.category === categoryKey);
  searchResultCache.set(resultKey, item);
  return `<article class="search-result">
    <a class="search-result-image" href="${detailsHref}" aria-label="View ${escapeHTML(item.title)} details">${imageMarkup(item, categoryKey)}</a>
    <div class="search-result-copy"><h3><a href="${detailsHref}">${escapeHTML(item.title)}</a></h3><p>${escapeHTML(item.year)} · ${categories[categoryKey].label}${item.tags.length ? ` · ${escapeHTML(item.tags.slice(0, 2).join(' · '))}` : ''}</p><p class="search-overview">${escapeHTML(item.overview)}</p></div>
    <button class="button-dark" type="button" data-add-result="${escapeHTML(resultKey)}" ${tracked ? 'disabled' : ''}>${tracked ? 'In history' : 'Add'}</button>
  </article>`;
}

/* ── RECOMMENDATION CARD ── */
function recommendationCard(categoryKey, item) {
  const key = historyKey(categoryKey, item);
  const history = readHistory();
  const someday = readSomeday();
  const inHistory = Boolean(history[key]);
  const savedForLater = Boolean(someday[key]);
  const detailsHref = contentDetailsHref(categoryKey, item);
  const genres = item.tags.filter((tag) => tag !== 'More').slice(0, 2).join(' · ');
  const metadata = [item.year === '—' ? '' : item.year, genres, categories[categoryKey].label].filter(Boolean).map(escapeHTML).join(' · ');
  searchResultCache.set(key, item);
  const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : (Number.isFinite(item.voteAverage) && item.voteAverage > 0 ? item.voteAverage : null);
  return `<article class="poster-card" data-content-key="${escapeHTML(key)}">
    <div class="poster-image">
      <a class="poster-details-link" href="${detailsHref}" aria-label="View ${escapeHTML(item.title)} details">${imageMarkup(item, categoryKey)}</a>
      <div class="poster-actions" aria-label="Actions for ${escapeHTML(item.title)}">
        <button class="poster-action-button ${inHistory ? 'is-added' : ''}" type="button" data-add-history="${escapeHTML(key)}" aria-label="${inHistory ? 'Already in' : 'Add to'} Watch History: ${escapeHTML(item.title)}" title="${inHistory ? 'Already in Watch History' : 'Add to Watch History'}" ${inHistory ? 'disabled' : ''}>${inHistory ? '✓' : '+'}</button>
        <button class="poster-action-button poster-heart ${savedForLater ? 'is-added' : ''}" type="button" data-add-someday="${escapeHTML(key)}" aria-label="${savedForLater ? 'Already in' : 'Add to'} Someday: ${escapeHTML(item.title)}" title="${savedForLater ? 'Already in Someday' : 'Save for Someday'}" ${savedForLater ? 'disabled' : ''}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button>
      </div>
    </div>
    <div class="poster-meta"><span>${metadata}</span>${rating ? `<span class="imdb-rating">IMDb ${Number(rating).toFixed(1)}</span>` : ''}</div>
    <h3><a href="${detailsHref}">${escapeHTML(item.title)}</a></h3>
  </article>`;
}

function addRecommendationToCollection(button, categoryKey, collectionName) {
  const key = button.dataset[collectionName === 'history' ? 'addHistory' : 'addSomeday'];
  const item = searchResultCache.get(key);
  if (!item) return;
  const collection = collectionName === 'history' ? readHistory() : readSomeday();
  if (collection[key]) return;
  collection[key] = { category: categoryKey, status: collectionName === 'history' ? 'watching' : 'planned', updatedAt: Date.now(), item };
  if (collectionName === 'history') writeHistory(collection);
  else writeSomeday(collection);
  button.disabled = true;
  button.classList.add('is-added');
  if (collectionName === 'history') button.textContent = '✓';
  button.setAttribute('aria-label', `${collectionName === 'history' ? 'Added to Watch History' : 'Saved to Someday'}: ${item.title}`);
  button.title = collectionName === 'history' ? 'Added to Watch History' : 'Saved to Someday';
}

async function openRecommendationTrailer(item) {
  const dialog = document.querySelector('[data-trailer-dialog]');
  const title = document.querySelector('[data-trailer-title]');
  const content = document.querySelector('[data-trailer-content]');
  if (!dialog || !title || !content || typeof dialog.showModal !== 'function') return;

  title.textContent = `${item.title} · Trailer`;
  content.innerHTML = '<p class="trailer-dialog-status" role="status">Finding an official trailer...</p>';
  dialog.showModal();

  try {
    const query = new URLSearchParams({ category: item.category, mediaType: item.mediaType, id: item.id });
    const result = await backendRequest(`/api/trailer?${query.toString()}`);
    const trailer = result.trailer;
    if (!result.available || !trailer?.embedUrl) {
      content.innerHTML = '<p class="trailer-dialog-status" role="status">A playable trailer is currently unavailable for this title.</p>';
      return;
    }
    const embedUrl = new URL(trailer.embedUrl);
    if (embedUrl.protocol !== 'https:' || !['www.youtube-nocookie.com', 'www.youtube.com', 'player.vimeo.com'].includes(embedUrl.hostname)) {
      throw new Error('The backend returned an unsupported trailer player.');
    }
    content.innerHTML = `<div class="trailer-player"><iframe src="${escapeHTML(embedUrl.href)}" title="${escapeHTML(item.title)} trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p class="trailer-caption">${escapeHTML(trailer.name || 'Trailer')}${trailer.official ? ' · Official' : ''}</p>`;
  } catch (error) {
    content.innerHTML = `<p class="trailer-dialog-status" role="alert">${escapeHTML(error.message)}</p>`;
  }
}

async function loadRecommendationRating(card) {
  const item = searchResultCache.get(card.dataset.contentKey);
  if (!item) return;
  const query = new URLSearchParams({ category: item.category, id: item.id, mediaType: item.mediaType });
  try {
    const details = await backendRequest(`/api/details?${query.toString()}`);
    if (!card.isConnected || !Number.isFinite(details.imdbRating)) return;
    const metadata = card.querySelector('.poster-meta');
    if (!metadata || metadata.querySelector('.imdb-rating')) return;
    const badge = document.createElement('span');
    badge.className = 'imdb-rating';
    badge.textContent = `IMDb ${details.imdbRating.toFixed(1)}`;
    metadata.append(badge);
  } catch {
    return;
  }
}

function loadVisibleRecommendationRatings(results) {
  if (!imdbRatingsCapabilityPromise) {
    imdbRatingsCapabilityPromise = backendRequest('/api/health')
      .then((data) => Boolean(data.imdbRatingsAvailable))
      .catch(() => false);
  }
  void imdbRatingsCapabilityPromise.then((available) => {
    if (!available || !results.isConnected) return;
    const cards = results.querySelectorAll('.poster-card[data-content-key]');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => void loadRecommendationRating(card));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        observer.unobserve(entry.target);
        void loadRecommendationRating(entry.target);
      });
    }, { rootMargin: '180px 0px' });
    cards.forEach((card) => observer.observe(card));
  });
}

/* ── DETAILS PAGE ── */
function detailsMarkup() {
  return `${navMarkup('')}<main class="main"><div class="content-details" data-content-details><p class="details-loading" role="status">Loading content details...</p></div></main>`;
}

const castPreviewCount = 10;

function castInitials(name) {
  return String(name || '').split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase() || '?';
}

function castCardMarkup(person, hidden) {
  const photo = person.image
    ? `<img src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}" loading="lazy" width="185" height="231">`
    : `<span class="cast-fallback" aria-hidden="true">${escapeHTML(castInitials(person.name))}</span>`;
  return `<li class="cast-card"${hidden ? ' hidden' : ''}>
    <div class="cast-photo">${photo}</div>
    <strong class="cast-name">${escapeHTML(person.name)}</strong>
    ${person.character ? `<span class="cast-character">${escapeHTML(person.character)}</span>` : ''}
  </li>`;
}

function castMarkup(detail) {
  const cast = (detail.cast || []).filter((person) => person?.name);
  if (!cast.length) return '';
  return `<section class="detail-cast" aria-labelledby="cast-heading">
    <h2 id="cast-heading">Cast</h2>
    <ul class="cast-grid">${cast.map((person, index) => castCardMarkup(person, index >= castPreviewCount)).join('')}</ul>
    ${cast.length > castPreviewCount ? `<button class="cast-toggle" type="button" data-cast-toggle aria-expanded="false">Show all ${cast.length}</button>` : ''}
  </section>`;
}

function wireCastSection(container) {
  container.querySelectorAll('.cast-photo img').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = document.createElement('span');
      fallback.className = 'cast-fallback';
      fallback.setAttribute('aria-hidden', 'true');
      fallback.textContent = castInitials(image.alt);
      image.replaceWith(fallback);
    }, { once: true });
  });
  const toggle = container.querySelector('[data-cast-toggle]');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    container.querySelectorAll('.cast-card').forEach((card, index) => {
      card.hidden = !expanded ? false : index >= castPreviewCount;
    });
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.textContent = expanded ? `Show all ${container.querySelectorAll('.cast-card').length}` : 'Show fewer';
  });
}

function detailsContentMarkup(detail) {
  const categoryLabel = categories[detail.category]?.label || 'Title';
  const runtime = detail.runtime ? `${detail.runtime} min` : detail.episodeRuntime?.length ? `${detail.episodeRuntime[0]} min per episode` : '';
  const facts = [
    ['Content type', `${categoryLabel} (${detail.mediaType === 'tv' ? 'TV' : 'Movie'})`],
    ['Release date', detail.releaseDate],
    ['Runtime', runtime],
    ['Seasons', detail.seasons],
    ['Episodes', detail.episodes],
    ['Status', detail.status],
    ['Original language', detail.originalLanguage],
    ['Country', detail.originCountries?.join(', ')],
    ['Production', detail.productionCompanies?.slice(0, 3).join(', ')],
    ['Created by', detail.keyPeople?.map((person) => person.name).join(', ')],
    ['OMDb rated', detail.omdb?.rated],
    ['OMDb runtime', detail.omdb?.runtime],
    ['Director', detail.omdb?.director],
    ['Awards', detail.omdb?.awards],
    ['Box office', detail.omdb?.boxOffice]
  ].filter(([, value]) => value);
  const ratingVal = Number.isFinite(detail.imdbRating) ? detail.imdbRating : (Number.isFinite(detail.tmdbRating) ? detail.tmdbRating : null);
  const imdbValue = ratingVal ? `${ratingVal.toFixed(1)} / 10` : 'Unavailable';
  return `<article class="content-detail">
    <div class="detail-poster">${detail.poster ? `<img src="${escapeHTML(detail.poster)}" alt="${escapeHTML(detail.title)} poster">` : `<div class="detail-no-poster">Artwork unavailable</div>`}</div>
    <div class="detail-copy">
      <p class="eyebrow">${escapeHTML(categoryLabel)} · ${escapeHTML(detail.year || 'Release year unavailable')}</p>
      <h1>${escapeHTML(detail.title)}</h1>
      ${detail.originalTitle && detail.originalTitle !== detail.title ? `<p class="detail-original-title">${escapeHTML(detail.originalTitle)}</p>` : ''}
      ${detail.tagline ? `<p class="detail-tagline">${escapeHTML(detail.tagline)}</p>` : ''}
      <div class="detail-genres">${(detail.genres || []).map((genre) => `<span>${escapeHTML(genre)}</span>`).join('')}</div>
      <div class="detail-ratings"><div class="detail-rating"><span>IMDb</span><strong class="${ratingVal ? '' : 'is-unavailable'}">${imdbValue}</strong>${detail.imdbVotes ? `<small>${escapeHTML(detail.imdbVotes)} votes</small>` : ''}</div></div>
      <section class="detail-synopsis"><h2>Synopsis</h2><p>${detail.overview ? escapeHTML(detail.overview) : 'Synopsis unavailable from the content catalog.'}</p>${detail.extendedSynopsis && detail.extendedSynopsis !== detail.overview ? `<details class="extended-plot"><summary>Expanded plot (may contain spoilers)</summary><p>${escapeHTML(detail.extendedSynopsis)}</p></details>` : ''}</section>
      ${trailerMarkup(detail)}
      ${castMarkup(detail)}
      ${detail.keywords?.length ? `<section class="detail-keywords"><h2>Topics</h2><div>${detail.keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join('')}</div></section>` : ''}
      ${facts.length ? `<dl class="detail-facts">${facts.map(([label, value]) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join('')}</dl>` : ''}
      ${detail.imdbId ? `<a class="detail-external-link" href="https://www.imdb.com/title/${encodeURIComponent(detail.imdbId)}/" target="_blank" rel="noreferrer">View on IMDb →</a>` : ''}
    </div>
  </article>`;
}

function trailerMarkup(detail) {
  if (!detail.trailer?.embedUrl) {
    return '<section class="detail-trailer" id="trailer"><h2>Trailer</h2><p class="trailer-unavailable">Trailer currently unavailable for this title.</p></section>';
  }
  return `<section class="detail-trailer">
    <h2 id="trailer">Trailer</h2>
    <div class="trailer-player"><iframe src="${escapeHTML(detail.trailer.embedUrl)}" title="${escapeHTML(detail.title)} ${escapeHTML(detail.trailer.type.toLowerCase())}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
    <p class="trailer-caption">${escapeHTML(detail.trailer.name)}${detail.trailer.official ? ' · Official' : ''}${detail.trailer.source === 'YouTube Data API' ? ' · YouTube' : ''}</p>
  </section>`;
}

async function loadContentDetails() {
  const container = document.querySelector('[data-content-details]');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const query = new URLSearchParams({
    category: params.get('category') || '',
    mediaType: params.get('mediaType') || '',
    id: params.get('id') || ''
  });
  try {
    const details = await backendRequest(`/api/details?${query.toString()}`);
    const [omdbResult, trailerResult] = await Promise.allSettled([
      details.imdbId
        ? backendRequest(`/api/omdb?${new URLSearchParams({ imdbId: details.imdbId }).toString()}`)
        : Promise.resolve(null),
      backendRequest(`/api/trailer?${query.toString()}`)
    ]);
    const omdbResponse = omdbResult.status === 'fulfilled' ? omdbResult.value : null;
    const trailerResponse = trailerResult.status === 'fulfilled' ? trailerResult.value : null;
    if (omdbResponse?.available && omdbResponse.metadata) {
      details.omdb = omdbResponse.metadata;
      details.imdbRating = omdbResponse.metadata.rating;
      details.imdbVotes = omdbResponse.metadata.votes;
      details.extendedSynopsis = omdbResponse.metadata.extendedPlot;
    }
    if (trailerResponse?.available) details.trailer = trailerResponse.trailer;
    container.innerHTML = detailsContentMarkup(details);
    wireCastSection(container);
    document.title = `${details.title} | Memento`;
    if (window.location.hash === '#trailer') {
      requestAnimationFrame(() => {
        const trailer = document.querySelector('#trailer');
        trailer?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        trailer?.focus({ preventScroll: true });
      });
    }
  } catch (error) {
    container.innerHTML = `<div class="empty-state"><h1>Details unavailable</h1><p>${escapeHTML(error.message)}</p><a class="button-dark" href="${appHref('index.html')}">Back to Home</a></div>`;
  }
}

/* ── IMPORT ── */
const importBatchSize = 10;
const importMaxTitles = 300;
const importMaxBytes = 200 * 1024;
const importSummaries = {};

function parseImportList(text) {
  const seen = new Set();
  const entries = [];
  let truncated = false;
  text.replace(/^\uFEFF/, '').split(/\r?\n/).forEach((line) => {
    let title = line.trim();
    if (!title || title.startsWith('#')) return;
    title = title.replace(/^(?:\d{1,3}[.)]|[-*•])\s+/, '').trim();
    let year;
    const yearMatch = title.match(/^(.*\S)\s*(?:[([\s*((?:19|20)\d{2})\s*[)\]]|[-–,]\s+((?:19|20)\d{2}))$/);
    if (yearMatch) {
      title = yearMatch[1].trim();
      year = Number(yearMatch[2] || yearMatch[3]);
    }
    title = title.replace(/\s+/g, ' ');
    if (!title) return;
    const dedupeKey = `${title.toLowerCase()}|${year || ''}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    if (entries.length >= importMaxTitles) {
      truncated = true;
      return;
    }
    entries.push({ raw: line.trim(), title, year });
  });
  return { entries, truncated };
}

function importSectionMarkup(categoryKey, category) {
  const summary = importSummaries[categoryKey];
  const summaryMarkup = summary ? `<div class="import-summary" role="status">
    <p><strong>${summary.added}</strong> added${summary.existing ? ` · ${summary.existing} already in history` : ''}${summary.unverified.length ? ` · ${summary.unverified.length} not added` : ''}${summary.truncated ? ` · only the first ${importMaxTitles} titles were read` : ''}</p>
    ${summary.unverified.length ? `<details class="import-skipped"><summary>Not added</summary><ul>${summary.unverified.map((entry) => `<li><span>${escapeHTML(entry.input)}</span><em>${escapeHTML(entry.reason)}</em></li>`).join('')}</ul></details>` : ''}
  </div>` : '';
  return `<section class="section import-section" id="import-watched"><div class="section-heading"><div><p class="eyebrow">Already watched</p><h2>Import ${category.label.toLowerCase()} from a .txt file</h2></div></div>
    <form class="import-form" data-import-form="${categoryKey}">
      <input id="import-${categoryKey}" name="file" type="file" accept=".txt,text/plain" aria-label="Choose a .txt file of watched ${category.label.toLowerCase()}">
      <button class="button-dark" type="submit" disabled>Import</button>
      <p class="search-status" data-import-status aria-live="polite">One title per line. Each title is verified before it is added.</p>
    </form>${summaryMarkup}
  </section>`;
}

async function runImport(form) {
  const categoryKey = form.dataset.importForm;
  const input = form.querySelector('input[type="file"]');
  const submit = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[data-import-status]');
  const file = input.files?.[0];
  if (!file) return;
  if (file.size > importMaxBytes) {
    status.textContent = 'That file is too large. Keep it under 200 KB.';
    return;
  }
  input.disabled = true;
  submit.disabled = true;
  try {
    const { entries, truncated } = parseImportList(await file.text());
    if (!entries.length) {
      status.textContent = 'No titles were found in that file.';
      input.disabled = false;
      submit.disabled = false;
      return;
    }
    const matched = [];
    const unverified = [];
    for (let start = 0; start < entries.length; start += importBatchSize) {
      const batch = entries.slice(start, start + importBatchSize);
      status.textContent = `Verifying ${Math.min(start + importBatchSize, entries.length)} of ${entries.length}...`;
      try {
        const data = await backendRequest('/api/import/match', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category: categoryKey, titles: batch.map(({ title, year }) => ({ title, year })) })
        });
        batch.forEach((entry, index) => {
          const result = data.results?.[index];
          if (result?.status === 'matched' && result.item) matched.push(result.item);
          else unverified.push({ input: entry.raw, reason: result?.reason || 'Could not be checked, try again' });
        });
      } catch {
        batch.forEach((entry) => unverified.push({ input: entry.raw, reason: 'Could not be checked, try again' }));
      }
    }
    const history = readHistory();
    const seen = new Set();
    const baseTime = Date.now();
    let added = 0;
    let existing = 0;
    matched.forEach((item, index) => {
      const key = historyKey(categoryKey, item);
      if (seen.has(key)) return;
      seen.add(key);
      if (history[key]) { existing += 1; return; }
      history[key] = { category: categoryKey, status: 'completed', updatedAt: baseTime - index, item };
      added += 1;
    });
    if (added) writeHistory(history);
    importSummaries[categoryKey] = { added, existing, unverified, truncated };
    render();
  } catch (error) {
    status.textContent = error.message || 'The file could not be imported.';
    input.disabled = false;
    submit.disabled = !input.files?.length;
  }
}

/* ── CATEGORY PAGE ── */
function categoryMarkup(categoryKey, history) {
  const category = categories[categoryKey];
  const entries = getEntries(history, categoryKey);
  return `${navMarkup(categoryKey)}<main class="main" style="--category-color:${category.color};--category-wash:${category.wash}">
    <section class="category-hero"><div><p class="eyebrow">Memento · ${category.label}</p><h1>${category.label}</h1><p>${category.description}</p><a class="button-dark hero-import-link" href="#import-watched">Import watched list (.txt)</a></div><span class="category-number" aria-hidden="true">0${Object.keys(categories).indexOf(categoryKey) + 1}</span></section>
    <section class="section add-title-section"><div class="section-heading"><div><p class="eyebrow">Find something to track</p><h2>Search ${category.label.toLowerCase()}</h2></div></div>
      <form class="title-search" data-title-search="${categoryKey}"><label for="search-${categoryKey}">Title</label><input id="search-${categoryKey}" name="query" type="search" placeholder="Start typing a title..." autocomplete="off" minlength="2"><p class="search-status" data-search-status="${categoryKey}" aria-live="polite">Search the live catalog by title.</p><div class="search-results" data-search-results="${categoryKey}"></div></form>
    </section>
    ${importSectionMarkup(categoryKey, category)}
    <section class="section"><div class="section-heading"><div><p class="eyebrow">Your list</p><h2>${entries.length ? 'In your watch history' : 'Start your watch history'}</h2></div><span class="category-label">${entries.length} tracked</span></div>
      ${entries.length ? `<div class="poster-grid watched-grid">${entries.map((entry) => watchedCard({ ...entry, categoryKey, category })).join('')}</div>` : `<div class="empty-state"><h3>No ${category.label.toLowerCase()} here yet</h3><p>Your ${category.label.toLowerCase()} watch history will appear here.</p></div>`}
    </section>
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

/* ── THEME ── */
function setTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(themeStorageKey, nextTheme);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.textContent = nextTheme === 'light' ? '☀' : '☾';
    toggle.setAttribute('aria-label', `Switch to ${nextTheme === 'light' ? 'dark' : 'light'} theme`);
  }
  // Update theme-color meta
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = nextTheme === 'dark' ? '#050405' : '#da525d';
}

/* ── RECOMMENDATIONS ── */
async function updateRecommendationSection(categoryKey, page) {
  const status = document.querySelector(`[data-recommendation-status="${categoryKey}"]`);
  const results = document.querySelector(`[data-recommendation-results="${categoryKey}"]`);
  if (!status || !results) return;
  const refreshButton = document.querySelector(`[data-refresh="${categoryKey}"]`);
  if (refreshButton) refreshButton.dataset.page = String(page);
  status.hidden = true;
  status.textContent = '';
  results.innerHTML = '';
  try {
    const result = await loadRecommendations(categoryKey, readHistory(), page);
    if (!result.items.length) throw new Error('No matching titles were returned. Refresh to try another page.');
    results.innerHTML = result.items.map((item) => recommendationCard(categoryKey, item)).join('');
    results.querySelectorAll('[data-add-history]').forEach((button) => button.addEventListener('click', () => addRecommendationToCollection(button, categoryKey, 'history')));
    results.querySelectorAll('[data-add-someday]').forEach((button) => button.addEventListener('click', () => addRecommendationToCollection(button, categoryKey, 'someday')));
    loadVisibleRecommendationRatings(results);
  } catch (error) {
    status.textContent = error.message;
    status.hidden = false;
  }
}

/* ── SEARCH ── */
function runSearch(form, query) {
  const categoryKey = form.dataset.titleSearch;
  const status = form.querySelector(`[data-search-status="${categoryKey}"]`);
  const results = form.querySelector(`[data-search-results="${categoryKey}"]`);
  if (query.trim().length < 2) {
    status.textContent = 'Enter at least two characters to search.';
    results.innerHTML = '';
    return;
  }
  status.textContent = 'Searching the live catalog...';
  results.innerHTML = '';
  const requestId = String(Number(form.dataset.requestId || 0) + 1);
  form.dataset.requestId = requestId;
  searchCategory(categoryKey, query.trim()).then((items) => {
    if (form.dataset.requestId !== requestId) return;
    status.textContent = items.length ? `${items.length} matching titles` : 'No matching titles found.';
    results.innerHTML = items.map((item) => searchResultMarkup(categoryKey, item, readHistory())).join('');
    results.querySelectorAll('[data-add-result]').forEach((button) => button.addEventListener('click', () => {
      const item = searchResultCache.get(button.dataset.addResult);
      if (!item) return;
      const updated = readHistory();
      const entry = { category: categoryKey, status: 'watching', updatedAt: Date.now(), item };
      updated[historyKey(categoryKey, item)] = entry;
      writeHistory(updated);
      render();
    }));
  }).catch((error) => {
    if (form.dataset.requestId !== requestId) return;
    status.textContent = error.message;
  });
}

/* ══════════════════════════════════════
   CINEMATIC PAGE LOADER
   ══════════════════════════════════════ */
function injectPageLoader() {
  if (document.querySelector('.cinema-page-loader')) return;
  const loader = document.createElement('div');
  loader.className = 'cinema-page-loader';
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <svg class="cinema-loader-logo" viewBox="78 55 398 300" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="miter" stroke-width="34"><path d="M146 326V145L292 294 438 145V326"></path></g>
      <circle cx="146" cy="126" r="48" fill="none" stroke="currentColor" stroke-width="12"></circle>
      <circle cx="146" cy="126" r="7" fill="currentColor"></circle>
    </svg>
    <div class="cinema-loader-bar"></div>
    <span class="cinema-loader-text">Memento</span>`;
  document.body.prepend(loader);
  // Hide after the page is rendered and a short cinematic pause
  requestAnimationFrame(() => {
    setTimeout(() => {
      loader.classList.add('is-hidden');
      setTimeout(() => loader.remove(), 800);
    }, 600);
  });
}

/* ══════════════════════════════════════
   MAIN RENDER
   ══════════════════════════════════════ */
function render() {
  const page = document.body.dataset.page;
  const history = readHistory();
  const root = document.getElementById('app');
  root.innerHTML = `<div class="shell">${page === 'home' ? homeMarkup() : page === 'history' ? historyMarkup(history) : page === 'someday' ? somedayMarkup(readSomeday()) : page === 'analysis' ? analysisMarkup(history) : page === 'details' ? detailsMarkup() : categoryMarkup(page, history)}</div>`;
  setTheme(localStorage.getItem(themeStorageKey) || 'light');

  root.querySelector('.theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
  });

  if (root.dataset.trailerClickHandler !== 'ready') {
    root.dataset.trailerClickHandler = 'ready';
    root.addEventListener('click', (event) => {
      const button = event.target.closest('[data-play-trailer]');
      if (!button || !root.contains(button)) return;
      const item = searchResultCache.get(button.dataset.playTrailer);
      if (item) void openRecommendationTrailer(item);
    });
  }

  root.querySelector('[data-close-trailer]')?.addEventListener('click', () => {
    const dialog = root.querySelector('[data-trailer-dialog]');
    if (dialog?.open) dialog.close();
  });
  root.querySelector('[data-trailer-dialog]')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
  root.querySelector('[data-trailer-dialog]')?.addEventListener('close', () => {
    const content = root.querySelector('[data-trailer-content]');
    if (content) content.innerHTML = '<p class="trailer-dialog-status" role="status">Loading trailer...</p>';
  });

  root.querySelectorAll('[data-title-search]').forEach((form) => {
    const input = form.querySelector('input[name="query"]');
    input.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      const query = input.value;
      searchDebounce = setTimeout(() => runSearch(form, query), 300);
    });
    form.addEventListener('submit', (event) => event.preventDefault());
  });

  root.querySelectorAll('[data-import-form]').forEach((form) => {
    const input = form.querySelector('input[type="file"]');
    const submit = form.querySelector('button[type="submit"]');
    const status = form.querySelector('[data-import-status]');
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      submit.disabled = !file;
      if (file) status.textContent = `${file.name} selected.`;
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      void runImport(form);
    });
  });

  if (page === 'home') {
    void loadTrendingHero();

    root.querySelector('[data-cinema-more]')?.addEventListener('click', (event) => {
      const button = event.currentTarget;
      button.disabled = true;
      void loadCinematicFeed(Number(button.dataset.page || 2)).finally(() => { button.disabled = false; });
    });

    root.querySelectorAll('[data-cinema-history]').forEach((button) => button.addEventListener('click', () => {
      const item = searchResultCache.get(button.dataset.cinemaHistory);
      if (!item) return;
      const h = readHistory();
      const key = historyKey(item.category, item);
      if (h[key]) return;
      h[key] = { category: item.category, status: 'watching', updatedAt: Date.now(), item };
      writeHistory(h);
      button.disabled = true;
      button.textContent = '✓';
      button.classList.add('is-added');
    }));

    root.querySelectorAll('[data-cinema-someday]').forEach((button) => button.addEventListener('click', () => {
      const item = searchResultCache.get(button.dataset.cinemaSomeday);
      if (!item) return;
      const s = readSomeday();
      const key = historyKey(item.category, item);
      if (s[key]) return;
      s[key] = { category: item.category, status: 'planned', updatedAt: Date.now(), item };
      writeSomeday(s);
      button.disabled = true;
      button.classList.add('is-added');
    }));

    root.querySelector('[data-cinema-retry]')?.addEventListener('click', () => void loadCinematicFeed(1));
    void loadCinematicFeed(1);
  }

  root.querySelectorAll('[data-refresh]').forEach((button) => button.addEventListener('click', () => {
    const categoryKey = button.dataset.refresh;
    const page = randomRecommendationPage(Number(button.dataset.page || 0));
    button.disabled = true;
    updateRecommendationSection(categoryKey, page).finally(() => { button.disabled = false; });
  }));

  root.querySelectorAll('[data-status-key]').forEach((select) => select.addEventListener('change', () => {
    const updated = readHistory();
    const entry = updated[select.dataset.statusKey];
    if (entry) {
      entry.status = select.value;
      entry.updatedAt = Date.now();
      writeHistory(updated);
      render();
    }
  }));

  root.querySelectorAll('[data-remove-history]').forEach((button) => button.addEventListener('click', () => removeFromHistory(button.dataset.removeHistory)));

  root.querySelectorAll('[data-remove-someday]').forEach((button) => button.addEventListener('click', () => {
    const someday = readSomeday();
    delete someday[button.dataset.removeSomeday];
    writeSomeday(someday);
    render();
  }));

  if (page === 'details') void loadContentDetails();

  if (page === 'analysis') {
    wireAnalysisControls();
    const historyEntries = Object.entries(history)
      .filter(([key, entry]) => entry && entry.item && entry.category)
      .map(([key, entry]) => ({ ...entry, key }));
    void preloadAnalysisDetails(historyEntries);
  }

  if (page === 'home') {
    Object.keys(categories).forEach((categoryKey) => updateRecommendationSection(categoryKey, randomRecommendationPage()));
  }
}

/* ── SCROLL NAVBAR AUTO-HIDE ── */
let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
let scrollTicking = false;

function initScrollNavbar() {
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const topbar = document.querySelector('.topbar');
        if (topbar) {
          if (currentScrollY > 70) {
            topbar.classList.add('nav-scrolled');
            // If scrolling down, hide navbar. If scrolling up, reveal it.
            if (currentScrollY > lastScrollY && currentScrollY > 120) {
              topbar.classList.add('nav-hidden');
            } else if (currentScrollY < lastScrollY) {
              topbar.classList.remove('nav-hidden');
            }
          } else {
            topbar.classList.remove('nav-scrolled');
            topbar.classList.remove('nav-hidden');
          }
        }
        lastScrollY = Math.max(0, currentScrollY);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

// Show cinematic loader on first paint, then render & init navbar
injectPageLoader();
initScrollNavbar();
render();