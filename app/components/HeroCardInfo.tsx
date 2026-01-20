import Image from 'next/image'
import React from 'react'
import MotionItem from './defaults/MotionItem'
import Rating from './defaults/Rating'
import Link from 'next/link'
import { fetchMovieDetails } from '../api'
import { imgBaseUrl } from '../constants'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Badge } from '@/components/ui/badge'

export default async function HeroCardInfo({ desc, title, id, image, smImage}: { desc: string | null, title: string, image?: string | null | undefined, id: number, smImage?: string | null | undefined }) {
    const movieInfo = await fetchMovieDetails({ MovieID: id })

    return (
        <Link href={`/Movies/MovieDetails/?id=${id}`} className="block h-full group">
            <div className='relative rounded-2xl h-full overflow-hidden w-full shadow-2xl'>
                {/* Image */}
                <Image priority src={imgBaseUrl + image} fill alt={title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className='object-cover hidden sm:block object-center w-full h-full transition-transform duration-700 group-hover:scale-105' />
                <Image priority src={imgBaseUrl + smImage} fill alt={title}
                    sizes="100vw"
                    className='object-cover sm:hidden w-full h-full transition-transform duration-700 group-hover:scale-105' />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Content Card */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    <MotionItem
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-2"
                    >
                        {/* Metadata badges */}
                        <div className="flex items-center gap-2 flex-wrap">
                            {movieInfo.release_date && (
                                <Badge className="px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 backdrop-blur-sm hover:bg-fuchsia-500/30">
                                    {new Date(movieInfo.release_date).getFullYear()}
                                </Badge>
                            )}
                            <div className="scale-90 origin-left">
                                <Rating rate={movieInfo.vote_average} />
                            </div>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white line-clamp-2 group-hover:text-fuchsia-300 transition-colors duration-300 leading-tight">
                            {title}
                        </h2>
                        
                        {/* Description */}
                        <p className='text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed'>
                            {desc}
                        </p>
                        
                        {/* Hover CTA */}
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-fuchsia-400">
                                Watch Now
                                <FaArrowRightLong size={14} />

                            </span>
                        </div>
                    </MotionItem>
                </div>
            </div>
        </Link>
    )
}