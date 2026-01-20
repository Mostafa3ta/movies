'use client'
import { imgBaseUrl } from '@/app/constants'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CustomImg({ imgSrc, className, isWide = false, priority = false }: { imgSrc: string | null, className?: string, isWide?: boolean, priority?: boolean }) {
    const [isOptimized, setIsOptimized] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative w-full h-full">
            {isLoading && <Skeleton className={`absolute inset-0 ${className || ""}`} />}
            {imgSrc === null || imgSrc === undefined ? (
                isWide ?
                    <Image
                        loading={priority ? undefined : 'lazy'}
                        priority={priority}
                        src="/download4.jpg"
                        className={`${className || "object-contain mx-auto w-96 h-full rounded-md"} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        alt='poster'
                        width={100}
                        height={100}
                        sizes='100vw'
                        unoptimized={!isOptimized}
                        onError={() => setIsOptimized(false)}
                        onLoad={() => setIsLoading(false)}
                    />
                    : <Image
                        loading={priority ? undefined : 'lazy'}
                        priority={priority}
                        src="/download3.jpg"
                        className={`${className || "object-contain mx-auto w-96 h-full rounded-md"} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        alt='poster'
                        width={100}
                        height={100}
                        sizes='100vw'
                        unoptimized={!isOptimized}
                        onError={() => setIsOptimized(false)}
                        onLoad={() => setIsLoading(false)}
                    />
            )
                :
                <Image
                    loading={priority ? undefined : 'lazy'}
                    priority={priority}
                    src={imgBaseUrl + imgSrc}
                    className={`${className || "object-contain mx-auto md:w-96 w-72 h-full rounded-md"} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    alt='poster'
                    width={500}
                    height={750}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={!isOptimized}
                    onError={() => setIsOptimized(false)}
                    onLoad={() => setIsLoading(false)}
                />
        }
        </div>
    )
}
