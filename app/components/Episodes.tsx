import Link from 'next/link'
import React from 'react'
import GridContainer from './defaults/GridContainer'
import CustomImg from './defaults/CustomImg'
import { EpisodeDetails, Season, SeasonEpisode } from '../types'
import Heading from './defaults/Heading'
import { Badge } from '@/components/ui/badge'

export default function Episodes({ SeasonDetails, ShowId, EpisodeDetails }: { SeasonDetails: Season, ShowId: number, EpisodeDetails?: EpisodeDetails }) {

    return <>
        <Heading center title={`Season ${SeasonDetails.season_number} Episodes`} />
        <GridContainer className='my-8 items-stretch gap-4 p-6 glass-dark rounded-2xl overflow-auto max-h-[80vh] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-xl' cols={1}>
            {SeasonDetails?.episodes?.map((episode: SeasonEpisode) =>
                <Link 
                    key={episode.episode_number} 
                    className='group block transition-transform duration-300 hover:-translate-y-2' 
                    href={`Episode/?id=${ShowId}&season=${SeasonDetails.season_number}&episode=${episode.episode_number}`}
                >
                    <div className='relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-500/50 transition-all duration-500 h-full flex flex-col'>
                        <div className='relative aspect-video overflow-hidden'>
                            <CustomImg 
                                isWide={true} 
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                imgSrc={episode.still_path} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                            
                            {/* Episode number badge */}
                            <div className="absolute top-3 right-3">
                                <Badge className="w-10 h-10 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold shadow-lg flex items-center justify-center border-2 border-white/20">
                                    {episode.episode_number}
                                </Badge>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-gray-900/90 backdrop-blur-sm flex-1 flex flex-col justify-center">
                            <h4 className='text-sm font-semibold text-gray-100 group-hover:text-fuchsia-400 transition-colors duration-300 line-clamp-2 text-center'>
                                {episode.name}
                            </h4>
                            {episode.air_date && (
                                <p className="text-xs text-gray-400 mt-2 text-center">{episode.air_date}</p>
                            )}
                        </div>
                    </div>
                </Link>
            )}
        </GridContainer>
    </>
}