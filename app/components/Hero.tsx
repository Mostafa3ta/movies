import React from 'react'
import SwiperCards from './SwiperCards'
import { fetchMoviesDetails, fetchMoviesLists } from '../api'
import HeroCardInfo from './HeroCardInfo'
import Heading from './defaults/Heading'

export default async function Hero() {
    
    const cardItems = await fetchMoviesLists({ listType: 'Trending', pageNum: 1 })
    const moviesDetails = await fetchMoviesDetails({ MoviesIDs: cardItems[0]?.results.map((item: any) => item.id) })
    console.log(moviesDetails);
    // console.log(cardItems?.results)

    return (
        <div className='my-4'>
            <Heading title='Trending Movies' />
            <SwiperCards spaceBetween={30} smSlides={{ slidesPerView: 1, spaceBetween: 15 }} mdSlides={{ slidesPerView: 2, spaceBetween: 15 }} lgSlides={{ slidesPerView: 2, spaceBetween: 15 }} pauseOnMouseEnter className='h-[20rem] px-4 overflow-hidden'
                items={cardItems[0]?.results.map((item: any) => ({
                    card: <HeroCardInfo key={item?.id} image={item?.backdrop_path} title={item?.title} id={item?.id} desc={item?.overview} />,
                    src: item.poster_path
                }))}
            />
        </div>
    )
}
