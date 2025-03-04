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
        <SwiperCards spaceBetween={15} pauseOnMouseEnter slidesPerView={4} className='text-center items-center h-full px-2 bg-black/30 rounded-lg'
            items={ShowDetails?.seasons?.map((show: Season) => ({
                card: <div className='group text-center min-h-full my-8' key={show.id} >
                    <Link href={`Season/?id=${ShowId}&season=${show.season_number}`}>
                        <div className="w-full h-96 rounded-md overflow-hidden relative">
                            <div className='flex w-full relative flex-col items-center'>
                                <CustomImg className='w-full h-96 object-contain duration-200 group-hover:scale-110 z-10 rounded-md mb-4' imgSrc={show.poster_path} />
                            </div>
                        </div>
                        <h4 className='duration-200 group-hover:text-fuchsia-400 mt-2 font-semibold'> {show.name}</h4>
                    </Link>
                </div >
            })
            )} />
        {withHr && <Hr />}
    </>
}