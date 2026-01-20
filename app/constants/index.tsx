import { FaFireAlt, FaPlayCircle, FaStar, FaUserAlt } from 'react-icons/fa'
import { MdOutlineLiveTv } from 'react-icons/md'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { TbMovie } from 'react-icons/tb'

// Validate API token exists
if (!process.env.NEXT_PUBLIC_TMDB_API_TOKEN) {
    throw new Error(
        'NEXT_PUBLIC_TMDB_API_TOKEN is not defined. ' +
        'Please add it to your environment variables. ' +
        'Get your API key from https://www.themoviedb.org/settings/api'
    );
}

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`
    }
}

export const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesLinks = [
    { name: 'All Movies', link: '/Movies/AllMovies/?page=1', icon: <TbMovie /> },
    { name: 'Trending', link: '/Movies/Trending/?page=1', icon: <FaArrowTrendUp /> },
    { name: 'Now Playing', link: '/Movies/now_playing/?page=1', icon: <FaPlayCircle /> },
    { name: 'Popular', link: '/Movies/popular/?page=1', icon: <FaFireAlt /> },
    { name: 'Top Rated', link: '/Movies/top_rated/?page=1', icon: <FaStar /> },
]

export const ShowsLinks = [
    { name: 'All Shows', link: '/TvShows/AllShows/?page=1', icon: <MdOutlineLiveTv /> },
    { name: 'Trending', link: '/TvShows/Trending/?page=1', icon: <FaArrowTrendUp /> },
    { name: 'Airing Today', link: '/TvShows/airing_today/?page=1', icon: <FaPlayCircle /> },
    { name: 'On The Air', link: '/TvShows/on_the_air/?page=1', icon: <FaFireAlt /> },
    { name: 'Top Rated', link: '/TvShows/top_rated/?page=1', icon: <FaStar /> },
]

export const StarsLinks = [
    { name: 'Popular', link: '/Stars/popular/?page=1', icon: <FaFireAlt /> },
    { name: 'Trending', link: '/Stars/Trending/?page=1', icon: <FaArrowTrendUp /> },
]