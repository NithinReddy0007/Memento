const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { URL } = require('node:url');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 3000);
const tokenName = 'TMDB_READ_ACCESS_TOKEN';
const defaultCorsOrigins = new Set(['http://localhost:3000', 'http://127.0.0.1:3000']);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
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
const imdbMetadataCache = new Map();
const titleDetailsCache = new Map();
const youtubeTrailerCache = new Map();
const titleTrailerCache = new Map();
const cinematicFeedCache = new Map();
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
    backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
    overview: item.overview || '',
    mediaType,
    category,
    originalLanguage: item.original_language || '',
    originCountry: item.origin_country || []
  };
}

async function lookupImdbMetadata(imdbId) {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey || !imdbId) return null;
  if (imdbMetadataCache.has(imdbId)) return imdbMetadataCache.get(imdbId);

  try {
    const url = new URL('https://www.omdbapi.com/');
    url.searchParams.set('i', imdbId);
    url.searchParams.set('apikey', apiKey);
    url.searchParams.set('plot', 'full');
    const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;
    const data = await response.json();
    if (data.Response !== 'True') return null;
    const rating = data.Response === 'True' && data.imdbRating !== 'N/A' ? Number(data.imdbRating) : NaN;
    const result = {
      rating: Number.isFinite(rating) && rating >= 0 && rating <= 10 ? rating : null,
      votes: data.imdbVotes === 'N/A' ? null : data.imdbVotes || null,
      extendedPlot: data.Plot && data.Plot !== 'N/A' ? data.Plot : null,
      title: data.Title || null,
      year: data.Year || null,
      rated: data.Rated === 'N/A' ? null : data.Rated || null,
      released: data.Released === 'N/A' ? null : data.Released || null,
      runtime: data.Runtime === 'N/A' ? null : data.Runtime || null,
      genres: data.Genre === 'N/A' ? [] : (data.Genre || '').split(', ').filter(Boolean),
      director: data.Director === 'N/A' ? null : data.Director || null,
      writer: data.Writer === 'N/A' ? null : data.Writer || null,
      actors: data.Actors === 'N/A' ? null : data.Actors || null,
      language: data.Language === 'N/A' ? null : data.Language || null,
      country: data.Country === 'N/A' ? null : data.Country || null,
      awards: data.Awards === 'N/A' ? null : data.Awards || null,
      boxOffice: data.BoxOffice === 'N/A' ? null : data.BoxOffice || null
    };
    imdbMetadataCache.set(imdbId, result);
    return result;
  } catch {
    return null;
  }
}

function normalizedTitle(value) {
  return String(value || '').normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu, '').toLowerCase();
}

function containsTitlePhrase(videoTitle, title) {
  const tokenize = (value) => String(value || '').normalize('NFKD').toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const videoWords = tokenize(videoTitle);
  const titleWords = tokenize(title);
  return titleWords.length > 0 && videoWords.some((_, index) => titleWords.every((word, offset) => videoWords[index + offset] === word));
}

async function lookupYouTubeTrailer(title, year) {
  // Deliberately disabled for identity-sensitive playback. A generic YouTube search
  // cannot prove that the returned video belongs to the exact TMDB title.
  return null;
}

function selectPlayableTrailer(videos) {
  const candidates = videos.flatMap((video) => {
    if (!['Trailer', 'Teaser'].includes(video.type)) return [];
    let embedUrl;
    if (video.site === 'YouTube' && /^[A-Za-z0-9_-]{6,}$/.test(video.key || '')) {
      embedUrl = `https://www.youtube-nocookie.com/embed/${video.key}?controls=1&playsinline=1&rel=0`;
    } else if (video.site === 'Vimeo' && /^\d{5,}$/.test(video.key || '')) {
      embedUrl = `https://player.vimeo.com/video/${video.key}?dnt=1`;
    } else {
      return [];
    }
    return [{
      name: video.name || video.type,
      type: video.type,
      official: Boolean(video.official),
      publishedAt: video.published_at || '',
      site: video.site,
      source: 'TMDB',
      embedUrl
    }];
  });
  candidates.sort((first, second) => Number(second.official) - Number(first.official)
    || Number(second.type === 'Trailer') - Number(first.type === 'Trailer')
    || second.publishedAt.localeCompare(first.publishedAt));
  return candidates[0] || null;
}

function buildCast(rawCast) {
  const seen = new Set();
  return (Array.isArray(rawCast) ? rawCast : [])
    .filter((person) => person?.id && person.name)
    .sort((first, second) => (first.order ?? 9999) - (second.order ?? 9999))
    .filter((person) => !seen.has(person.id) && seen.add(person.id))
    .slice(0, 20)
    .map((person, index) => {
      const character = String(person.character || '').replace(/\s*\(voice\)/gi, '').trim();
      return {
        id: String(person.id),
        name: person.name,
        character,
        role: character,
        image: person.profile_path ? `https://image.tmdb.org/t/p/w185${person.profile_path}` : '',
        order: person.order ?? index
      };
    });
}

async function loadTitleDetails(category, id, mediaType) {
  const allowedMediaTypes = category === 'anime' ? ['tv', 'movie']
    : category === 'movies' || category === 'documentaries' ? ['movie']
      : ['tv'];
  if (!categoryKeys.has(category) || !allowedMediaTypes.includes(mediaType) || !/^\d{1,12}$/.test(id)) {
    const error = new Error('Choose a valid title category, media type, and ID.');
    error.status = 400;
    throw error;
  }
  const cacheKey = `${category}:${mediaType}:${id}`;
  if (titleDetailsCache.has(cacheKey)) return titleDetailsCache.get(cacheKey);

  const details = await tmdbRequest(`${mediaType}/${id}`, { append_to_response: 'external_ids,credits,keywords' });
  const categoryItem = {
    genre_ids: (details.genres || []).map((genre) => genre.id),
    original_language: details.original_language,
    origin_country: details.origin_country || (details.production_countries || []).map((country) => country.iso_3166_1)
  };
  if (!belongsToCategory(categoryItem, category, mediaType)) {
    const error = new Error('This title does not belong to the requested category.');
    error.status = 404;
    throw error;
  }

  const imdbId = details.external_ids?.imdb_id || details.imdb_id || null;
  const imdb = await lookupImdbMetadata(imdbId);
  const date = details.release_date || details.first_air_date || '';
  const keywords = mediaType === 'movie' ? details.keywords?.keywords || [] : details.keywords?.results || [];
  const keyPeople = mediaType === 'tv'
    ? (details.created_by || []).map((person) => ({ name: person.name, role: 'Creator' }))
    : (details.credits?.crew || []).filter((person) => person.job === 'Director').slice(0, 3)
      .map((person) => ({ name: person.name, role: 'Director' }));
  const result = {
    id: String(details.id),
    category,
    mediaType,
    title: details.title || details.name || 'Untitled',
    originalTitle: details.original_title || details.original_name || '',
    releaseDate: date,
    year: date.slice(0, 4) || null,
    genres: (details.genres || []).map((genre) => genre.name),
    overview: details.overview || '',
    tagline: details.tagline || '',
    poster: details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : '',
    backdrop: details.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}` : '',
    runtime: details.runtime || null,
    episodeRuntime: details.episode_run_time || [],
    seasons: details.number_of_seasons || null,
    episodes: details.number_of_episodes || null,
    status: details.status || '',
    originalLanguage: details.original_language || '',
    originCountries: details.origin_country || (details.production_countries || []).map((country) => country.iso_3166_1),
    productionCompanies: (details.production_companies || []).map((company) => company.name),
    keyPeople,
    cast: buildCast(details.credits?.cast),
    keywords: keywords.slice(0, 10).map((keyword) => keyword.name),
    tmdbRating: Number.isFinite(Number(details.vote_average)) ? Number(details.vote_average) : null,
    tmdbVoteCount: details.vote_count || 0,
    imdbId,
    imdbRating: imdb?.rating ?? null,
    imdbVotes: imdb?.votes ?? null,
    extendedSynopsis: imdb?.extendedPlot ?? null,
    omdb: imdb,
    trailer: null
  };
  titleDetailsCache.set(cacheKey, result);
  return result;
}

async function loadTitleTrailer(details) {
  const cacheKey = `${details.category}:${details.mediaType}:${details.id}`;
  if (titleTrailerCache.has(cacheKey)) return titleTrailerCache.get(cacheKey);

  // TMDB video records are tied to this exact title ID, so they cannot drift
  // to a similarly named film/show the way free-text YouTube search can.
  let trailer = null;
  const languages = [...new Set(['en-US', details.originalLanguage].filter(Boolean))];
  for (const language of languages) {
    try {
      const videos = await tmdbRequest(`${details.mediaType}/${details.id}/videos`, { language });
      trailer = selectPlayableTrailer(videos.results || []);
      if (trailer) break;
    } catch {
      continue;
    }
  }
  titleTrailerCache.set(cacheKey, trailer);
  return trailer;
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

const importBatchLimit = 20;

function comparableTitle(value) {
  return normalizedTitle(String(value || '').replace(/&/g, ' and ').replace(/^\s*(the|a|an)\s+/i, ''));
}

function releaseYear(item) {
  return Number(String(item.release_date || item.first_air_date || '').slice(0, 4)) || 0;
}

function evaluateImportCandidates(candidates, wanted, year) {
  const titleMatches = candidates.filter(({ item }) => [item.title, item.name, item.original_title, item.original_name]
    .some((name) => comparableTitle(name) === wanted));
  const yearMatches = year ? titleMatches.filter(({ item }) => Math.abs(releaseYear(item) - year) <= 1) : titleMatches;
  const withPoster = yearMatches.filter(({ item }) => item.poster_path);
  withPoster.sort((first, second) => {
    if (year) {
      const distance = Math.abs(releaseYear(first.item) - year) - Math.abs(releaseYear(second.item) - year);
      if (distance) return distance;
    }
    return (second.item.popularity || 0) - (first.item.popularity || 0);
  });
  const reason = !titleMatches.length
    ? 'No verified match in the catalog'
    : !yearMatches.length ? 'Release year did not match' : 'No poster available';
  return { match: withPoster[0], reason };
}

async function findVerifiedMatch(category, title, year) {
  const wanted = comparableTitle(title);
  if (!wanted) return { status: 'not_found', reason: 'Not a valid title' };
  const mediaTypes = category === 'anime' ? ['tv', 'movie'] : [category === 'tv-shows' ? 'tv' : 'movie'];
  const collect = async (useYear) => (await Promise.all(mediaTypes.map(async (mediaType) => {
    const params = { query: title, include_adult: false, page: 1 };
    if (useYear && year) params[mediaType === 'tv' ? 'first_air_date_year' : 'year'] = year;
    const data = await tmdbRequest(`search/${mediaType}`, params);
    return (data.results || [])
      .filter((item) => belongsToCategory(item, category, mediaType))
      .map((item) => ({ item, mediaType }));
  }))).flat();

  let outcome = evaluateImportCandidates(await collect(true), wanted, year);
  if (!outcome.match && year) outcome = evaluateImportCandidates(await collect(false), wanted, year);
  if (!outcome.match) return { status: 'not_found', reason: outcome.reason };
  return { status: 'matched', item: normalizeItem(outcome.match.item, category, outcome.match.mediaType) };
}

async function matchImportTitles(category, entries) {
  const results = new Array(entries.length);
  let next = 0;
  const worker = async () => {
    while (next < entries.length) {
      const index = next;
      next += 1;
      try {
        results[index] = await findVerifiedMatch(category, entries[index].title, entries[index].year);
      } catch {
        results[index] = { status: 'error', reason: 'Could not be checked, try again' };
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, entries.length) }, worker));
  return results;
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

  if (items.length < 15) {
    const trendMediaType = category === 'tv-shows' || category === 'anime' ? 'tv' : 'movie';
    const trendEndpoint = `trending/${trendMediaType}/week`;
    try {
      const firstPage = await tmdbRequest(trendEndpoint, { page: 1 });
      const totalTrendPages = Math.max(1, Number(firstPage.total_pages) || 1);
      const trendPage = ((page - 1) % totalTrendPages) + 1;
      const data = trendPage === 1 ? firstPage : await tmdbRequest(trendEndpoint, { page: trendPage });
      const trending = (data.results || [])
        .filter((item) => belongsToCategory(item, category, trendMediaType) && isRecommendationQuality(item, category, trendMediaType))
        .map((item) => normalizeItem(item, category, trendMediaType))
        .filter((item) => !seen.has(`${item.mediaType}:${item.id}`));
      const combined = new Map([...items, ...trending].map((item) => [`${item.mediaType}:${item.id}`, item]));
      items = [...combined.values()];
    } catch (error) {
      if (!error.retryable) throw error;
    }
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

const cinematicFeedSize = 100;
const cinematicCandidatePages = 5;

async function loadCinematicFeed(page = 1) {
  const cacheKey = String(Math.max(1, Math.min(5, page)));
  if (cinematicFeedCache.has(cacheKey)) return cinematicFeedCache.get(cacheKey);
  const requests = [
    tmdbRequest('discover/movie', {
      page: Number(cacheKey), sort_by: 'vote_average.desc', include_adult: false,
      'vote_count.gte': 1500, 'vote_average.gte': 7.8,
      'primary_release_date.lte': new Date().toISOString().slice(0, 10)
    }),
    tmdbRequest('discover/tv', {
      page: Number(cacheKey), sort_by: 'vote_average.desc', include_adult: false,
      'vote_count.gte': 800, 'vote_average.gte': 7.8,
      'first_air_date.lte': new Date().toISOString().slice(0, 10)
    })
  ];
  const [movies, shows] = await Promise.all(requests);
  const seen = new Set();
  const items = [...(movies.results || []).map((item) => normalizeItem(item, 'movies', 'movie')),
    ...(shows.results || []).map((item) => normalizeItem(item, 'tv-shows', 'tv'))]
    .filter((item) => {
      const key = `${item.mediaType}:${item.id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => Number(b.voteAverage || 0) - Number(a.voteAverage || 0)
      || Number(b.voteCount || 0) - Number(a.voteCount || 0));

  // Fetch exact IMDb IDs/ratings only for the visible-sized slice. Results are cached
  // server-side, so subsequent visitors do not repeatedly hit OMDb for the same title.
  const enriched = await Promise.all(items.slice(0, 20).map(async (item) => {
    try {
      const details = await tmdbRequest(`${item.mediaType}/${item.id}`, { append_to_response: 'external_ids' });
      const imdbId = details.external_ids?.imdb_id || null;
      const imdb = imdbId ? await lookupImdbMetadata(imdbId) : null;
      return { ...item, imdbId, imdbRating: imdb?.rating ?? null, imdbVotes: imdb?.votes ?? null };
    } catch {
      return item;
    }
  }));
  const enrichedMap = new Map(enriched.map((item) => [`${item.mediaType}:${item.id}`, item]));
  const merged = items.map((item) => enrichedMap.get(`${item.mediaType}:${item.id}`) || item);
  const imdbRated = merged.filter((item) => Number.isFinite(item.imdbRating));
  const sorted = (imdbRated.length >= 8 ? imdbRated : merged).sort((a, b) => {
    const ar = Number.isFinite(a.imdbRating) ? a.imdbRating : a.voteAverage;
    const br = Number.isFinite(b.imdbRating) ? b.imdbRating : b.voteAverage;
    return br - ar || Number(b.voteCount || 0) - Number(a.voteCount || 0);
  });
  const result = {
    collection: 'IMDb Top 100 · Movies & TV',
    collectionSize: cinematicFeedSize,
    page: Number(cacheKey),
    hasNextPage: Number(cacheKey) < cinematicCandidatePages,
    imdbConfigured: Boolean(process.env.OMDB_API_KEY),
    items: sorted.slice(0, 20)
  };
  cinematicFeedCache.set(cacheKey, result);
  return result;
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
    if (request.method === 'GET' && url.pathname === '/api/omdb') {
      const imdbId = url.searchParams.get('imdbId') || '';
      if (!/^tt\d{5,12}$/.test(imdbId)) {
        return sendJson(response, 400, { error: 'A valid IMDb title ID is required.' });
      }
      if (!process.env.OMDB_API_KEY) {
        return sendJson(response, 200, { configured: false, available: false, imdbId, metadata: null });
      }
      const metadata = await lookupImdbMetadata(imdbId);
      return sendJson(response, 200, {
        configured: true,
        available: Boolean(metadata),
        imdbId,
        metadata
      });
    }
    if (request.method === 'GET' && url.pathname === '/api/trailer') {
      const category = url.searchParams.get('category') || '';
      const id = url.searchParams.get('id') || '';
      const mediaType = url.searchParams.get('mediaType') || '';
      const details = await loadTitleDetails(category, id, mediaType);
      const trailer = await loadTitleTrailer(details);
      return sendJson(response, 200, {
        available: Boolean(trailer?.embedUrl),
        youtubeConfigured: Boolean(process.env.YOUTUBE_API_KEY),
        trailer
      });
    }
    if (request.method === 'GET' && url.pathname === '/api/details') {
      const category = url.searchParams.get('category');
      const id = url.searchParams.get('id') || '';
      const mediaType = url.searchParams.get('mediaType') || '';
      return sendJson(response, 200, await loadTitleDetails(category, id, mediaType));
    }
    if (request.method === 'GET' && url.pathname === '/api/cinematic-feed') {
      const page = Math.max(1, Math.min(cinematicCandidatePages, Number.parseInt(url.searchParams.get('page'), 10) || 1));
      return sendJson(response, 200, await loadCinematicFeed(page));
    }
    if (request.method === 'GET' && url.pathname === '/api/search') {
      const category = url.searchParams.get('category');
      const query = (url.searchParams.get('query') || '').trim();
      if (!categoryKeys.has(category) || query.length < 2 || query.length > 120) {
        return sendJson(response, 400, { error: 'Choose a category and enter a title of at least two characters.' });
      }
      return sendJson(response, 200, { items: await searchCategory(category, query) });
    }
    if (request.method === 'POST' && url.pathname === '/api/import/match') {
      const body = await readJson(request);
      if (!categoryKeys.has(body.category) || !Array.isArray(body.titles) || !body.titles.length || body.titles.length > importBatchLimit) {
        return sendJson(response, 400, { error: `Choose a category and send between 1 and ${importBatchLimit} titles.` });
      }
      const currentYear = new Date().getFullYear();
      const entries = body.titles.map((entry) => {
        const title = String(entry?.title || '').replace(/\s+/g, ' ').trim().slice(0, 120);
        const year = Number.parseInt(entry?.year, 10);
        return { title, year: year >= 1870 && year <= currentYear + 1 ? year : undefined };
      });
      const results = await matchImportTitles(body.category, entries);
      return sendJson(response, 200, { results });
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
        return sendJson(response, 200, {
          status: 'ok',
          imdbRatingsAvailable: Boolean(process.env.OMDB_API_KEY),
          youtubeTrailersAvailable: Boolean(process.env.YOUTUBE_API_KEY)
        });
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