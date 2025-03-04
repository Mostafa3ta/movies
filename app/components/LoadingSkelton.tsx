import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingSkelton({ circle }: { circle?: boolean }) {
    return (<>
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-96 w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 mx-auto w-[150px]" />
            </div>
        </div>
    </>
    )
}

