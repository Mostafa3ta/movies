import React from 'react'
import SwiperCards from './SwiperCards'
import { fetchMoviesLists } from '../api'
import HeroCardInfo from './HeroCardInfo'
import Heading from './defaults/Heading'
import MotionItem from './defaults/MotionItem'
import { Movie } from '../types'

export default async function Hero() {
    
    const cardItems = await fetchMoviesLists({ listType: 'Trending', pageNum: 1 })
    const topMovies = cardItems[0]?.results.slice(0, 8); // Limit to top 8 for performance
    

    return (
        <div className='relative my-8 pb-8'>
            {/* Background Decoration with fade */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000 opacity-60"></div>
            </div>

            <MotionItem 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl px-4 py-1.5">
                        Trending Now
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                        Discover the hottest movies everyone's talking about
                    </p>
                </div>
            </MotionItem>

                <MotionItem 
                    delay={0.3}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative">
                        {/* Glow effect behind swiper */}
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10"></div>
                        
                        <SwiperCards 
                            spaceBetween={50} 
                            xsSlides={{ slidesPerView: 1, spaceBetween: 50 }} 
                            smSlides={{ slidesPerView: 1, spaceBetween: 50 }} 
                            mdSlides={{ slidesPerView: 2, spaceBetween: 50 }} 
                            lgSlides={{ slidesPerView: 2, spaceBetween: 50 }} 
                            pauseOnMouseEnter 
                            delay={5000}
                            className='h-[40rem] sm:h-[24rem] md:px-6 px-0 mx-auto overflow-hidden rounded-2xl'
                            items={topMovies?.map((item: Movie, index: number) => ({
                                card: (
                                    <div 
                                        key={item?.id}
                                        className="h-full"
                                    >
                                        <HeroCardInfo 
                                            image={item?.backdrop_path} 
                                            smImage={item?.poster_path} 
                                            title={item?.title} 
                                            id={item?.id} 
                                            desc={item?.overview} 
                                        />
                                    </div>
                                ),
                                src: item.poster_path
                            }))}
                        />
                    </div>
                </MotionItem>

        </div>
    )
}
