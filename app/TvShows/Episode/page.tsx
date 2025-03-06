import React from 'react'
import { CastDetails, CustomImg, DetailsLine, Empty, Episodes, GridContainer, Hr, MotionItem, Rating, Seasons } from '../../components';
import { fetchShowDetails, fetchSeasonDetails, fetchEpisodeDetails } from '@/app/api';
import VideoPlayer from '@/app/components/VideoPlayer';

export const metadata = {
    title: "Show Episode",
}

interface searchParamsProps {
    searchParams: Promise<{
        id: number;
        season: number;
        episode: number;
        show: boolean;
    }>;

}

async function EpisodeDetails({ searchParams }: searchParamsProps) {

    const ShowId = (await searchParams)?.id
    const seasonNum = (await searchParams)?.season
    const episodeNum = (await searchParams)?.episode
    const show = (await searchParams)?.show

    const ShowDetails = await fetchShowDetails({ ShowId })
    const EpisodeDetails = await fetchEpisodeDetails({ ShowId, seasonNum, episodeNum })
    const SeasonDetails = await fetchSeasonDetails({ ShowId, seasonNum })
    console.log(EpisodeDetails);


    return <>

        <GridContainer className='bg-black/50 rounded-xl items-center md:grid-cols-2' cols={1}>
            <MotionItem initial={{ opacity: 0, x: -30 }} animation={{ opacity: 1, x: 0 }} className="md:col-span-1 h-full w-full items-center">
                <CustomImg isWide={true} className='w-full h-96 object-contain rounded-lg' imgSrc={EpisodeDetails?.still_path} />
            </MotionItem>
            <MotionItem animation={{ opacity: 1, y: 0 }} className="md:col-span-1 flex my-4 flex-col gap-2 justify-center px-4">
                <h2 className="font-bold flex-initial text-3xl px-4 text-center text-yellow-400 pb-2 ">
                    {EpisodeDetails?.name}
                </h2>

                <DetailsLine text="Show" value={<h3 className='px-1 font-semibold'>{ShowDetails.name}</h3>} />
                <DetailsLine text="Season" value={EpisodeDetails?.season_number === 0 ?
                    <span className='italic px-2'>Unknown</span> : <span className='px-2'>{EpisodeDetails?.season_number}</span>
                } />
                <DetailsLine text="Episode" value={EpisodeDetails?.episode_number} />
                <DetailsLine text="Rate" value={<Rating rate={EpisodeDetails?.vote_average} />} />
                <DetailsLine text="Air Date" value={EpisodeDetails?.air_date === "" ?
                    <span>Unknown</span> : <span className='px-2'>{EpisodeDetails?.air_date}</span>
                } />
                <DetailsLine noLine text="Runtime" value={EpisodeDetails.runtime === null ?
                    <span>Unknown</span> :
                    <>
                        <span>{EpisodeDetails.runtime}</span>
                        <span className="text-red-300 ps-1"> mins </span>
                    </>} />

            </MotionItem>
        </GridContainer>

        <DetailsLine className="my-8 text-center justify-center items-start" text="Overview" value={ShowDetails.overview} />

        {/* Season Episodes */}
        <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} />
        <Hr />

        <VideoPlayer isShow={true} id={ShowDetails?.id} season={EpisodeDetails?.season_number} episode={EpisodeDetails?.episode_number} show={show} />

        <Hr />
        {/* season cast */}
        {EpisodeDetails?.guest_stars?.length === 0 ? (<Empty message='No Cast To Show' />) : (
            <CastDetails Cast={EpisodeDetails?.guest_stars} />
        )}
        <Hr />

        {/* All Seasons */}
        <Seasons ShowId={ShowId} ShowDetails={ShowDetails} withHr={false} />
    </>
}

export default EpisodeDetails