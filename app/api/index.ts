import { options } from "../constants"

export const fetchFn = ({ url }: { url: string }) => {
    return fetch(url, {
        ...options,
        next: {
            revalidate: 300
        },
    }).then(res => res.json())
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
};

export async function searchResults({ value, pageNum }: { value: string, pageNum: number }) {
    const newValue = value.split(' ').join('%20')
    return await fetchFn({ url: `https://api.themoviedb.org/3/search/multi?query=${newValue}&page=${pageNum}` })
}


// export async function fetchGeneres({ Type }: { Type: string }) {
//     return await fetchFn({ url: `https://api.themoviedb.org/3/genre/${Type}/list?language=en` })
// }

// Movies Pages Lists
export async function fetchMoviesLists({ listType, pageNum }: { listType: string, pageNum: number }) {
    return Promise.all(listType === 'Trending' ? [fetchFn({ url: `https://api.themoviedb.org/3/trending/movie/day?page=${pageNum}` })] : listType === 'AllMovies' ? [fetchFn({ url: `https://api.themoviedb.org/3/discover/movie?page=${pageNum}` })] : [fetchFn({ url: `https://api.themoviedb.org/3/movie/${listType}?page=${pageNum}` })])
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
    return Promise.all(listType === 'Trending' ? [fetchFn({ url: `https://api.themoviedb.org/3/trending/tv/day?page=${pageNum}` })] : listType === 'AllShows' ? [fetchFn({ url: `https://api.themoviedb.org/3/discover/tv?page=${pageNum}` })] : [fetchFn({ url: `https://api.themoviedb.org/3/tv/${listType}?page=${pageNum}` })])
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