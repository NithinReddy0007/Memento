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

function readHistory() {
  return readCollection(storageKey);
}

function writeHistory(history) {
  writeCollection(storageKey, history);
}

function readSomeday() {
  return readCollection(somedayStorageKey);
}

function writeSomeday(someday) {
  writeCollection(somedayStorageKey, someday);
}

function randomRecommendationPage(previousPage = 0) {
  let page;
  do {
    page = Math.floor(Math.random() * 8) + 1;
  } while (page === previousPage);
  return page;
}

function getEntries(history, categoryKey) {
  return Object.entries(history)
    .filter(([key, entry]) => key.startsWith(`${categoryKey}:`) && entry && categories[categoryKey])
    .map(([key, entry]) => ({
      ...entry,
      item: entry.item,
      key
    }))
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
  try {
    data = JSON.parse(responseText);
  } catch {
    data = undefined;
  }

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
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
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

function recommendationSection(categoryKey) {
  const category = categories[categoryKey];
  return `<section class="section recommendation-section" style="--category-color:${category.color}">
    <div class="section-heading">
      <h2>${category.label}</h2>
      <div class="recommendation-controls"><a class="text-link" href="${appHref(category.page)}">Your list</a><button class="button-refresh" type="button" data-refresh="${categoryKey}" aria-label="Refresh ${category.label} recommendations"><span aria-hidden="true">↻</span> Refresh ${category.label}</button></div>
    </div>
    <p class="recommendation-status" data-recommendation-status="${categoryKey}" aria-live="polite" hidden></p>
    <div class="poster-grid" data-recommendation-results="${categoryKey}"></div>
  </section>`;
}

function homeMarkup() {
  return `${navMarkup('home')}<main class="main">
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">A little more of what you love</p><h1>Your story, still unfolding.</h1><p>Keep the films, series, anime, and true stories you watch in one thoughtful place.</p><a class="button-primary" href="${appHref('pages/history/index.html')}">View your watch history <span aria-hidden="true">→</span></a></div>
      <div class="hero-art" role="img" aria-label="Rows of seats in a cinema"></div>
    </section>
    ${Object.keys(categories).map(recommendationSection).join('')}
  </main><footer class="footer">Your watch history stays in this browser.</footer>
  <dialog class="trailer-dialog" data-trailer-dialog aria-labelledby="trailer-dialog-title">
    <div class="trailer-dialog-header"><h2 id="trailer-dialog-title" data-trailer-title>Trailer</h2><button class="icon-button" type="button" data-close-trailer aria-label="Close trailer">×</button></div>
    <div class="trailer-dialog-content" data-trailer-content><p class="trailer-dialog-status" role="status">Loading trailer...</p></div>
  </dialog>`;
}

function historyRow(entry) {
  return `<article class="history-row">
    <a href="${contentDetailsHref(entry.categoryKey, entry.item)}" aria-label="View ${escapeHTML(entry.item.title)} details"><div class="poster-image">${imageMarkup(entry.item, entry.categoryKey)}</div></a>
    <div><h3><a href="${contentDetailsHref(entry.categoryKey, entry.item)}">${escapeHTML(entry.item.title)}</a></h3><p>${entry.category.label} · ${entry.item.year}</p></div>
    <select class="status-select" data-status-key="${entry.key}" aria-label="Tracking status for ${escapeHTML(entry.item.title)}">
      <option value="watching" ${entry.status === 'watching' ? 'selected' : ''}>Watching</option>
      <option value="completed" ${entry.status === 'completed' ? 'selected' : ''}>Completed</option>
    </select>
  </article>`;
}

function historyMarkup(history) {
  const entries = Object.entries(categories).flatMap(([categoryKey, category]) => getEntries(history, categoryKey).map((entry) => ({ ...entry, categoryKey, category })))
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  const grouped = Object.keys(categories).map((categoryKey) => {
    const categoryEntries = entries.filter((entry) => entry.categoryKey === categoryKey);
    const category = categories[categoryKey];
    return `<section class="section" style="--category-color:${category.color}">
      <div class="section-heading"><div><div class="category-label">${category.label}</div><h2>${categoryEntries.length ? `${categoryEntries.length} ${categoryEntries.length === 1 ? 'title' : 'titles'} tracked` : `No ${category.label.toLowerCase()} tracked yet`}</h2></div><a class="text-link" href="${appHref(category.page)}">Browse</a></div>
      ${categoryEntries.length ? `<div class="history-list">${categoryEntries.map(historyRow).join('')}</div>` : `<div class="empty-state"><p>Add titles from ${category.label.toLowerCase()} to keep your history together.</p><a class="button-dark" href="${appHref(category.page)}">Browse ${category.label.toLowerCase()}</a></div>`}
    </section>`;
  }).join('');
  return `${navMarkup('history')}<main class="main">
    <div class="page-heading"><div><p class="eyebrow">Your collection</p><h1>Watch history</h1></div><p class="page-intro">Everything you are watching or have finished, organized by category.</p></div>
    ${grouped}
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

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

function historyKey(categoryKey, item) {
  return `${categoryKey}:${item.mediaType}:${item.id}`;
}

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
      <button class="poster-trailer-button" type="button" data-play-trailer="${escapeHTML(key)}" aria-label="Play ${escapeHTML(item.title)} trailer in Memento" title="Play trailer">▶ <span>Trailer</span></button>
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
  collection[key] = {
    category: categoryKey,
    status: collectionName === 'history' ? 'watching' : 'planned',
    updatedAt: Date.now(),
    item
  };
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
    const query = new URLSearchParams({
      category: item.category,
      mediaType: item.mediaType,
      id: item.id
    });
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

function detailsMarkup() {
  return `${navMarkup('')}<main class="main"><div class="content-details" data-content-details><p class="details-loading" role="status">Loading content details...</p></div></main>`;
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
      ${detail.cast?.length ? `<section class="detail-people"><h2>Featuring</h2><ul>${detail.cast.map((person) => `<li><strong>${escapeHTML(person.name)}</strong>${person.role ? `<span>${escapeHTML(person.role)}</span>` : ''}</li>`).join('')}</ul></section>` : ''}
      ${detail.keywords?.length ? `<section class="detail-keywords"><h2>Topics</h2><div>${detail.keywords.map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join('')}</div></section>` : ''}
      ${facts.length ? `<dl class="detail-facts">${facts.map(([label, value]) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join('')}</dl>` : ''}
      ${detail.imdbId ? `<a class="detail-external-link" href="https://www.imdb.com/title/${encodeURIComponent(detail.imdbId)}/" target="_blank" rel="noreferrer">View on IMDb</a>` : ''}
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

function categoryMarkup(categoryKey, history) {
  const category = categories[categoryKey];
  const entries = getEntries(history, categoryKey);
  return `${navMarkup(categoryKey)}<main class="main" style="--category-color:${category.color};--category-wash:${category.wash}">
    <section class="category-hero"><div><p class="eyebrow">Memento · ${category.label}</p><h1>${category.label}</h1><p>${category.description}</p></div><span class="category-number" aria-hidden="true">0${Object.keys(categories).indexOf(categoryKey) + 1}</span></section>
    <section class="section add-title-section"><div class="section-heading"><div><p class="eyebrow">Find something to track</p><h2>Search ${category.label.toLowerCase()}</h2></div></div>
      <form class="title-search" data-title-search="${categoryKey}"><label for="search-${categoryKey}">Title</label><input id="search-${categoryKey}" name="query" type="search" placeholder="Start typing a title..." autocomplete="off" minlength="2"><p class="search-status" data-search-status="${categoryKey}" aria-live="polite">Search the live catalog by title.</p><div class="search-results" data-search-results="${categoryKey}"></div></form>
    </section>
    <section class="section"><div class="section-heading"><div><p class="eyebrow">Your list</p><h2>${entries.length ? 'In your watch history' : 'Start your watch history'}</h2></div><span class="category-label">${entries.length} tracked</span></div>
      ${entries.length ? `<div class="history-list">${entries.map((entry) => historyRow({ ...entry, categoryKey, category })).join('')}</div>` : `<div class="empty-state"><h3>No ${category.label.toLowerCase()} here yet</h3><p>Your ${category.label.toLowerCase()} watch history will appear here.</p></div>`}
    </section>
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

function setTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(themeStorageKey, nextTheme);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.textContent = nextTheme === 'light' ? '☀' : '☾';
    toggle.setAttribute('aria-label', `Switch to ${nextTheme === 'light' ? 'dark' : 'light'} theme`);
  }
}

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

  root.querySelectorAll('[data-remove-someday]').forEach((button) => button.addEventListener('click', () => {
    const someday = readSomeday();
    const entry = someday[button.dataset.removeSomeday];
    delete someday[button.dataset.removeSomeday];
    writeSomeday(someday);
    render();
  }));

  if (page === 'details') void loadContentDetails();

  if (page === 'home') {
    Object.keys(categories).forEach((categoryKey) => updateRecommendationSection(categoryKey, randomRecommendationPage()));
  }
}

render();