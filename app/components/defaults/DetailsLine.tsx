import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function DetailsLine({ text, value, noLine, className, overView }: { text: string, value: any, noLine?: boolean, className?: string, overView?: boolean }) {
    return (<>
        <div className={`flex text-sm sm:text-base flex-wrap gap-2 items-center ${className || "px-4 sm:px-6"}`}>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-500/30 text-fuchsia-300 font-semibold text-sm backdrop-blur-sm">{text}</span>
            <span className="text-gray-200 flex-1">{value}</span>
        </div>
        {!noLine && <Separator className="my-3 bg-gray-700/30" />}
    </>)
}
