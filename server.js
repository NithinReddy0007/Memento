const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { URL } = require('node:url');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const tokenName = 'TMDB_READ_ACCESS_TOKEN';
const defaultCorsOrigins = new Set(['http://localhost:3000', 'http://127.0.0.1:3000']);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

async function loadLocalEnvironment() {
  try {
    const contents = await fs.readFile(path.join(root, '.env'), 'utf8');
    contents.split(/\r?\n/).forEach((line) => {
      const match = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
      if (match && !Object.hasOwn(process.env, match[1])) {
        process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
      }
    });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

const genreLabels = {
  12: 'Adventure', 14: 'Fantasy', 16: 'Animation', 18: 'Drama', 27: 'Horror', 28: 'Action',
  35: 'Comedy', 36: 'History', 37: 'Western', 53: 'Thriller', 80: 'Crime', 99: 'Documentary',
  878: 'Sci-Fi', 9648: 'Mystery', 10749: 'Romance', 10751: 'Family', 10752: 'War',
  10759: 'Action & Adventure', 10762: 'Kids', 10763: 'News', 10764: 'Reality',
  10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics'
};
const categoryKeys = new Set(['movies', 'tv-shows', 'anime', 'documentaries']);
const scriptedTvGenres = new Set([18, 35, 80, 9648, 10759, 10765, 10768]);
const unscriptedTvGenres = new Set([99, 10762, 10763, 10764, 10766, 10767]);
const recommendationProfiles = {
  movies: { minimumYear: new Date().getFullYear() - 12, minimumVotes: 50, minimumRating: 5.5 },
  'tv-shows': { minimumYear: new Date().getFullYear() - 16, minimumVotes: 100, minimumRating: 6 },
  anime: { minimumYear: new Date().getFullYear() - 11, minimumVotes: 100, minimumRating: 6.2 },
  documentaries: { minimumYear: new Date().getFullYear() - 16, minimumVotes: 15, minimumRating: 5.5 }
};

function belongsToCategory(item, category, mediaType) {
  const genres = item.genre_ids || [];
  const anime = genres.includes(16) && (item.original_language === 'ja' || (item.origin_country || []).includes('JP'));
  if (category === 'documentaries') return mediaType === 'movie' && genres.includes(99);
  if (category === 'movies') return mediaType === 'movie' && !genres.includes(99) && !anime;
  if (category === 'tv-shows') return mediaType === 'tv' && !anime;
  return anime;
}

function isRecommendationQuality(item, category, mediaType) {
  const profile = recommendationProfiles[category];
  const date = mediaType === 'tv' ? item.first_air_date : item.release_date;
  const year = Number((date || '').slice(0, 4));
  const genres = item.genre_ids || [];
  if (!year || year < profile.minimumYear || year > new Date().getFullYear()
    || Number(item.vote_count || 0) < profile.minimumVotes
    || Number(item.vote_average || 0) < profile.minimumRating) return false;
  if (category === 'tv-shows') {
    return genres.some((genre) => scriptedTvGenres.has(genre)) && !genres.some((genre) => unscriptedTvGenres.has(genre));
  }
  return true;
}

function normalizeItem(item, category, mediaType) {
  const year = (item.release_date || item.first_air_date || '').slice(0, 4);
  return {
    id: String(item.id),
    title: item.title || item.name || 'Untitled',
    year: year || '—',
    tags: (item.genre_ids || []).map((id) => genreLabels[id] || 'More'),
    genreIds: item.genre_ids || [],
    popularity: item.popularity || 0,
    voteCount: item.vote_count || 0,
    voteAverage: item.vote_average || 0,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
    overview: item.overview || '',
    mediaType,
    category,
    originalLanguage: item.original_language || '',
    originCountry: item.origin_country || []
  };
}

async function tmdbRequest(endpoint, params = {}) {
  const token = process.env[tokenName];
  if (!token) {
    const error = new Error('The content catalog is not configured on the server.');
    error.status = 503;
    throw error;
  }
  const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
  Object.entries({ language: 'en-US', ...params }).forEach(([key, value]) => {
    if (value !== undefined && value !== '') url.searchParams.set(key, value);
  });
  let response;
  const maxAttempts = 5;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
      });
    } catch {
      if (attempt === maxAttempts - 1) {
        const error = new Error('The content catalog is temporarily unreachable. Try again shortly.');
        error.status = 502;
        error.retryable = true;
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, Math.min(250 * (2 ** attempt), 2500)));
      continue;
    }

    if (response.ok) return response.json();
    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === maxAttempts - 1) {
      const error = new Error(response.status === 401 || response.status === 403
        ? 'The content catalog could not authorize its request.'
        : `The content catalog request failed (${response.status}).`);
      error.status = response.status === 401 || response.status === 403 ? 502 : response.status;
      error.retryable = retryable;
      throw error;
    }
    await response.body?.cancel();
    await new Promise((resolve) => setTimeout(resolve, Math.min(250 * (2 ** attempt), 2500)));
  }
  throw new Error('The content catalog request failed.');
}

async function searchCategory(category, query) {
  const mediaTypes = category === 'anime' ? ['tv', 'movie'] : [category === 'tv-shows' ? 'tv' : 'movie'];
  const responses = await Promise.all(mediaTypes.map(async (mediaType) => {
    const data = await tmdbRequest(`search/${mediaType}`, { query, include_adult: false, page: 1 });
    return (data.results || [])
      .filter((item) => belongsToCategory(item, category, mediaType))
      .map((item) => normalizeItem(item, category, mediaType));
  }));
  return responses.flat().sort((a, b) => b.popularity - a.popularity).slice(0, 8);
}

function discoverParams(category, page, history) {
  const profile = recommendationProfiles[category];
  const dateFilter = category === 'tv-shows' || category === 'anime'
    ? {
      'first_air_date.gte': `${profile.minimumYear}-01-01`,
      'first_air_date.lte': new Date().toISOString().slice(0, 10)
    }
    : {
      'primary_release_date.gte': `${profile.minimumYear}-01-01`,
      'primary_release_date.lte': new Date().toISOString().slice(0, 10)
    };
  const base = {
    page,
    sort_by: 'popularity.desc',
    include_adult: false,
    'vote_count.gte': profile.minimumVotes,
    'vote_average.gte': profile.minimumRating,
    ...dateFilter
  };
  if (category === 'documentaries') return { ...base, with_genres: 99 };
  if (category === 'movies') return { ...base, without_genres: 99 };
  if (category === 'anime') return { ...base, with_genres: 16, with_origin_country: 'JP' };
  const historyGenres = [...new Set(history.flatMap((entry) => entry.item?.genreIds || []))]
    .filter((genre) => scriptedTvGenres.has(genre));
  const genres = historyGenres.length ? historyGenres : [...scriptedTvGenres];
  return {
    ...base,
    with_genres: genres.join('|'),
    without_genres: [...unscriptedTvGenres].join(',')
  };
}

async function loadRecommendations(category, page, rawHistory) {
  const history = Array.isArray(rawHistory)
    ? rawHistory.filter((entry) => entry?.category === category && entry.item)
    : [];
  const personalized = history.length > 0;
  const mediaTypeFor = (entry) => entry.item.mediaType || (category === 'tv-shows' || category === 'anime' ? 'tv' : 'movie');
  const seen = new Set(history.map((entry) => `${mediaTypeFor(entry)}:${entry.item.id}`));
  let items = [];

  if (personalized) {
    const responses = await Promise.allSettled(history.slice(0, 4).map(async (entry) => {
      const mediaType = mediaTypeFor(entry);
      const data = await tmdbRequest(`${mediaType}/${entry.item.id}/recommendations`, { page });
      return (data.results || []).flatMap((item) => {
        const resultType = category === 'anime' ? (item.media_type || mediaType) : mediaType;
        return belongsToCategory(item, category, resultType) && isRecommendationQuality(item, category, resultType)
          ? [normalizeItem(item, category, resultType)]
          : [];
      });
    }));
    const unique = new Map();
    responses.flatMap((response) => response.status === 'fulfilled' ? response.value : []).forEach((item) => {
      const key = `${item.mediaType}:${item.id}`;
      if (!seen.has(key)) unique.set(key, item);
    });
    items = [...unique.values()];
  }

  if (!personalized || items.length < 15) {
    const endpoint = category === 'tv-shows' || category === 'anime' ? 'discover/tv' : 'discover/movie';
    const mediaType = endpoint.endsWith('/tv') ? 'tv' : 'movie';
    const combined = new Map(items.map((item) => [`${item.mediaType}:${item.id}`, item]));
    const visitedPages = new Set();
    let nextPage = page;
    let totalPages = 500;
    let lastError;

    while (combined.size < 15 && visitedPages.size < 8) {
      try {
        let data = await tmdbRequest(endpoint, discoverParams(category, nextPage, history));
        totalPages = Math.max(1, Number(data.total_pages) || 1);
        let actualPage = nextPage;
        if (actualPage > totalPages) {
          actualPage = ((actualPage - 1) % totalPages) + 1;
          data = await tmdbRequest(endpoint, discoverParams(category, actualPage, history));
        }
        if (visitedPages.has(actualPage)) break;
        visitedPages.add(actualPage);
        (data.results || [])
          .filter((item) => belongsToCategory(item, category, mediaType) && isRecommendationQuality(item, category, mediaType))
          .map((item) => normalizeItem(item, category, mediaType))
          .filter((item) => !seen.has(`${item.mediaType}:${item.id}`))
          .forEach((item) => combined.set(`${item.mediaType}:${item.id}`, item));
        nextPage = actualPage >= totalPages ? 1 : actualPage + 1;
      } catch (error) {
        if (!error.retryable) throw error;
        lastError = error;
        visitedPages.add(nextPage);
        nextPage = nextPage >= totalPages ? 1 : nextPage + 1;
      }
    }

    items = [...combined.values()];
    if (!items.length && lastError) throw lastError;
  }
  return { items: items.slice(0, 15), personalized };
}

function sendJson(response, status, value) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(value));
}

function isAllowedOrigin(origin) {
  if (!origin) return true;
  const configuredOrigins = new Set((process.env.CORS_ORIGINS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean));
  if (configuredOrigins.has(origin) || defaultCorsOrigins.has(origin)) return true;
  try {
    const url = new URL(origin);
    return url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  } catch {
    return false;
  }
}

function applyCors(request, response) {
  const origin = request.headers.origin;
  if (!origin) return true;
  if (!isAllowedOrigin(origin)) return false;
  response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Max-Age', '86400');
  response.setHeader('Vary', 'Origin');
  return true;
}

async function readJson(request) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 1_000_000) throw Object.assign(new Error('Request body is too large.'), { status: 413 });
  }
  return body ? JSON.parse(body) : {};
}

async function handleApi(request, response, url) {
  try {
    if (request.method === 'GET' && url.pathname === '/api/search') {
      const category = url.searchParams.get('category');
      const query = (url.searchParams.get('query') || '').trim();
      if (!categoryKeys.has(category) || query.length < 2 || query.length > 120) {
        return sendJson(response, 400, { error: 'Choose a category and enter a title of at least two characters.' });
      }
      return sendJson(response, 200, { items: await searchCategory(category, query) });
    }
    if (request.method === 'POST' && url.pathname === '/api/recommendations') {
      const body = await readJson(request);
      const category = body.category;
      if (!categoryKeys.has(category)) return sendJson(response, 400, { error: 'Unknown recommendation category.' });
      const page = Math.max(1, Math.min(500, Number.parseInt(body.page, 10) || 1));
      return sendJson(response, 200, await loadRecommendations(category, page, body.history));
    }
    return sendJson(response, 404, { error: 'API endpoint not found.' });
  } catch (error) {
    const status = error.status || (error instanceof SyntaxError ? 400 : 502);
    return sendJson(response, status, { error: error.message || 'The catalog request failed.' });
  }
}

async function serveStatic(request, response, url) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }
  if (pathname.split('/').some((segment) => segment.startsWith('.'))) {
    response.writeHead(404).end('Not found');
    return;
  }
  const filePath = path.resolve(root, `.${pathname}`);
  if (!filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    const content = await fs.readFile(filePath);
    response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404).end('Not found');
  }
}

async function start() {
  await loadLocalEnvironment();
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) {
      if (!applyCors(request, response)) {
        return sendJson(response, 403, { error: 'This origin is not allowed to access the Memento API.' });
      }
      if (request.method === 'OPTIONS') {
        response.writeHead(204).end();
        return;
      }
      if (request.method === 'GET' && url.pathname === '/api/health') {
        return sendJson(response, 200, { status: 'ok' });
      }
      void handleApi(request, response, url);
    } else if (request.method === 'GET' || request.method === 'HEAD') {
      void serveStatic(request, response, url);
    } else {
      response.writeHead(405).end('Method not allowed');
    }
  });
  server.listen(port, '0.0.0.0', () => console.log(`Memento is listening on port ${port}`));
}

start().catch((error) => {
  console.error('Could not start Memento:', error.message);
  process.exitCode = 1;
});