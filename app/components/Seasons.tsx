import Link from 'next/link'
import React from 'react'
import CustomImg from './defaults/CustomImg'
import Heading from './defaults/Heading'
import { Season } from '../types'
import SwiperCards from './SwiperCards'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Seasons({ ShowDetails, ShowId, withHr = true }: { ShowDetails: any, ShowId: number, withHr?: boolean }) {
    return <>
        <Heading center title="Seasons" />
        <SwiperCards 
            spaceBetween={20} 
            xsSlides={{ slidesPerView: 2, spaceBetween: 15 }} 
            smSlides={{ slidesPerView: 3, spaceBetween: 20 }} 
            mdSlides={{ slidesPerView: 4, spaceBetween: 20 }} 
            lgSlides={{ slidesPerView: 5, spaceBetween: 25 }} 
            pauseOnMouseEnter 
            className='text-center items-center glass-dark rounded-2xl py-8 shadow-xl'
            items={ShowDetails?.seasons?.map((show: Season, index: number) => ({
                card: (
                    <Link 
                        key={show.id} 
                        href={`Season/?id=${ShowId}&season=${show.season_number}`}
                        className='group block my-6 transition-all duration-300 hover:-translate-y-3 hover:scale-105'
                    >
                        <div className='relative overflow-hidden rounded-xl shadow-2xl group-hover:shadow-2xl group-hover:shadow-fuchsia-500/60 transition-all duration-500 border border-gray-800/50 group-hover:border-fuchsia-500/50'>
                            <div className='relative aspect-[2/3]'>
                                <CustomImg 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl' 
                                    imgSrc={show.poster_path} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                {/* Season Number Badge */}
                                <div className="absolute top-3 right-3 z-10">
                                    <Badge className="px-3.5 py-1.5 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-pink-600 text-white shadow-2xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300 hover:from-fuchsia-400 hover:via-purple-500 hover:to-pink-500">
                                        <span className="text-xs font-bold tracking-wide">{show.season_number === 0 ? 'Specials' : `S${show.season_number}`}</span>
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                                <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl p-3 border border-fuchsia-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                                    <h4 className='text-sm font-bold text-white line-clamp-1 mb-1.5'>{show.name}</h4>
                                    <div className="space-y-1 flex flex-col items-center">
                                        {show.episode_count && (
                                            <Badge variant="secondary" className="text-xs bg-gray-800/80 text-gray-200 border-gray-600/50">
                                                {show.episode_count} Episodes
                                            </Badge>
                                        )}
                                        {show.air_date && (
                                            <p className="text-xs text-fuchsia-400">{new Date(show.air_date).getFullYear()}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }))
            } 
        />
        {withHr && <Separator className="my-8 bg-gray-700/30" />}
    </>
}