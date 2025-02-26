import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imgBaseUrl } from '../constants'
import CustomImg from './defaults/CustomImg'
import SwiperCards from './SwiperCards'
import MovieCard from './MovieCard'

export default function Similar({ Recommend, Simi, detailsLink, showType }: { Recommend: any, Simi?: any, detailsLink: string, showType?: boolean }) {

    return (
        <>
            <SwiperCards spaceBetween={10} xsSlides={{ slidesPerView: 2, spaceBetween: 10 }} smSlides={{ slidesPerView: 2, spaceBetween: 10 }} mdSlides={{ slidesPerView: 3, spaceBetween: 10 }} lgSlides={{ slidesPerView: 4, spaceBetween: 10 }} pauseOnMouseEnter slidesPerView={4} className='text-center items-center h-full bg-black/30 rounded-lg'
                items={Recommend?.results?.map((show: any) => ({
                    card: <div className='group min-h-full my-8 ' key={show.id} >
                        <MovieCard show={showType} movie={show} pageLink={detailsLink} />
                    </div>
                })
                )} />
        </>
    )
}
