import { GridContainer, Heading, LoadingSkelton, MaxWidthWrapper } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <>
            <Heading title={<Skeleton className="h-6 w-[200px] my-4" />} />
            <GridContainer cols={1} className='md:grid-cols-2 my-2 gap-4'>
                {Array.from({ length: 2 }).map((_, i) => <LoadingSkelton key={i} />)}
            </GridContainer>
        </>
    )
}