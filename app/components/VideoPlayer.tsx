import React from 'react'

interface VideoProps {
    id: number,
    season?: number,
    episode?: number,
    isShow?: boolean,
    title?: string,
    show: boolean
}

export default async function VideoPlayer({ id, isShow, title, show, season, episode }: VideoProps) {
    const embedUrl = isShow ? `https://vidsrc.xyz/embed/tv/${id}/${season}/${episode}` : `https://vidsrc.xyz/embed/movie/${id}`
    console.log(show);


    return (
        !show ? null :
            <div className='flex flex-col customScrollBar items-center p-4 my-4'>
                <h1 className='text-2xl font-bold mb-4'>{title}</h1>
                <div className='w-full overflow-y-hidden'>
                    <iframe src={embedUrl}
                        className='w-full h-[40vh] md:h-[80vh] overflow-y-hidden border-none rounded-lg' referrerPolicy="origin" allowFullScreen></iframe>
                </div>
            </div>
    )
}
