import { BsFillPeopleFill } from 'react-icons/bs'
import { FaFireAlt, FaHeart, FaPlayCircle, FaStar } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { MdDashboard, MdLocalMovies, MdOutlineLiveTv } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { TbMovie } from 'react-icons/tb'
import { SearchIcon } from "lucide-react";
import { BiSearch } from "react-icons/bi";


export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
    }
}

export const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesLinks = [
    { name: 'All Movies', link: '/Movies/AllMovies/?page=1', icon: <TbMovie /> },
    { name: 'Trending', link: '/Movies/Trending/?page=1', icon: <FaArrowTrendUp /> },
    { name: 'Now Playing', link: '/Movies/now_playing/?page=1', icon: <FaPlayCircle /> },
    { name: 'Popular', link: '/Movies/popular/?page=1', icon: <FaFireAlt /> },
    { name: 'Top Rated', link: '/Movies/top_rated/?page=1', icon: <FaStar /> },
    // { name: 'Filter By Genre', link: '/genre/AllMovies/?page=1', icon: <BiSearch /> },
]

export const ShowsLinks = [
    { name: 'All Shows', link: '/TvShows/AllShows/?page=1', icon: <MdOutlineLiveTv /> },
    { name: 'Trending', link: '/TvShows/Trending/?page=1', icon: <FaArrowTrendUp /> },
    { name: 'Airing Today', link: '/TvShows/airing_today/?page=1', icon: <FaPlayCircle /> },
    { name: 'On The Air', link: '/TvShows/on_the_air/?page=1', icon: <FaFireAlt /> },
    { name: 'Top Rated', link: '/TvShows/top_rated/?page=1', icon: <FaStar /> },
    // { name: 'Filter By Genre', link: '/genre/AllShows/?page=1', icon: <BiSearch /> },
]