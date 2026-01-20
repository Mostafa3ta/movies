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

    return (
        !show ? null :
            <div className='my-12'>
                <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl border border-gray-700/30">
                    {/* Header */}
                    {title && (
                        <div className="bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-pink-600/20 p-6 border-b border-gray-700/50">
                            <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                                {title}
                            </h2>
                        </div>
                    )}
                    
                    {/* Video Container */}
                    <div className='relative w-full aspect-video bg-black'>
                        <iframe 
                            src={embedUrl}
                            className='absolute inset-0 w-full h-full border-none' 
                            referrerPolicy="origin" 
                            allowFullScreen
                            title="Video Player"
                        />
                    </div>
                    
                    {/* Footer Info */}
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 text-center">
                        <p className="text-sm text-gray-400">
                            {isShow ? `Season ${season} • Episode ${episode}` : 'Movie'}
                        </p>
                    </div>
                </div>
            </div>
    )
}
