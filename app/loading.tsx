import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className="space-y-8">
            {/* Hero Swiper Skeleton */}
            <div className="relative my-8 pb-8 animate-pulse">
                <div className="text-center mb-8">
                    <Skeleton className="h-16 w-96 mx-auto mb-4 rounded-xl bg-gray-700/30" />
                    <Skeleton className="h-6 w-[600px] mx-auto rounded-lg bg-gray-700/20" />
                </div>
                
                {/* Hero Cards Skeleton */}
                <div className="glass-dark rounded-3xl p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="glass-dark rounded-2xl p-6 border border-gray-700/30">
                                <Skeleton className="w-full h-64 rounded-xl mb-4 bg-gray-700/30" />
                                <Skeleton className="h-8 w-3/4 mb-3 rounded-lg bg-gray-700/20" />
                                <Skeleton className="h-4 w-full mb-2 rounded bg-gray-700/15" />
                                <Skeleton className="h-4 w-5/6 rounded bg-gray-700/15" />
                            </div>
                        ))}
                    </div>
                    {/* Pagination dots skeleton */}
                    <div className="flex justify-center gap-2 mt-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Skeleton key={i} className="h-3 w-3 rounded-full bg-gray-700/20" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Categories Skeleton */}
            <div className="my-12 animate-pulse">
                <Skeleton className="h-10 w-64 mx-auto mb-8 rounded-xl bg-gray-700/30" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="glass-dark rounded-2xl p-6 border border-gray-700/30">
                            <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-700/30" />
                            <Skeleton className="h-6 w-32 mx-auto rounded-lg bg-gray-700/20" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <Skeleton className="h-px w-full my-12 bg-gray-700/20" />

            {/* Trending TV Shows Skeleton */}
            <div className="my-12 animate-pulse">
                <Skeleton className="h-10 w-72 mb-6 rounded-xl bg-gray-700/30" />
                <div className="glass-dark rounded-2xl p-8">
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-shrink-0 w-48">
                                <Skeleton className="w-full aspect-[2/3] rounded-xl mb-3 bg-gray-700/30" />
                                <Skeleton className="h-4 w-full mb-2 rounded bg-gray-700/20" />
                                <Skeleton className="h-3 w-3/4 rounded bg-gray-700/15" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <Skeleton className="h-px w-full my-12 bg-gray-700/20" />

            {/* Popular Movies Skeleton */}
            <div className="my-12 animate-pulse">
                <Skeleton className="h-10 w-64 mb-6 rounded-xl bg-gray-700/30" />
                <div className="glass-dark rounded-2xl p-8">
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-shrink-0 w-48">
                                <Skeleton className="w-full aspect-[2/3] rounded-xl mb-3 bg-gray-700/30" />
                                <Skeleton className="h-4 w-full mb-2 rounded bg-gray-700/20" />
                                <Skeleton className="h-3 w-3/4 rounded bg-gray-700/15" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <Skeleton className="h-px w-full my-12 bg-gray-700/20" />

            {/* Top Rated Skeleton */}
            <div className="my-12 animate-pulse">
                <Skeleton className="h-10 w-72 mb-6 rounded-xl bg-gray-700/30" />
                <div className="glass-dark rounded-2xl p-8">
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex-shrink-0 w-48">
                                <Skeleton className="w-full aspect-[2/3] rounded-xl mb-3 bg-gray-700/30" />
                                <Skeleton className="h-4 w-full mb-2 rounded bg-gray-700/20" />
                                <Skeleton className="h-3 w-3/4 rounded bg-gray-700/15" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Skeleton */}
            <div className="my-16 text-center glass-dark rounded-2xl p-12 shadow-2xl animate-pulse">
                <Skeleton className="h-12 w-96 mx-auto mb-6 rounded-xl bg-gray-700/30" />
                <Skeleton className="h-5 w-[600px] mx-auto mb-8 rounded-lg bg-gray-700/20" />
                <div className="flex gap-4 justify-center">
                    <Skeleton className="h-14 w-48 rounded-xl bg-gray-700/30" />
                    <Skeleton className="h-14 w-48 rounded-xl bg-gray-700/30" />
                </div>
            </div>
        </div>
    )
}