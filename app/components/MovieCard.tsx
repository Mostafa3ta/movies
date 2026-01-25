import Link from 'next/link'
import React from 'react'
import CustomImg from './defaults/CustomImg'
import MotionItem from './defaults/MotionItem'
import Rating from './defaults/Rating'
import { Badge } from '@/components/ui/badge'
import { FaRegPlayCircle } from 'react-icons/fa'
import { MdLiveTv, MdOutlineLiveTv } from 'react-icons/md'
import { fetchMovieDetails, fetchShowDetails } from '../api'
import SeasonsEpisodes from './SeasonsEpisodes'
import { TbMovie } from 'react-icons/tb'
import { FaMasksTheater } from 'react-icons/fa6'
import { Genre, Movie, TVShowDetails } from '../types'
import { getGenreName } from '@/lib/genreMap'

export default async function MovieCard({ movie, pageLink, show = false, isSearch = false, isPerson = false, priority = false }: { movie: Movie | TVShowDetails | any, pageLink?: string, show?: boolean, isSearch?: boolean, isPerson?: boolean, priority?: boolean }) {
    // Fetch details only for TV shows to get seasons/episodes count
    let details = null;
    try {
        if (show && !isSearch && movie?.media_type !== "person") {
            details = await fetchShowDetails({ ShowId: movie.id });
        }
    } catch (error) {
        // Silently fail if details fetch fails (weak connection)
        console.log('Failed to fetch show details:', error);
    }

    // For person cards from People lists, always enable linking
    const isPersonCard = isPerson || movie?.media_type === "person";
    const shouldDisableLink = isPersonCard && !isPerson; // Only disable if it's from search, not from People lists

    return (
        <Link 
            className={`group my-4 block ${shouldDisableLink ? 'pointer-events-none' : ''}`} 
            key={movie?.id} 
            href={`${isPersonCard ? (isPerson ? pageLink + '/?id=' + movie?.id : '') : pageLink + '/?id=' + movie?.id}`}
        >
            <div className={`relative overflow-visible transition-all duration-500 ${shouldDisableLink ? "" : "group-hover:-translate-y-2"}`}>
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-500/50 transition-all duration-500">
                    <div className='relative aspect-[2/3] w-full'>
                        <CustomImg
                            priority={priority}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl' 
                            imgSrc={movie?.poster_path ? movie?.poster_path : movie?.profile_path} 
                        />
                        
                        {/* Subtle gradient overlay */}
                        {!isPersonCard && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        )}
                        
                        {/* Play icon on hover */}
                        {!isPersonCard && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {show ? 
                                    <MdLiveTv className='w-16 h-16 text-white drop-shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500' />
                                    : <FaRegPlayCircle className='w-16 h-16 text-white drop-shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500' />
                                }
                            </div>
                        )}
                        
                        {/* Person card overlay - show popularity */}
                        {isPerson && movie?.popularity && (
                            <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600/90 to-fuchsia-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                <span className="text-white text-xs font-semibold">★ {movie.popularity.toFixed(1)}</span>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Slide-up Info Panel */}
                {!isPersonCard && (
                    <div className="absolute inset-x-0 bottom-0 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-xl border-t-2 border-fuchsia-500/50 p-4 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {/* Release Date and Rating */}
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
                                {(movie?.release_date || movie?.first_air_date) && (
                                    <Badge variant="secondary" className="bg-gray-700/80 text-white border-gray-600/50 hover:bg-gray-600/80">
                                        {new Date(movie?.release_date || movie?.first_air_date).getFullYear()}
                                    </Badge>
                                )}
                                {movie?.vote_average !== 0 && (
                                    <Rating className='scale-90' rate={movie?.vote_average} />
                                )}
                            </div>
                            
                            {/* TV Show Info */}
                            {show && details && (details.number_of_seasons || details.number_of_episodes) && (
                                <div className='flex gap-2 justify-center mb-3'>
                                    {details.number_of_seasons && (
                                        <Badge variant="secondary" className="bg-fuchsia-500/20 text-gray-300 border-fuchsia-500/30 hover:bg-fuchsia-500/30">
                                            {details.number_of_seasons} Seasons
                                        </Badge>
                                    )}
                                    {details.number_of_episodes && (
                                        <Badge variant="secondary" className="bg-purple-500/20 text-gray-300 border-purple-500/30 hover:bg-purple-500/30">
                                            {details.number_of_episodes} Episodes
                                        </Badge>
                                    )}
                                </div>
                            )}
                            
                            {/* Genres */}
                            {movie?.genre_ids && movie.genre_ids.length > 0 && (
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {movie.genre_ids.slice(0, 2).map((genreId: number) => (
                                        <Badge key={genreId} className="bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 text-gray-200 border-white/20 hover:from-fuchsia-500/80 hover:to-purple-500/80">
                                            {getGenreName(genreId)}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Person card info panel */}
                {isPerson && movie?.known_for_department && (
                    <div className="absolute inset-x-0 bottom-0 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-purple-900 rounded-b-xl border-t-2 border-purple-500/50 p-3 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="text-center">
                                <Badge className="bg-purple-600/80 text-gray-200 border-purple-400/30 hover:bg-purple-500/80">
                                    {movie.known_for_department}
                                </Badge>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Title below card */}
            <div className={`${isSearch ? "flex flex-wrap gap-2 justify-center items-center" : ""} mt-3 text-center`}>
                <h4 className='duration-300 group-hover:text-fuchsia-400 font-semibold line-clamp-2 text-gray-100'> {movie?.name ? movie?.name : movie?.title}</h4>
                {isSearch && <>
                    {movie.media_type === "movie" && <TbMovie className="w-6 h-6 text-red-500" />}
                    {movie.media_type === "person" && <FaMasksTheater className="w-6 h-6 text-green-500" />}
                    {movie.media_type === "tv" && <MdOutlineLiveTv className='w-6 h-6 text-yellow-500' />}
                </>
                }
            </div>
        </Link>)
}
