import { GridContainer, Heading } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <>
            {/* Hero Section Skeleton */}
            <div className="relative mb-12">
                <GridContainer className='glass-dark rounded-3xl items-center md:grid-cols-3 shadow-2xl shadow-fuchsia-500/20 p-8 gap-8 border border-gray-700/30' cols={1}>
                    <div className="flex justify-center items-center md:col-span-1">
                        <div className="relative group w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                            <Skeleton className="relative h-[500px] w-full rounded-2xl" />
                        </div>
                    </div>
                    
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <Skeleton className="h-12 w-3/4 mx-auto md:mx-0" />
                        
                        <div className="space-y-4">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Skeleton className="h-4 w-24 flex-shrink-0" />
                                    <Skeleton className="h-4 flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </GridContainer>
            </div>

            {/* Overview Skeleton */}
            <div className="glass-dark rounded-2xl p-6 mb-8 border border-gray-700/30">
                <Skeleton className="h-8 w-32 mb-4" />
                {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-4 w-full my-2" />)}
            </div>

            {/* Cast Skeleton */}
            <div className="mb-8">
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-32 w-full rounded-xl" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Similar Movies Skeleton */}
            <div className="mb-8">
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex-shrink-0 w-[200px] space-y-2">
                            <Skeleton className="h-[300px] w-full rounded-xl" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}