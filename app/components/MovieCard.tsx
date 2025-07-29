import Link from 'next/link'
import React from 'react'
import CustomImg from './defaults/CustomImg'
import MotionItem from './defaults/MotionItem'
import Rating from './defaults/Rating'
import { FaRegPlayCircle } from 'react-icons/fa'
import { MdLiveTv, MdOutlineLiveTv } from 'react-icons/md'
import { fetchMovieDetails, fetchShowDetails } from '../api'
import SeasonsEpisodes from './SeasonsEpisodes'
import { TbMovie } from 'react-icons/tb'
import { FaMasksTheater } from 'react-icons/fa6'
import { Genre, Movie, TVShowDetails } from '../types'

export default async function MovieCard({ movie, pageLink, show = false, isSearch = false }: { movie: Movie | TVShowDetails | any, pageLink?: string, show?: boolean, isSearch?: boolean }) {
    const details = movie?.media_type && movie?.media_type === "person" ? [] : await Promise.all(show === false ? [fetchMovieDetails({ MovieID: movie.id })] : [fetchShowDetails({ ShowId: movie.id })])

    return (
        <Link className={`group text-center my-4 ${movie?.media_type === "person" ? 'pointer-events-none' : ''}`} key={movie?.id} href={`${movie?.media_type === "person" ? '' : pageLink + '/?id=' + movie?.id}`}>
            <div className={`w-full h-full overflow-hidden rounded-md relative ${movie.media_type === "person" ? "" : "after:inset-0 after:absolute after:z-20 after:w-0 after:h-full after:bg-black/70 after:duration-200 group-hover:after:w-full"}`}>
                <div className='flex w-full h-full flex-col justify-center items-center'>
                    <CustomImg className='w-full h-full object-cover duration-200 group-hover:scale-110 z-10 rounded-md' imgSrc={movie?.poster_path ? movie?.poster_path : movie?.profile_path} />
                    {movie?.media_type === "person" ? null :
                        <MotionItem whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} className="w-full h-96 overflow-hidden rounded-2xl p-3 my-4 z-30 hidden group-hover:flex flex-col gap-4 items-center justify-center duration-200 absolute">
                            {show ? <MdLiveTv className='w-12 h-12 text-white' />
                                : <FaRegPlayCircle className='w-12 h-12 text-white' />}
                            {show && <div className='sm:block hidden'>
                                <SeasonsEpisodes text="Seasons" value={details[0].number_of_seasons} />
                                <SeasonsEpisodes text="Episodes" value={details[0].number_of_episodes} />
                            </div>}
                            <div>
                                {movie?.vote_average !== 0 && <Rating className='text-center justify-center' rate={movie?.vote_average} />}
                                {/* <p className="text-sm mt-1 line-clamp-3 text-gray-200">{movie?.overview}</p> */}
                            </div>
                            <div className="flex flex-wrap w-full gap-2 items-center mt-2 justify-center">
                                {details[0]?.genres?.map((genre: Genre) => <p key={genre?.id} className="text-sm text-gray-200 bg-gray-500/80 py-1 px-2 rounded-full">{genre.name}</p>)}
                            </div>
                        </MotionItem>
                    }
                </div>
            </div>
            <div className={`${isSearch ? "flex flex-wrap gap-2 justify-center items-center" : ""} mt-2`}>
                <h4 className='duration-200 group-hover:text-fuchsia-400 font-semibold line-clamp-2'> {movie?.name ? movie?.name : movie?.title}</h4>
                {isSearch && <>
                    {movie.media_type === "movie" && <TbMovie className="w-6 h-6 text-red-600" />}
                    {movie.media_type === "person" && <FaMasksTheater className="w-6 h-6 text-green-600" />}
                    {movie.media_type === "tv" && <MdOutlineLiveTv className='w-6 h-6 text-yellow-600' />}
                </>
                }
            </div>
        </Link>)
}
