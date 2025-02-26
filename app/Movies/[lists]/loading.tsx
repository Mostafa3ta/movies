import { GridContainer, Heading, LoadingSkelton } from '@/app/components'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (<>
        <Heading title={<Skeleton className="h-6 w-[200px] my-4" />} />
        <GridContainer cols={2} className='my-2 gap-4 md:grid-cols-3 xl:grid-cols-4 '>
            {Array.from({ length: 20 }).map((_, i) => <LoadingSkelton key={i} />)}
        </GridContainer>
    </>
    )
}