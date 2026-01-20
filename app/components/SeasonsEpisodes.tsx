import React from 'react'
import { Badge } from '@/components/ui/badge'

export default function SeasonsEpisodes({ text, value }: { text: string, value: any }) {
    return (
        <div className='flex gap-2 items-center'>
            <span className='text-gray-300 text-sm font-medium'>{text}</span>
            <Badge variant="secondary" className="bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-600/30">
                {value}
            </Badge>
        </div>
    )
}
