const categories = {
  movies: {
    label: 'Movies', singular: 'movie', page: 'movies.html', color: '#c5755d', wash: '#f1ddd2',
    description: 'Feature films, remembered and found again.',
    items: [
      { id: 'arrival', title: 'Arrival', year: 2016, tags: ['thoughtful', 'sci-fi', 'drama'], popularity: 96, image: 'https://image.tmdb.org/t/p/w780/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg' },
      { id: 'interstellar', title: 'Interstellar', year: 2014, tags: ['thoughtful', 'sci-fi', 'adventure'], popularity: 99, image: 'https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { id: 'dune-part-two', title: 'Dune: Part Two', year: 2024, tags: ['sci-fi', 'adventure', 'drama'], popularity: 98, image: 'https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
      { id: 'dark-knight', title: 'The Dark Knight', year: 2008, tags: ['thriller', 'crime', 'action'], popularity: 97, image: 'https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
      { id: 'spider-verse', title: 'Spider-Man: Across the Spider-Verse', year: 2023, tags: ['animation', 'adventure', 'action'], popularity: 94, image: 'https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
      { id: 'parasite', title: 'Parasite', year: 2019, tags: ['thriller', 'drama', 'thoughtful'], popularity: 93, image: 'https://image.tmdb.org/t/p/w780/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' }
    ]
  },
  'tv-shows': {
    label: 'TV Shows', singular: 'TV show', page: 'tv-shows.html', color: '#4b7785', wash: '#d9e8e7',
    description: 'Series worth staying with, episode by episode.',
    items: [
      { id: 'breaking-bad', title: 'Breaking Bad', year: 2008, tags: ['crime', 'drama', 'thriller'], popularity: 99, image: 'https://image.tmdb.org/t/p/w780/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' },
      { id: 'severance', title: 'Severance', year: 2022, tags: ['thoughtful', 'sci-fi', 'thriller'], popularity: 98, image: 'https://image.tmdb.org/t/p/w780/lFf6LLrQj8l6Uj5Wk4Iu8P9V7e.jpg' },
      { id: 'the-bear', title: 'The Bear', year: 2022, tags: ['drama', 'thoughtful'], popularity: 96, image: 'https://image.tmdb.org/t/p/w780/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg' },
      { id: 'succession', title: 'Succession', year: 2018, tags: ['drama', 'comedy'], popularity: 95, image: 'https://image.tmdb.org/t/p/w780/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg' },
      { id: 'the-last-of-us', title: 'The Last of Us', year: 2023, tags: ['drama', 'adventure', 'thriller'], popularity: 94, image: 'https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrjx0wGajQ6p4G.jpg' },
      { id: 'blue-eye-samurai', title: 'Blue Eye Samurai', year: 2023, tags: ['action', 'adventure', 'animation'], popularity: 92, image: 'https://image.tmdb.org/t/p/w780/4J6j4o4M0VdF8dUj0q9kJ1Y7gPp.jpg' }
    ]
  },
  anime: {
    label: 'Anime', singular: 'anime', page: 'anime.html', color: '#a66783', wash: '#f0dfe8',
    description: 'Animated worlds, from quiet moments to big adventures.',
    items: [
      { id: 'spirited-away', title: 'Spirited Away', year: 2001, tags: ['fantasy', 'adventure', 'thoughtful'], popularity: 99, image: 'https://image.tmdb.org/t/p/w780/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { id: 'your-name', title: 'Your Name.', year: 2016, tags: ['romance', 'fantasy', 'thoughtful'], popularity: 98, image: 'https://image.tmdb.org/t/p/w780/q719jXXEzOoYaps6babgKnONONX.jpg' },
      { id: 'cowboy-bebop', title: 'Cowboy Bebop', year: 1998, tags: ['sci-fi', 'adventure', 'action'], popularity: 96, image: 'https://image.tmdb.org/t/p/w780/8ygByuVjA99vpM3I0Nn1xFF9TBA.jpg' },
      { id: 'aot', title: 'Attack on Titan', year: 2013, tags: ['action', 'drama', 'fantasy'], popularity: 97, image: 'https://image.tmdb.org/t/p/w780/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg' },
      { id: 'demon-slayer', title: 'Demon Slayer: Kimetsu no Yaiba', year: 2019, tags: ['action', 'adventure', 'fantasy'], popularity: 95, image: 'https://image.tmdb.org/t/p/w780/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg' },
      { id: 'violet-evergarden', title: 'Violet Evergarden', year: 2018, tags: ['drama', 'thoughtful', 'romance'], popularity: 92, image: 'https://image.tmdb.org/t/p/w780/ImvHbM4GsJJykarnOzhtpG6ax6.jpg' }
    ]
  },
  documentaries: {
    label: 'Documentaries', singular: 'documentary', page: 'documentaries.html', color: '#a58145', wash: '#ede7d5',
    description: 'True stories and real worlds, carefully collected.',
    items: [
      { id: 'free-solo', title: 'Free Solo', year: 2018, tags: ['adventure', 'nature', 'thoughtful'], popularity: 99, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=780&q=80' },
      { id: 'my-octopus-teacher', title: 'My Octopus Teacher', year: 2020, tags: ['nature', 'thoughtful'], popularity: 96, image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=780&q=80' },
      { id: 'the-last-dance', title: 'The Last Dance', year: 2020, tags: ['sports', 'drama'], popularity: 98, image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=780&q=80' },
      { id: '13th', title: '13th', year: 2016, tags: ['history', 'thoughtful'], popularity: 94, image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=780&q=80' },
      { id: 'planet-earth', title: 'Planet Earth II', year: 2016, tags: ['nature', 'adventure'], popularity: 97, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=780&q=80' },
      { id: 'won-t-you-be-my-neighbor', title: "Won't You Be My Neighbor?", year: 2018, tags: ['history', 'thoughtful'], popularity: 92, image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=780&q=80' }
    ]
  }
};

const storageKey = 'memento.watchHistory.v1';
const refreshStorageKey = 'memento.recommendationOffsets.v1';
const themeStorageKey = 'memento.theme.v1';
const tokenSessionKey = 'memento.tmdbToken';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const searchResultCache = new Map();
let searchDebounce;
const genreLabels = {
  12: 'Adventure', 14: 'Fantasy', 16: 'Animation', 18: 'Drama', 27: 'Horror', 28: 'Action',
  35: 'Comedy', 36: 'History', 37: 'Western', 53: 'Thriller', 80: 'Crime', 99: 'Documentary',
  878: 'Sci-Fi', 9648: 'Mystery', 10749: 'Romance', 10751: 'Family', 10752: 'War',
  10759: 'Action & Adventure', 10762: 'Kids', 10763: 'News', 10764: 'Reality',
  10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics'
};
const fallbackImages = {
  movies: 'https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  'tv-shows': 'https://image.tmdb.org/t/p/w780/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
  anime: 'https://image.tmdb.org/t/p/w780/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  documentaries: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=780&q=80'
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

function readRefreshOffsets() {
  try {
    const value = JSON.parse(localStorage.getItem(refreshStorageKey) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

function writeRefreshOffsets(offsets) {
  localStorage.setItem(refreshStorageKey, JSON.stringify(offsets));
}

function getItem(categoryKey, itemId) {
  return categories[categoryKey]?.items.find((item) => item.id === itemId);
}

function getEntries(history, categoryKey) {
  return Object.entries(history)
    .filter(([key, entry]) => key.startsWith(`${categoryKey}:`) && entry && categories[categoryKey])
    .map(([key, entry]) => ({
      ...entry,
      item: entry.item || getItem(categoryKey, key.slice(categoryKey.length + 1)),
      key
    }))
    .filter((entry) => entry.item)
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

function normalizeApiItem(result, categoryKey, mediaType) {
  const title = result.title || result.name || 'Untitled';
  const year = (result.release_date || result.first_air_date || '').slice(0, 4);
  return {
    id: String(result.id),
    title,
    year: year || '—',
    tags: (result.genre_ids || []).map((id) => genreLabels[id] || 'More'),
    genreIds: result.genre_ids || [],
    popularity: result.popularity || 0,
    image: result.poster_path ? `${tmdbImageBaseUrl}${result.poster_path}` : fallbackImages[categoryKey],
    overview: result.overview || '',
    mediaType,
    category: categoryKey,
    originalLanguage: result.original_language || '',
    originCountry: result.origin_country || []
  };
}

function belongsToCategory(result, categoryKey, mediaType) {
  const genres = result.genre_ids || [];
  const isAnime = genres.includes(16) && (result.original_language === 'ja' || (result.origin_country || []).includes('JP'));
  if (categoryKey === 'documentaries') return mediaType === 'movie' && genres.includes(99);
  if (categoryKey === 'movies') return mediaType === 'movie' && !genres.includes(99) && !isAnime;
  if (categoryKey === 'tv-shows') return mediaType === 'tv' && !isAnime;
  return isAnime;
}

async function tmdbRequest(path, params = {}) {
  const token = sessionStorage.getItem(tokenSessionKey);
  if (!token) throw new Error('Connect a TMDB Read Access Token to search and load recommendations.');
  const url = new URL(`${tmdbBaseUrl}/${path}`);
  Object.entries({ language: 'en-US', ...params }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') url.searchParams.set(key, value);
  });
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
  });
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) throw new Error('TMDB did not accept that token. Check it and try again.');
    throw new Error(`TMDB request failed (${response.status}). Try again in a moment.`);
  }
  return response.json();
}

async function searchCategory(categoryKey, query) {
  const mediaTypes = categoryKey === 'anime' ? ['tv', 'movie'] : [categoryKey === 'movies' || categoryKey === 'documentaries' ? 'movie' : 'tv'];
  const responses = await Promise.all(mediaTypes.map((mediaType) =>
    tmdbRequest(`search/${mediaType}`, { query, include_adult: false, page: 1 })
      .then((data) => ({ mediaType, results: data.results || [] }))
  ));
  return responses.flatMap(({ mediaType, results }) => results
    .filter((item) => belongsToCategory(item, categoryKey, mediaType))
    .map((item) => normalizeApiItem(item, categoryKey, mediaType)))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8);
}

function discoverPath(categoryKey) {
  return categoryKey === 'tv-shows' || categoryKey === 'anime' ? 'discover/tv' : 'discover/movie';
}

function discoverParams(categoryKey, page, history) {
  const base = { page, sort_by: 'popularity.desc', include_adult: false };
  if (categoryKey === 'documentaries') return { ...base, with_genres: 99 };
  if (categoryKey === 'movies') return { ...base, without_genres: 99 };
  if (categoryKey === 'anime') return { ...base, with_genres: 16, with_origin_country: 'JP' };
  const genreIds = [...new Set(getEntries(history, categoryKey).flatMap((entry) => entry.item.genreIds || []))];
  return { ...base, ...(genreIds.length ? { with_genres: genreIds.join('|') } : {}) };
}

async function loadRecommendations(categoryKey, history, page) {
  const entries = getEntries(history, categoryKey);
  const personalized = entries.length > 0;
  const seen = new Set(entries.map((entry) => `${entry.item.mediaType || (categoryKey === 'tv-shows' || categoryKey === 'anime' ? 'tv' : 'movie')}:${entry.item.id}`));
  let results = [];

  if (personalized) {
    const sources = entries.slice(0, 4);
    const recommendationsBySource = await Promise.allSettled(sources.map(async (entry) => {
      const mediaType = entry.item.mediaType || (categoryKey === 'tv-shows' || categoryKey === 'anime' ? 'tv' : 'movie');
      const data = await tmdbRequest(`${mediaType}/${entry.item.id}/recommendations`, { page });
      return (data.results || []).filter((item) => belongsToCategory(item, categoryKey, mediaType));
    }));
    const unique = new Map();
    recommendationsBySource.flatMap((source) => source.status === 'fulfilled' ? source.value : []).forEach((item) => {
      const mediaType = categoryKey === 'anime' && item.media_type ? item.media_type : (categoryKey === 'tv-shows' || categoryKey === 'anime' ? 'tv' : 'movie');
      if (!belongsToCategory(item, categoryKey, mediaType)) return;
      const key = `${mediaType}:${item.id}`;
      if (!seen.has(key)) unique.set(key, normalizeApiItem(item, categoryKey, mediaType));
    });
    results = [...unique.values()];
  }

  if (!personalized || results.length < 4) {
    const data = await tmdbRequest(discoverPath(categoryKey), discoverParams(categoryKey, page, history));
    const mediaType = categoryKey === 'tv-shows' || categoryKey === 'anime' ? 'tv' : 'movie';
    const discovered = (data.results || [])
      .filter((item) => belongsToCategory(item, categoryKey, mediaType))
      .map((item) => normalizeApiItem(item, categoryKey, mediaType))
      .filter((item) => !seen.has(`${item.mediaType}:${item.id}`));
    const combined = new Map([...results, ...discovered].map((item) => [`${item.mediaType}:${item.id}`, item]));
    results = [...combined.values()];
  }

  return { items: results.slice(0, 4), personalized };
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function navMarkup(activePage) {
  return `<header class="topbar">
    <a class="brand" href="index.html" aria-label="Memento home"><span class="brand-mark">m</span><span>Memento</span></a>
    <nav class="nav" aria-label="Main navigation">${navigation.map((item) => `<a href="${item.href}" class="${item.page === activePage ? 'active' : ''}" ${item.page === activePage ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav>
    <div class="top-actions"><button class="icon-button theme-toggle" type="button" aria-label="Switch to dark theme" title="Switch theme">☀</button><button class="catalog-button" type="button" data-open-api>${sessionStorage.getItem(tokenSessionKey) ? 'Catalog connected' : 'Connect catalog'}</button></div>
  </header>
  <dialog class="api-dialog" aria-labelledby="api-dialog-title">
    <form class="api-form">
      <p class="eyebrow">Content catalog</p><h2 id="api-dialog-title">Connect TMDB</h2>
      <p>Use a TMDB Read Access Token to search titles and load current recommendations.</p>
      <label for="tmdb-token">Read Access Token</label>
      <input id="tmdb-token" name="token" type="password" autocomplete="off" placeholder="Paste your token" required>
      <div class="api-form-actions"><button class="button-quiet" type="button" data-close-api>Cancel</button><button class="button-dark" type="submit">Connect</button></div>
      ${sessionStorage.getItem(tokenSessionKey) ? '<button class="disconnect-button" type="button" data-disconnect-api>Disconnect catalog</button>' : ''}
      <p class="api-note">Token is kept in this browser tab only.</p>
    </form>
  </dialog>`;
}

function imageMarkup(item, categoryKey) {
  return `<img src="${item.image}" data-fallback="${fallbackImages[categoryKey]}" alt="${escapeHTML(item.title)}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fallback">`;
}

function recommendationSection(categoryKey) {
  const category = categories[categoryKey];
  return `<section class="section recommendation-section" style="--category-color:${category.color}">
    <div class="section-heading">
      <div><div class="category-label">${category.label}</div><h2>${category.label} to watch next</h2></div>
      <div class="recommendation-controls"><a class="text-link" href="${category.page}">Your list</a><button class="button-refresh" type="button" data-refresh="${categoryKey}" aria-label="Refresh ${category.label} recommendations"><span aria-hidden="true">↻</span> Refresh ${category.label}</button></div>
    </div>
    <p class="recommendation-status" data-recommendation-status="${categoryKey}" aria-live="polite">Connect the catalog to load recommendations.</p>
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
  const dialog = root.querySelector('.api-dialog');
  root.querySelector('[data-open-api]')?.addEventListener('click', () => {
    root.querySelector('#tmdb-token').value = sessionStorage.getItem(tokenSessionKey) || '';
    dialog.showModal();
  });
  root.querySelector('[data-close-api]')?.addEventListener('click', () => dialog.close());
  root.querySelector('.api-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const token = root.querySelector('#tmdb-token').value.trim();
    if (!token) return;
    sessionStorage.setItem(tokenSessionKey, token);
    dialog.close();
    render();
  });
  root.querySelector('[data-disconnect-api]')?.addEventListener('click', () => {
    sessionStorage.removeItem(tokenSessionKey);
    dialog.close();
    render();
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
    const offsets = readRefreshOffsets();
    offsets[categoryKey] = ((offsets[categoryKey] || 1) % 500) + 1;
    writeRefreshOffsets(offsets);
    button.disabled = true;
    updateRecommendationSection(categoryKey, offsets[categoryKey]).finally(() => { button.disabled = false; });
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
    const offsets = readRefreshOffsets();
    Object.keys(categories).forEach((categoryKey) => updateRecommendationSection(categoryKey, offsets[categoryKey] || 1));
  }
}

render();