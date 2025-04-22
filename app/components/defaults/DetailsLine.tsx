import React from 'react'
import Hr from './Hr'

export default function DetailsLine({ text, value, noLine, className, overView }: { text: string, value: any, noLine?: boolean, className?: string, overView?: boolean }) {
    return (<>
        <div className={`flex md:text-lg text-base flex-wrap gap-1 ${className || "items-center px-4 sm:px-8"}`}>
            <span className="text-yellow-400 font-semibold text-">{text} :</span>
            <span className={` text-base italic w-fit`}>{value}</span>
        </div>
        {!noLine && <Hr />}
    </>)
}
