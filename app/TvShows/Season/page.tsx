/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { CastDetails, CustomImg, DetailsLine, Empty, Episodes, GridContainer, Hr, MotionItem, Rating, Seasons } from '../../components';
import { fetchSeasonCast, fetchSeasonDetails, fetchShowDetails } from '@/app/api';

export const metadata = {
    title: "Show Season",
}

interface searchParamsProps {
    searchParams: Promise<{
        id: number;
        season: number;
    }>;

}

export default async function SeasonDetails({ searchParams }: searchParamsProps) {

    const ShowId = (await searchParams)?.id
    const seasonNum = (await searchParams)?.season

    const ShowDetails = await fetchShowDetails({ ShowId })
    const SeasonDetails = await fetchSeasonDetails({ ShowId, seasonNum })
    const Cast = await fetchSeasonCast({ ShowId, seasonNum })

    return <>

        {/* details */}
        <GridContainer className='bg-black/50 rounded-xl items-center justify-center md:grid-cols-3' cols={1}>
            <MotionItem initial={{ opacity: 0, x: -30 }} animation={{ opacity: 1, x: 0 }} className="md:col-span-1 items-center">
                <CustomImg imgSrc={SeasonDetails?.poster_path} />
            </MotionItem>
            <MotionItem animation={{ opacity: 1, y: 0 }} className="md:col-span-2 flex my-2 flex-col justify-center mb-4 gap-4 px-4">
                <h2 className="font-bold flex-initial text-3xl px-4 text-center text-yellow-400 my-2 pb-2">
                    {SeasonDetails?.name}
                </h2>

                <DetailsLine text="Rate" value={<Rating rate={SeasonDetails?.vote_average} />} />
                <DetailsLine text="Season" value={SeasonDetails?.season_number === 0 ?
                    <span className='italic px-2'>Unknown</span> : <span className='px-2'>{SeasonDetails?.season_number}</span>
                } />
                <DetailsLine text="Episodes" value={SeasonDetails?.episodes?.length === 0 ?
                    <span className='italic px-2'>Unknown</span> : <span className=' px-2'>{SeasonDetails?.episodes?.length}</span>
                } />
                <DetailsLine noLine text="Air Date" value={SeasonDetails?.air_date === "" ?
                    <span>Unknown</span> : <span className='px-2'>{SeasonDetails?.air_date}</span>
                } />

            </MotionItem>
        </GridContainer>

        <DetailsLine className="my-8 text-center justify-center items-start" text="Overview" value={ShowDetails.overview} />

        {/* Season Episodes */}
        <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} />
        <Hr />


        {/* season cast */}
        {Cast?.cast?.length === 0 && Cast?.crew?.length === 0 ? (<Empty message='No Cast To Show' />) : (
            <CastDetails Cast={Cast?.cast?.length !== 0 ? Cast.cast : Cast.crew} />
        )}
        <Hr />

        {/* All Seasons */}
        <Seasons ShowId={ShowId} ShowDetails={ShowDetails} withHr={false} />
    </>
}


