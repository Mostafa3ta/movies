import { GridContainer, LoadingSkelton } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <>
            {/* Header Skeleton */}
            <div className="glass-dark rounded-2xl p-6 mb-8 border border-gray-700/30 animate-pulse">
                <div className="mb-6 space-y-3">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-4 w-96" />
                </div>
                
                {/* Tabs Skeleton */}
                <div className="flex gap-3">
                    <Skeleton className="h-12 w-32 rounded-xl" />
                    <Skeleton className="h-12 w-36 rounded-xl" />
                    <Skeleton className="h-12 w-36 rounded-xl" />
                    <Skeleton className="h-12 w-32 rounded-xl" />
                </div>
            </div>

            {/* Grid Skeleton */}
            <GridContainer cols={2} className='gap-4 gap-y-7 md:grid-cols-3 xl:grid-cols-4'>
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