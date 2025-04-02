import Image from 'next/image'
import React from 'react'
import MotionItem from './defaults/MotionItem'
import Rating from './defaults/Rating'
import Link from 'next/link'
import { fetchMovieDetails } from '../api'
import { imgBaseUrl } from '../constants'

export default async function HeroCardInfo({ desc, title, id, image, smImage}: { desc: string | null, title: string, image?: string | null | undefined, id: number, smImage?: string | null | undefined }) {
    const movieInfo = await fetchMovieDetails({ MovieID: id })

    return (<>
        <section className='relative rounded-md h-full overflow-hidden w-full'>
            <Image loading='lazy' src={imgBaseUrl + image} fill alt={title}
                className='object-cover hidden sm:block object-center overflow-hidden w-full h-full' />
            <Image loading='lazy' src={imgBaseUrl + smImage} fill alt={title}
                className='object-cover sm:hidden overflow-hidden w-full h-full' />
        </section>
        <MotionItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className='gap-4 p-4 absolute shadow-lg overflow-hidden h-[30%] sm:h-[40%] w-[90%] bg-black/70 left-5 bottom-5 justify-end'>
            <div className='flex w-fit flex-col overflow-hidden'>
                <h2 className="hover:text-fuchsia-500 duration-200 text-lg md:text-xl border-neutral-100 font-semibold text-white">
                    <Link href={`/Movies/MovieDetails/?id=${id}`}>
                        {title}
                    </Link>
                </h2>
                <Rating className='mt-1' rate={movieInfo.vote_average} />
            </div>
            <p className='text-sm pt-2 sm:line-clamp-2 line-clamp-5 text-gray-200'>{desc}</p>
        </MotionItem>
    </>
    )
}