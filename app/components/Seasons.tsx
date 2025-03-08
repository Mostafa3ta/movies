import Link from 'next/link'
import React from 'react'
import CustomImg from './defaults/CustomImg'
import Heading from './defaults/Heading'
import { Season } from '../types'
import SwiperCards from './SwiperCards'
import Hr from './defaults/Hr'

export default function Seasons({ ShowDetails, ShowId, withHr = true }: { ShowDetails: any, ShowId: number, withHr?: boolean }) {
    return <>

        <Heading center title="Seasons" />
        <SwiperCards spaceBetween={20} xsSlides={{ slidesPerView: 2, spaceBetween: 20 }} smSlides={{ slidesPerView: 2, spaceBetween: 20 }} mdSlides={{ slidesPerView: 3, spaceBetween: 20 }} lgSlides={{ slidesPerView: 4, spaceBetween: 20 }} pauseOnMouseEnter className='text-center items-center h-full bg-black/30 rounded-lg'
            items={ShowDetails?.seasons?.map((show: Season) => ({
                card: <div className='group text-center min-h-full my-4' key={show.id} >
                    <Link href={`Season/?id=${ShowId}&season=${show.season_number}`} className='w-full h-full'>
                        <div className='flex relative overflow-hidden flex-col items-center'>
                            <CustomImg className='w-56 h-full object-contain duration-200 group-hover:scale-110 z-10 rounded-md mb-4' imgSrc={show.poster_path} />
                            <h4 className='duration-200 group-hover:text-fuchsia-400 mt-2 font-semibold'> {show.name}</h4>
                        </div>
                    </Link>
                </div >
            })
            )} />
        {withHr && <Hr />}
    </>
}