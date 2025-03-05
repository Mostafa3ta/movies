import Link from 'next/link'
import React from 'react'
import GridContainer from './defaults/GridContainer'
import CustomImg from './defaults/CustomImg'
import { EpisodeDetails, Season, SeasonEpisode } from '../types'
import Heading from './defaults/Heading'

export default function Episodes({ SeasonDetails, ShowId, EpisodeDetails }: { SeasonDetails: Season, ShowId: number, EpisodeDetails?: EpisodeDetails }) {

    return <>
        <Heading center title={`Season ${SeasonDetails.season_number} Episodes`} />
        <GridContainer className='my-8 items-center gap-4 mx-8 p-4 bg-black/40 rounded-xl overflow-auto max-h-[80vh] customScrollBar md:grid-cols-3 lg:grid-cols-4' cols={2}>
            {SeasonDetails?.episodes?.map((episode: SeasonEpisode) =>
                <Link key={episode.episode_number} className='flex flex-col my-2 items-center text-center group' href={`Episode/?id=${ShowId}&season=${SeasonDetails.season_number}&episode=${episode.episode_number}`}>
                    <div className='flex w-full relative overflow-hidden flex-col items-center'>
                        <CustomImg isWide={true} className='w-full h-full object-contain duration-200 group-hover:scale-110 z-10 rounded-md mb-4' imgSrc={episode.still_path} />
                    </div>
                    <h4 className='duration-200 group-hover:text-fuchsia-400 font-semibold'>{episode.name} <span className='px-1 font-normal'>({episode.episode_number})</span></h4>
                </Link>
            )}
        </GridContainer>

    </>
}