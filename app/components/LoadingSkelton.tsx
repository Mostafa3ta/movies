import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingSkelton({ circle }: { circle?: boolean }) {
    return (<>
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-96 w-full rounded-xl" />
            <div className="space-y-2">
                {/* <Skeleton className="h-4 w-[250px]" /> */}
                <Skeleton className="h-4 mx-auto w-[150px]" />
            </div>
        </div>
    </>
    )
}

{/*         <div className="flex flex-col space-y-3">
            {circle && <Skeleton className="h-12 w-12 rounded-full" />}
            <Skeleton className="h-96 w-[250px] rounded-xl" />
            <div className=" space-y-2">
                {/* <Skeleton className="h-4 w-[250px]" /> */}
{/* <Skeleton className="h-4 w-[200px]" />
            </div >
        </div > */}

