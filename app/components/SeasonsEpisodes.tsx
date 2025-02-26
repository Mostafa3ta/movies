import React from 'react'

export default function SeasonsEpisodes({ text, value }: { text: string, value: any }) {
    return (
        <div className='flex gap-1 items-center'>
            <h4 className='text-white italic'>{text}</h4>
            <p className='font-semibold'>{`${value}`}</p>
        </div>
    )
}
