import Link from 'next/link'
import React from 'react'
import CustomImg from './defaults/CustomImg'
import MotionItem from './defaults/MotionItem'
import Rating from './defaults/Rating'
import { FaPlay, FaPlayCircle, FaRegPlayCircle } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'
import { fetchMovieDetails, fetchShowDetails } from '../api'
import DetailsLine from './defaults/DetailsLine'
import SeasonsEpisodes from './SeasonsEpisodes'

export default async function MovieCard({ movie, pageLink, show = false }: { movie: any, pageLink: string, show?: boolean }) {
    const details = await Promise.all(show === false ? [fetchMovieDetails({ MovieID: movie.id })] : [fetchShowDetails({ ShowId: movie.id })])
    // console.log(movie);
    console.log(details);

    return (
        <Link className='group text-center my-2' key={movie?.id} href={`${pageLink}/?id=${movie?.id}`}>
            <div className="w-full rounded-md overflow-hidden relative after:inset-0 after:absolute after:z-20 after:w-0 after:h-full after:bg-[#0f0f0f]/60 after:duration-200 group-hover:after:w-full">
                <div className='flex w-full flex-col justify-center items-center'>
                    <CustomImg className='w-full h-full object-fill duration-200 group-hover:scale-110 z-10 rounded-md' imgSrc={movie?.poster_path} />
                    <MotionItem whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} className="w-full h-96 overflow-hidden rounded-2xl p-2 z-30 hidden group-hover:flex flex-col gap-4 items-center justify-center duration-200 absolute">
                        {show ? <>
                            <MdLiveTv className='w-12 h-12 text-white' />
                        </>
                            : <FaRegPlayCircle className='w-12 h-12 text-white' />}
                        <div>
                            {movie?.vote_average === 0 ? null : <Rating className='text-center justify-center' rate={movie?.vote_average} />}
                            <p className="text-sm mt-1 line-clamp-3 text-gray-200">{movie?.overview}</p>
                        </div>
                        {show ? <div>
                            <SeasonsEpisodes text="Seasons" value={details[0].number_of_seasons} />
                            <SeasonsEpisodes text="Episodes" value={details[0].number_of_episodes} />
                        </div> : null}
                        <div className="flex flex-wrap w-full gap-2 items-center mt-2 justify-center">
                            {details[0].genres.map((genre: any) => <p key={genre.id} className="text-sm text-gray-200 bg-gray-500/80 py-1 px-2 rounded-full">{genre.name}</p>)}
                        </div>
                    </MotionItem>
                </div>
            </div>
            <h4 className='duration-200 group-hover:text-fuchsia-400 mt-2 font-semibold'> {movie?.name ? movie?.name : movie?.title}</h4>
        </Link> )
}
