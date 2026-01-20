import { options } from "../constants"

// TMDB API has a hard limit of 500 pages for all list endpoints
const MAX_PAGE_LIMIT = 500;

// Helper function to clamp page number to API limits
const clampPage = (page: number): number => {
    return Math.min(Math.max(1, page), MAX_PAGE_LIMIT);
};

export const fetchFn = ({ url }: { url: string }) => {
    return fetch(url, {
        ...options,
        next: {
            revalidate: 3600 // Cache for 1 hour
        },
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    }).then(data => {
        // If response has pagination and page exceeds total_pages, clamp to total_pages
        if (data.page && data.total_pages && data.page > data.total_pages) {
            // Extract page from URL and rebuild with clamped page
            const urlObj = new URL(url);
            const clampedToMax = Math.min(data.total_pages, MAX_PAGE_LIMIT);
            urlObj.searchParams.set('page', clampedToMax.toString());
            
            // Make new request with corrected page
            return fetch(urlObj.toString(), {
                ...options,
                next: { revalidate: 3600 }
            }).then(res => res.json());
        }
        return data;
    }).catch(error => {
        console.error('Fetch error:', error);
        return { success: false, error: error.message };
    });
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    searchParams.set(type, value);
    const newPathname = `${typeof window !== 'undefined' ? window.location.pathname : ''}?${searchParams.toString()}`;
    return newPathname;
};

export async function searchResults({ value, pageNum }: { value: string, pageNum: number }) {
    const newValue = value.split(' ').join('%20')
    const clampedPage = clampPage(pageNum);
    return await fetchFn({ url: `https://api.themoviedb.org/3/search/multi?query=${newValue}&page=${clampedPage}` })
}


// export async function fetchGeneres({ Type }: { Type: string }) {
//     return await fetchFn({ url: `https://api.themoviedb.org/3/genre/${Type}/list?language=en` })
// }

// Movies Pages Lists
export async function fetchMoviesLists({ listType, pageNum }: { listType: string, pageNum: number }) {
    const clampedPage = clampPage(pageNum);
    return Promise.all(listType === 'Trending' ? [fetchFn({ url: `https://api.themoviedb.org/3/trending/movie/day?page=${clampedPage}` })] : listType === 'AllMovies' ? [fetchFn({ url: `https://api.themoviedb.org/3/discover/movie?page=${clampedPage}` })] : [fetchFn({ url: `https://api.themoviedb.org/3/movie/${listType}?page=${clampedPage}` })])
}

// Movies Details
export async function fetchMoviesDetails({ MoviesIDs }: { MoviesIDs: number[] }) {
    return Promise.all(MoviesIDs.map((id) => fetchMovieDetails({ MovieID: id })))
}

export async function fetchMovieDetails({ MovieID }: { MovieID: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/movie/${MovieID}` })
}

export async function fetchMovieCast({ MovieID }: { MovieID: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/movie/${MovieID}/credits` })
}

export async function fetchMovieRecommend({ MovieID }: { MovieID: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/movie/${MovieID}/recommendations` })
}

export async function fetchMovieSimilar({ MovieID }: { MovieID: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/movie/${MovieID}/similar` })
}

// Shows Details
export async function fetchShowsLists({ listType, pageNum }: { listType: string, pageNum: number }) {
    const clampedPage = clampPage(pageNum);
    return Promise.all(listType === 'Trending' ? [fetchFn({ url: `https://api.themoviedb.org/3/trending/tv/day?page=${clampedPage}` })] : listType === 'AllShows' ? [fetchFn({ url: `https://api.themoviedb.org/3/discover/tv?page=${clampedPage}` })] : [fetchFn({ url: `https://api.themoviedb.org/3/tv/${listType}?page=${clampedPage}` })])
}
export async function fetchShowsDetails({ ShowsIDs }: { ShowsIDs: number[] }) {
    return Promise.all(ShowsIDs.map((id) => fetchShowDetails({ ShowId: id })))
}
export async function fetchShowDetails({ ShowId }: { ShowId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}` })
}

export async function fetchShowCast({ ShowId }: { ShowId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/credits` })
}

export async function fetchShowRecommend({ ShowId }: { ShowId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/similar` })
}
export async function fetchShowSimilar({ ShowId }: { ShowId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/recommendations` })
}

// Season Details

export async function fetchSeasonDetails({ ShowId, seasonNum }: { ShowId: number, seasonNum: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}` })
}

export async function fetchSeasonCast({ ShowId, seasonNum }: { ShowId: number, seasonNum: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/credits` })
}

// Episode Details
export async function fetchEpisodeDetails({ ShowId, seasonNum, episodeNum }: { ShowId: number, seasonNum: number, episodeNum: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}` })
}

export async function fetchEpisodeCast({ ShowId, seasonNum, episodeNum }: { ShowId: number, seasonNum: number, episodeNum: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}/credits` })
}

// Person Lists
export async function fetchPeopleLists({ listType, pageNum }: { listType: string, pageNum: number }) {
    const clampedPage = clampPage(pageNum);
    if (listType === 'Trending') {
        return [await fetchFn({ url: `https://api.themoviedb.org/3/trending/person/day?page=${clampedPage}` })];
    } else if (listType === 'popular') {
        return [await fetchFn({ url: `https://api.themoviedb.org/3/person/popular?page=${clampedPage}` })];
    }
    return [{ success: false, error: 'Invalid list type' }];
}

// Person Details
export async function fetchPersonDetails({ personId }: { personId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/person/${personId}` })
}

export async function fetchPersonCombinedCredits({ personId }: { personId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/person/${personId}/combined_credits` })
}

export async function fetchPersonImages({ personId }: { personId: number }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/person/${personId}/images` })
}

// Discover with Filters
export async function discoverMovies({ pageNum, genre, year, country, language }: { pageNum: number, genre?: string, year?: string, country?: string, language?: string }) {
    const clampedPage = clampPage(pageNum);
    let url = `https://api.themoviedb.org/3/discover/movie?page=${clampedPage}`
    if (genre) url += `&with_genres=${genre}`
    if (year) url += `&primary_release_year=${year}`
    if (country) url += `&with_origin_country=${country}`
    if (language) url += `&with_original_language=${language}`
    return await fetchFn({ url })
}

export async function discoverTVShows({ pageNum, genre, year, country, language }: { pageNum: number, genre?: string, year?: string, country?: string, language?: string }) {
    const clampedPage = clampPage(pageNum);
    let url = `https://api.themoviedb.org/3/discover/tv?page=${clampedPage}`
    if (genre) url += `&with_genres=${genre}`
    if (year) url += `&first_air_date_year=${year}`
    if (country) url += `&with_origin_country=${country}`
    if (language) url += `&with_original_language=${language}`
    return await fetchFn({ url })
}

// Genres List
export async function fetchGenres({ type }: { type: 'movie' | 'tv' }) {
    return await fetchFn({ url: `https://api.themoviedb.org/3/genre/${type}/list` })
}

// Countries and Languages
export async function fetchCountries() {
    return await fetchFn({ url: `https://api.themoviedb.org/3/configuration/countries` })
}

export async function fetchLanguages() {
    return await fetchFn({ url: `https://api.themoviedb.org/3/configuration/languages` })
}