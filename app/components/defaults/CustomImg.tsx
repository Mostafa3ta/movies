'use client'
import { imgBaseUrl } from '@/app/constants'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CustomImg({ imgSrc, className, isWide = false }: { imgSrc: string | null, className?: string, isWide?: boolean }) {
    const [isOptimized, setIsOptimized] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    
    return (<>
        {isLoading && <Skeleton className={`${className || ""}`} />}
        {imgSrc === null || imgSrc === undefined ? (
            isWide ?
                <Image loading='lazy' src="/download4.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' width={100} height={100} sizes='100vw' />
                // <img loading='lazy' src="/download4.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' />

                : <Image loading='lazy' src="/download3.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' width={100} height={100} sizes='100vw' />
            // <img loading='lazy' src="/download3.jpg" className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`} alt='poster' />
        )
            :
            <Image
                loading='lazy'
                src={imgBaseUrl + imgSrc}
                className={`${className || "object-contain mx-auto w-96 h-full rounded-md"}`}
                alt='poster'
                width={100} height={100}
                sizes='100vw'
                unoptimized={!isOptimized}
                onError={() => setIsOptimized(false)}
                onLoad={() => setIsLoading(false)}
            />
        }
    </>
    )
}
