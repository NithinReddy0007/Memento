const categories = {
  movies: { label: 'Movies', singular: 'movie', page: 'movies.html', color: '#c5755d', wash: '#f1ddd2', description: 'Feature films, remembered and found again.' },
  'tv-shows': {
    label: 'TV Shows', singular: 'TV show', page: 'tv-shows.html', color: '#4b7785', wash: '#d9e8e7', description: 'Series worth staying with, episode by episode.'
  },
  anime: { label: 'Anime', singular: 'anime', page: 'anime.html', color: '#a66783', wash: '#f0dfe8', description: 'Animated worlds, from quiet moments to big adventures.' },
  documentaries: { label: 'Documentaries', singular: 'documentary', page: 'documentaries.html', color: '#a58145', wash: '#ede7d5', description: 'True stories and real worlds, carefully collected.' }
};

const storageKey = 'memento.watchHistory.v1';
const themeStorageKey = 'memento.theme.v1';
const searchResultCache = new Map();
let searchDebounce;
const configuredApiBaseUrl = window.MEMENTO_CONFIG?.apiBaseUrl?.trim() || '';
const fallbackImages = {
  movies: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  'tv-shows': 'https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akHmW0oyYCO.jpg',
  anime: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  documentaries: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
};
const navigation = [
  { label: 'Home', page: 'home', href: 'index.html' },
  { label: 'History', page: 'history', href: 'history.html' },
  ...Object.entries(categories).map(([key, category]) => ({ label: category.label, page: key, href: category.page }))
];

function readHistory() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

function writeHistory(history) {
  localStorage.setItem(storageKey, JSON.stringify(history));
}

function randomRecommendationPage(previousPage = 0) {
  let page;
  do {
    page = Math.floor(Math.random() * 500) + 1;
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

function navMarkup(activePage) {
  return `<header class="topbar">
    <a class="brand" href="index.html" aria-label="Memento home"><span class="brand-mark">m</span><span>Memento</span></a>
    <nav class="nav" aria-label="Main navigation">${navigation.map((item) => `<a href="${item.href}" class="${item.page === activePage ? 'active' : ''}" ${item.page === activePage ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav>
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
      <div><div class="category-label">${category.label}</div><h2>${category.label} to watch next</h2></div>
      <div class="recommendation-controls"><a class="text-link" href="${category.page}">Your list</a><button class="button-refresh" type="button" data-refresh="${categoryKey}" aria-label="Refresh ${category.label} recommendations"><span aria-hidden="true">↻</span> Refresh ${category.label}</button></div>
    </div>
    <p class="recommendation-status" data-recommendation-status="${categoryKey}" aria-live="polite">Loading recommendations...</p>
    <div class="poster-grid" data-recommendation-results="${categoryKey}"></div>
  </section>`;
}

function homeMarkup() {
  return `${navMarkup('home')}<main class="main">
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">A little more of what you love</p><h1>Your story, still unfolding.</h1><p>Keep the films, series, anime, and true stories you watch in one thoughtful place.</p><a class="button-primary" href="history.html">View your watch history <span aria-hidden="true">→</span></a></div>
      <div class="hero-art" role="img" aria-label="Rows of seats in a cinema"></div>
    </section>
    ${Object.keys(categories).map(recommendationSection).join('')}
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

function historyRow(entry) {
  return `<article class="history-row">
    <a href="${entry.category.page}" aria-label="Open ${escapeHTML(entry.item.title)}"><div class="poster-image">${imageMarkup(entry.item, entry.categoryKey)}</div></a>
    <div><h3>${escapeHTML(entry.item.title)}</h3><p>${entry.category.label} · ${entry.item.year}</p></div>
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
      <div class="section-heading"><div><div class="category-label">${category.label}</div><h2>${categoryEntries.length ? `${categoryEntries.length} ${categoryEntries.length === 1 ? 'title' : 'titles'} tracked` : `No ${category.label.toLowerCase()} tracked yet`}</h2></div><a class="text-link" href="${category.page}">Browse</a></div>
      ${categoryEntries.length ? `<div class="history-list">${categoryEntries.map(historyRow).join('')}</div>` : `<div class="empty-state"><p>Add titles from ${category.label.toLowerCase()} to keep your history together.</p><a class="button-dark" href="${category.page}">Browse ${category.label.toLowerCase()}</a></div>`}
    </section>`;
  }).join('');
  return `${navMarkup('history')}<main class="main">
    <div class="page-heading"><div><p class="eyebrow">Your collection</p><h1>Watch history</h1></div><p class="page-intro">Everything you are watching or have finished, organized by category.</p></div>
    ${grouped}
  </main><footer class="footer">Your watch history stays in this browser.</footer>`;
}

function historyKey(categoryKey, item) {
  return `${categoryKey}:${item.mediaType}:${item.id}`;
}

function searchResultMarkup(categoryKey, item, history) {
  const resultKey = historyKey(categoryKey, item);
  const tracked = Object.values(history).some((entry) => entry.item && entry.item.id === item.id && entry.item.mediaType === item.mediaType && entry.category === categoryKey);
  searchResultCache.set(resultKey, item);
  return `<article class="search-result">
    <div class="search-result-image">${imageMarkup(item, categoryKey)}</div>
    <div class="search-result-copy"><h3>${escapeHTML(item.title)}</h3><p>${item.year} · ${categories[categoryKey].label}</p><p class="search-overview">${escapeHTML(item.overview)}</p></div>
    <button class="button-dark" type="button" data-add-result="${escapeHTML(resultKey)}" ${tracked ? 'disabled' : ''}>${tracked ? 'In history' : 'Add'}</button>
  </article>`;
}

function recommendationCard(categoryKey, item, personalized) {
  return `<article class="poster-card">
    <div class="poster-image">${imageMarkup(item, categoryKey)}</div>
    <div class="poster-meta"><span>${escapeHTML(item.year)}</span><span>${escapeHTML(item.tags.slice(0, 2).join(' · ') || categories[categoryKey].label)}</span></div>
    <h3>${escapeHTML(item.title)}</h3>
    <p class="card-note">${personalized ? 'Based on your ' + categories[categoryKey].singular + ' history' : 'Popular in ' + categories[categoryKey].label.toLowerCase()}</p>
  </article>`;
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
  status.textContent = 'Loading from TMDB...';
  results.innerHTML = '';
  try {
    const result = await loadRecommendations(categoryKey, readHistory(), page);
    if (!result.items.length) throw new Error('No matching titles were returned. Refresh to try another page.');
    status.textContent = result.personalized ? `Selected from your ${categories[categoryKey].label.toLowerCase()} history` : `Popular ${categories[categoryKey].label.toLowerCase()}`;
    results.innerHTML = result.items.map((item) => recommendationCard(categoryKey, item, result.personalized)).join('');
  } catch (error) {
    status.textContent = error.message;
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
      updated[historyKey(categoryKey, item)] = { category: categoryKey, status: 'watching', updatedAt: Date.now(), item };
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
  root.innerHTML = `<div class="shell">${page === 'home' ? homeMarkup() : page === 'history' ? historyMarkup(history) : categoryMarkup(page, history)}</div>`;
  setTheme(localStorage.getItem(themeStorageKey) || 'light');

  root.querySelector('.theme-toggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
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

  if (page === 'home') {
    Object.keys(categories).forEach((categoryKey) => updateRecommendationSection(categoryKey, randomRecommendationPage()));
  }
}

render();