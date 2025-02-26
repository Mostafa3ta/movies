import React from 'react'
import Hr from './Hr'

export default function DetailsLine({ text, value, noLine, className }: { text: string, value: any, noLine?: boolean, className?: string }) {
    return (<>
        <div className={`flex text-lg flex-wrap gap-1 ${className || "md:items-center px-8"}`}>
            <span className="text-yellow-400 font-semibold text-">{text} :</span>
            <span className='w-2/3 text-base italic'>{value}</span>
        </div>
        {!noLine && <Hr />}
    </>)
}
