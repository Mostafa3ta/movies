import React from 'react'
import SwiperCards from './SwiperCards'
import { fetchMoviesLists } from '../api'
import HeroCardInfo from './HeroCardInfo'
import Heading from './defaults/Heading'
import { Movie } from '../types'

export default async function Hero() {
    
    const cardItems = await fetchMoviesLists({ listType: 'Trending', pageNum: 1 })
    

    return (
        <div className='my-4'>
            <Heading title='Trending Movies' />
            <SwiperCards spaceBetween={30} smSlides={{ slidesPerView: 1, spaceBetween: 30 }} mdSlides={{ slidesPerView: 2, spaceBetween: 30 }} lgSlides={{ slidesPerView: 2, spaceBetween: 30 }} pauseOnMouseEnter className='h-[20rem] m-4 overflow-hidden'
                items={cardItems[0]?.results.map((item: Movie) => ({
                    card: <HeroCardInfo key={item?.id} image={item?.backdrop_path} title={item?.title} id={item?.id} desc={item?.overview} />,
                    src: item.poster_path
                }))}
            />
        </div>
    )
}
