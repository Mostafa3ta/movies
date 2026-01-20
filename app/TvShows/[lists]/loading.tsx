import { GridContainer, LoadingSkelton } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import { MdOutlineLiveTv } from 'react-icons/md'
import React from 'react'

export default function loading() {
    return (
        <>
            {/* Header Skeleton */}
            <div className='my-6 flex items-center gap-3'>
                <div className="flex-shrink-0">
                    <MdOutlineLiveTv className='text-yellow-500 w-8 h-8 animate-pulse' />
                </div>
                <Skeleton className="h-10 w-64" />
            </div>

            {/* Grid Skeleton */}
            <GridContainer cols={2} className='my-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 20 }).map((_, i) => <LoadingSkelton key={i} />)}
            </GridContainer>

            {/* Pagination Skeleton */}
            <div className="flex justify-center items-center gap-3 my-8">
                <Skeleton className="h-10 w-20 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 w-20 rounded-lg" />
            </div>
        </>
    )
}