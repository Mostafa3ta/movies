import { GridContainer, Heading, LoadingSkelton } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <>
            <GridContainer className='bg-black/50 rounded-xl md:grid-cols-2' cols={1}>
                <div className="md:col-span-1">
                    <Skeleton className="h-96 w-full rounded-xl" />
                </div>
                <div className="md:col-span-1 mb-4 flex flex-col justify-center items-center gap-3 px-4">
                    <Heading title={<Skeleton className="h-6 px-4 text-center text-yellow-400 my-6 mx-auto pb-2 w-[300px] " />} />
                    {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-4 mx-4 w-full my-1" />)}
                </div>
            </GridContainer>
        </>
    )
}