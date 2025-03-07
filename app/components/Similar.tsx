import React from 'react'
import SwiperCards from './SwiperCards'
import MovieCard from './MovieCard'
import Heading from './defaults/Heading'

export default function Similar({ Recommend, detailsLink, showType = false, hideTitle = false }: { Recommend: any, detailsLink: string, showType?: boolean, hideTitle?: boolean }) {

    return (
        <div className="my-3 md:mx-6 customScrollBar">
            {!hideTitle && <Heading center title={`Similar ${showType ? 'Shows' : 'Movies'}`} />}
            <SwiperCards spaceBetween={20} xsSlides={{ slidesPerView: 2, spaceBetween: 20 }} smSlides={{ slidesPerView: 2, spaceBetween: 20 }} mdSlides={{ slidesPerView: 3, spaceBetween: 20 }} lgSlides={{ slidesPerView: 4, spaceBetween: 20 }} pauseOnMouseEnter className='text-center items-center h-full bg-black/30 rounded-lg'
                items={Recommend?.results?.map((show: any) => ({
                    card: <div className='group min-h-full my-8 ' key={show.id} >
                        <MovieCard show={showType} movie={show} pageLink={detailsLink} />
                    </div>
                })
                )} />
        </div>
    )
}
