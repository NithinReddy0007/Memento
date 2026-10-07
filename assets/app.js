const categories = {
  movies: { label: 'Movies', singular: 'movie', page: 'pages/movies/index.html', color: '#c5755d', wash: '#f1ddd2', description: 'Feature films, remembered and found again.' },
  'tv-shows': {
    label: 'TV Shows', singular: 'TV show', page: 'pages/tv-shows/index.html', color: '#4b7785', wash: '#d9e8e7', description: 'Series worth staying with, episode by episode.'
  },
  anime: { label: 'Anime', singular: 'anime', page: 'pages/anime/index.html', color: '#a66783', wash: '#f0dfe8', description: 'Animated worlds, from quiet moments to big adventures.' },
  documentaries: { label: 'Documentaries', singular: 'documentary', page: 'pages/documentaries/index.html', color: '#a58145', wash: '#ede7d5', description: 'True stories and real worlds, carefully collected.' }
};

const storageKey = 'memento.watchHistory.v1';
const somedayStorageKey = 'memento.someday.v1';
const themeStorageKey = 'memento.theme.v1';
const searchResultCache = new Map();
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

/* ── CINEMATIC CARD ── */
function cinematicCard(item, index) {
  const key = historyKey(item.category, item);
  const detailsHref = contentDetailsHref(item.category, item);
  const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : item.voteAverage;
  const ratingLabel = Number.isFinite(item.imdbRating) ? 'IMDb' : 'TMDB';
  searchResultCache.set(key, item);
  return `<article class="cinema-card" style="--card-index:${index}" data-cinema-key="${escapeHTML(key)}" data-cinema-category="${escapeHTML(item.category)}" data-cinema-media="${escapeHTML(item.mediaType)}" data-cinema-id="${escapeHTML(item.id)}">
    <a class="cinema-card-link" href="${detailsHref}" aria-label="View ${escapeHTML(item.title)} details">
      <div class="cinema-art">
        ${item.image ? `<img src="${escapeHTML(item.image)}" alt="" loading="lazy">` : ''}
        <span class="cinema-teaser" data-cinema-teaser aria-hidden="true"></span>
        <span class="cinema-vignette" aria-hidden="true"></span>
        <span class="cinema-rank">${String(index + 1).padStart(2, '0')}</span>
      </div>
      <div class="cinema-card-copy">
        <div class="cinema-meta"><span>${escapeHTML(item.year)}</span><span>${escapeHTML(ratingLabel)} ${Number(rating || 0).toFixed(1)}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.category === 'tv-shows' ? 'Series' : 'Movie')}</p>
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

/* ── CINEMATIC FEATURE / HERO ── */
function cinematicHero(item) {
  if (!item) return '';
  const detailsHref = contentDetailsHref(item.category, item);
  const rating = Number.isFinite(item.imdbRating) ? item.imdbRating : item.voteAverage;
  return `<article class="cinema-feature" data-cinema-feature style="--feature-backdrop:url('${escapeHTML(item.backdrop || item.image || '')}')">
    <div class="cinema-feature-copy">
      <p class="eyebrow">IMDb · Editor's spotlight</p>
      <span class="cinema-feature-kicker">Top 100 · ${escapeHTML(item.category === 'tv-shows' ? 'Series' : 'Film')}</span>
      <h2>${escapeHTML(item.title)}</h2>
      <div class="cinema-feature-meta">
        <span>${escapeHTML(item.year)}</span>
        <span>${Number(rating || 0).toFixed(1)} <b>${Number.isFinite(item.imdbRating) ? 'IMDb' : 'TMDB'}</b></span>
        <span>${escapeHTML((item.tags || []).slice(0, 2).join(' · '))}</span>
      </div>
      <p>${escapeHTML(item.overview || 'A highly rated title worth discovering.')}</p>
      <a class="button-primary" href="${detailsHref}">Explore title <span aria-hidden="true">→</span></a>
    </div>
    <div class="cinema-feature-art" aria-hidden="true">
      <img src="${escapeHTML(item.image || '')}" alt="">
      <span class="cinema-feature-glow"></span>
    </div>
  </article>`;
}

/* ── CINEMATIC FEED SHELL ── */
function cinematicFeedMarkup() {
  const skeletons = Array(6).fill('<div class="cinema-loading cinema-card-skeleton"></div>').join('');
  return `<section class="cinematic-section" aria-labelledby="cinematic-heading">
    <div class="cinematic-heading">
      <div>
        <p class="eyebrow">The Memento Cinema</p>
        <h2 id="cinematic-heading">IMDb Rated · Top 100</h2>
        <p>Highly rated movies and series, presented like a night at the cinema.</p>
      </div>
      <span class="cinematic-live"><i></i> Curated from IMDb ratings</span>
    </div>
    <div class="cinema-feature-wrap" data-cinema-feature-wrap>
      <div class="cinema-loading cinema-feature-skeleton"></div>
    </div>
    <div class="cinema-rail-heading">
      <strong>100 titles worth your time</strong>
      <span>Hover a poster to preview that exact title</span>
    </div>
    <div class="cinema-rail" data-cinema-feed aria-live="polite">${skeletons}</div>
    <button class="cinema-more" type="button" data-cinema-more hidden>Load more from the Top 100</button>
  </section>`;
}

/* ── LOAD CINEMATIC FEED ── */
async function loadCinematicFeed(page = 1) {
  const rail = document.querySelector('[data-cinema-feed]');
  const feature = document.querySelector('[data-cinema-feature-wrap]');
  const more = document.querySelector('[data-cinema-more]');
  if (!rail || !feature) return;
  if (page === 1) {
    rail.innerHTML = Array(6).fill('<div class="cinema-loading cinema-card-skeleton"></div>').join('');
  }
  try {
    const result = await backendRequest(`/api/cinematic-feed?page=${page}`);
    if (page === 1) {
      feature.innerHTML = cinematicHero(result.items[0]);
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
      feature.innerHTML = `<div class="cinema-error"><strong>The cinema is taking a moment.</strong><span>${escapeHTML(error.message)}</span><button class="button-refresh" type="button" data-cinema-retry>Try again</button></div>`;
      rail.innerHTML = '';
    }
  }
}

/* ── TEASER LOGIC (FIXED: strictly keyed to exact TMDB id) ── */
function stopCinemaTeaser(card) {
  const holder = card.querySelector('[data-cinema-teaser]');
  if (holder) holder.innerHTML = '';
  card.classList.remove('is-teasing');
}

async function startCinemaTeaser(card) {
  const holder = card.querySelector('[data-cinema-teaser]');
  if (!holder || card.dataset.teaserLoading === '1' || card.classList.contains('is-teasing')) return;

  // Capture the identity of *this exact card* before any await
  const exactCategory = card.dataset.cinemaCategory;
  const exactMedia    = card.dataset.cinemaMedia;
  const exactId       = card.dataset.cinemaId;
  const requestKey    = `${exactMedia}:${exactId}`;

  card.dataset.teaserLoading = '1';
  card.dataset.teaserRequest = requestKey;

  try {
    const query = new URLSearchParams({ category: exactCategory, mediaType: exactMedia, id: exactId });
    const result = await backendRequest(`/api/trailer?${query.toString()}`);

    // After the await: verify the card is still hovered (same request) and
    // the trailer actually belongs to the title we asked for.
    if (
      !card.isConnected ||
      card.dataset.teaserRequest !== requestKey ||
      !result.available ||
      !result.trailer?.embedUrl
    ) return;

    const embed = new URL(result.trailer.embedUrl);
    embed.searchParams.set('autoplay', '1');
    embed.searchParams.set('mute', '1');
    embed.searchParams.set('controls', '0');
    embed.searchParams.set('modestbranding', '1');
    embed.searchParams.set('playsinline', '1');
    embed.searchParams.set('loop', '1');

    const iframe = document.createElement('iframe');
    iframe.src = embed.href;
    // Title contains the exact movie name so we know which teaser is showing
    iframe.title = `${card.querySelector('h3')?.textContent || 'Title'} teaser`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    holder.replaceChildren(iframe);

    // One final guard after sync DOM work
    requestAnimationFrame(() => {
      if (card.isConnected && card.dataset.teaserRequest === requestKey) {
        card.classList.add('is-teasing');
      }
    });
  } catch {
    // A missing trailer should leave the poster intact.
    // Never show another title's video.
  } finally {
    if (card.isConnected && card.dataset.teaserRequest === requestKey) {
      card.dataset.teaserLoading = '0';
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
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">A little more of what you love</p><h1>Your story, still unfolding.</h1><p>Keep the films, series, anime, and true stories you watch in one thoughtful place.</p><a class="button-primary" href="${appHref('pages/history/index.html')}">View your watch history <span aria-hidden="true">→</span></a></div>
      <div class="hero-art" role="img" aria-label="Rows of seats in a cinema"></div>
    </section>
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
  return `<article class="poster-card" data-content-key="${escapeHTML(key)}">
    <div class="poster-image">
      <a class="poster-details-link" href="${detailsHref}" aria-label="View ${escapeHTML(item.title)} details">${imageMarkup(item, categoryKey)}</a>
      <div class="poster-actions" aria-label="Actions for ${escapeHTML(item.title)}">
        <button class="poster-action-button ${inHistory ? 'is-added' : ''}" type="button" data-add-history="${escapeHTML(key)}" aria-label="${inHistory ? 'Already in' : 'Add to'} Watch History: ${escapeHTML(item.title)}" title="${inHistory ? 'Already in Watch History' : 'Add to Watch History'}" ${inHistory ? 'disabled' : ''}>${inHistory ? '✓' : '+'}</button>
        <button class="poster-action-button poster-heart ${savedForLater ? 'is-added' : ''}" type="button" data-add-someday="${escapeHTML(key)}" aria-label="${savedForLater ? 'Already in' : 'Add to'} Someday: ${escapeHTML(item.title)}" title="${savedForLater ? 'Already in Someday' : 'Save for Someday'}" ${savedForLater ? 'disabled' : ''}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button>
      </div>
    </div>
    <div class="poster-meta"><span>${metadata}</span>${Number.isFinite(item.imdbRating) ? `<span class="imdb-rating">IMDb ${item.imdbRating.toFixed(1)}</span>` : ''}</div>
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
  const imdbValue = Number.isFinite(detail.imdbRating) ? `${detail.imdbRating.toFixed(1)} / 10` : 'Unavailable';
  return `<article class="content-detail">
    <div class="detail-poster">${detail.poster ? `<img src="${escapeHTML(detail.poster)}" alt="${escapeHTML(detail.title)} poster">` : `<div class="detail-no-poster">Artwork unavailable</div>`}</div>
    <div class="detail-copy">
      <p class="eyebrow">${escapeHTML(categoryLabel)} · ${escapeHTML(detail.year || 'Release year unavailable')}</p>
      <h1>${escapeHTML(detail.title)}</h1>
      ${detail.originalTitle && detail.originalTitle !== detail.title ? `<p class="detail-original-title">${escapeHTML(detail.originalTitle)}</p>` : ''}
      ${detail.tagline ? `<p class="detail-tagline">${escapeHTML(detail.tagline)}</p>` : ''}
      <div class="detail-genres">${(detail.genres || []).map((genre) => `<span>${escapeHTML(genre)}</span>`).join('')}</div>
      <div class="detail-ratings"><div class="detail-rating"><span>IMDb</span><strong class="${Number.isFinite(detail.imdbRating) ? '' : 'is-unavailable'}">${imdbValue}</strong>${detail.imdbVotes ? `<small>${escapeHTML(detail.imdbVotes)} votes</small>` : ''}</div>${Number.isFinite(detail.tmdbRating) ? `<div class="detail-rating"><span>TMDB</span><strong>${detail.tmdbRating.toFixed(1)} / 10</strong></div>` : ''}</div>
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
  if (metaTheme) metaTheme.content = nextTheme === 'dark' ? '#050508' : '#f6f5f1';
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
  root.innerHTML = `<div class="shell">${page === 'home' ? homeMarkup() : page === 'history' ? historyMarkup(history) : page === 'someday' ? somedayMarkup(readSomeday()) : page === 'details' ? detailsMarkup() : categoryMarkup(page, history)}</div>`;
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
    const rail = root.querySelector('[data-cinema-feed]');

    // ── Teaser: pointer enter/leave on the RAIL (event delegation)
    rail?.addEventListener('pointerover', (event) => {
      const card = event.target.closest('.cinema-card');
      if (card && rail.contains(card)) void startCinemaTeaser(card);
    });
    rail?.addEventListener('pointerout', (event) => {
      const card = event.target.closest('.cinema-card');
      if (!card || !rail.contains(card)) return;
      if (event.relatedTarget && card.contains(event.relatedTarget)) return;
      // Cancel pending teaser for this card so a stale fetch never shows
      card.dataset.teaserRequest = '';
      stopCinemaTeaser(card);
    });

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

  if (page === 'home') {
    Object.keys(categories).forEach((categoryKey) => updateRecommendationSection(categoryKey, randomRecommendationPage()));
  }
}

// Show cinematic loader on first paint, then render
injectPageLoader();
render();