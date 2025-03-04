import { imgBaseUrl } from '@/app/constants'
import React from 'react'

export default function CustomImg({ imgSrc, className, isWide = false }: { imgSrc: string | null, className?: string, isWide?: boolean }) {
    return (
        imgSrc === null || imgSrc === undefined ? (
            isWide ? <img loading='lazy' src="/download4.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' />
                : <img loading='lazy' src="/download3.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' />
        )
            :
            <img loading='lazy' src={imgBaseUrl + imgSrc} className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' />

        // <Image src={imgBaseUrl + movieDetails.poster_path} className='w-75 m-2 mt-5 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
    )
}
