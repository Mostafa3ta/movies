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
    const embedUrl = isShow ? `https://vidsrc.icu/embed/tv/${id}/${season}/${episode}` : `https://vidsrc.icu/embed/movie/${id}`
    console.log(show);


    return (
        !show ? null :
            <div className='flex flex-col customScrollBar items-center p-4 my-4'>
                <h1 className='text-2xl font-bold mb-4'>{title}</h1>
                <div className='w-full overflow-y-hidden max-w-[80%]'>
                    <iframe src={embedUrl}
                        className='w-full h-[80vh] overflow-y-hidden border-none rounded-lg' referrerPolicy="origin" allowFullScreen></iframe>
                </div>
            </div>
    )
}
