import Image from 'next/image'
import React from 'react'
import MotionItem from './defaults/MotionItem'
import CustomColorBtn from './defaults/CustomColorBtn'
import Rating from './defaults/Rating'
import Link from 'next/link'
import { fetchMovieDetails } from '../api'
import { imgBaseUrl } from '../constants'

export default async function HeroCardInfo({ desc, title, id, image, btnText, btnStyle }: { desc: string, title: string, image?: string, btnText?: string, btnStyle?: string, id?: string }) {
    const movieInfo = await fetchMovieDetails({ MovieID: Number(id) })
    console.log(imgBaseUrl + image);
    

    return (<>
        <section className='relative rounded-2xl h-full overflow-hidden w-full'>
            <Image src={imgBaseUrl + image} fill alt={title}
                className='object-cover overflow-hidden rounded-xl w-full h-full' />
        </section>
        <MotionItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className='gap-4 p-4 absolute shadow-lg overflow-hidden h-[40%] w-[90%] bg-black/50 left-5 bottom-5 justify-end'>
            <div className='flex w-fit flex-col overflow-hidden'>
                <h2 className="hover:text-fuchsia-500 duration-200 text-xl hover:no-underline underline border-neutral-100 font-semibold text-white">
                    <Link href={`/Movies/MovieDetails/?id=${id}`}>
                        {title}
                    </Link>
                </h2>
                <Rating rate={movieInfo.vote_average.toString(10).split('').splice(0, 3).join('')} />
            </div>
            {/* <div className='w-80 h-40 relative'>
                <Image src={image} fill alt={title} className='object-contain' />
            </div> */}
            <p className='text-sm pt-2 line-clamp-2 text-gray-200'>{desc}</p>
            {/* <CustomColorBtn type='button' text={btnText} style={btnStyle} /> */}
        </MotionItem>
    </>
    )
}