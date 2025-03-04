/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { fetchShowCast, fetchShowDetails, fetchShowRecommend, fetchShowSimilar } from '@/app/api';
import { CastDetails, CustomImg, DetailsLine, Empty, GridContainer, Hr, MotionItem, Rating, Seasons, Similar } from '@/app/components';
import { Credits,  TVShowDetails, TVShowResponse } from '@/app/types';

export const metadata = {
    title: "Tv Show Details",
}

interface ParamsProps {
    searchParams: Promise<{ id: number }>
}

async function ShowDetails({ searchParams }: ParamsProps) {

    const ShowId: number = (await searchParams)?.id
    const ShowDetails: TVShowDetails = await fetchShowDetails({ ShowId })
    const Cast: Credits = await fetchShowCast({ ShowId })
    const Recommend: TVShowResponse = await fetchShowRecommend({ ShowId })
    const Simi: TVShowResponse = await fetchShowSimilar({ ShowId })

    return <>

            <GridContainer className='bg-black/50 rounded-xl items-center justify-center md:grid-cols-3' cols={1}>
                <MotionItem initial={{ opacity: 0, x: -30 }} animation={{ opacity: 1, x: 0 }} className="md:col-span-1 items-center">
                    <CustomImg imgSrc={ShowDetails.poster_path} />
                </MotionItem>
                <MotionItem animation={{ opacity: 1, y: 0 }} className="md:col-span-2 flex my-4 md:my-2 flex-col gap-3 sm:px-4">
                    <h2 className="font-bold text-3xl px-4 text-center text-yellow-400 my-2 pb-2">
                        {ShowDetails.name}
                    </h2>

                    <DetailsLine text="Generes" value={ShowDetails.genres?.map((gener: any) => (
                        <span className="px-1" key={gener.id}>
                            {gener.name}
                        </span>
                    ))
                    } />
                    <DetailsLine text="Rate" value={<Rating rate={ShowDetails.vote_average} />} />
                    <DetailsLine text="Status" value={ShowDetails.status} />
                    <DetailsLine text="Languages" value={ShowDetails.spoken_languages.map((lang: any) => (
                        <span className="px-1" key={lang.iso_639_1}>
                            {lang.name}
                        </span>
                    ))} />
                    <DetailsLine text="Countries" value={ShowDetails.production_countries.map((country: any) => (
                        <span className="px-1" key={country.iso_3166_1}>
                            {country.name}
                        </span>
                    ))} />
                    <DetailsLine text="Seasons" value={ShowDetails.number_of_seasons === 0 ?
                        <span className='italic px-2'>Unknown</span> : <span className=' px-2'>{ShowDetails.number_of_seasons}</span>
                    } />
                    <DetailsLine text="Episodes" value={ShowDetails.number_of_episodes === 0 ?
                        <span className='italic px-2'>Unknown</span> : <span className=' px-2'>{ShowDetails.number_of_episodes}</span>
                    } />
                    <DetailsLine text="First Air Date" value={ShowDetails.first_air_date === "" ?
                        <span>Unknown</span> : <span className='px-2'>{ShowDetails.first_air_date}</span>
                    } />
                    <DetailsLine noLine text="Last Air Date" value={ShowDetails.last_air_date === null ?
                        <span>TBD</span> : <span className='px-2'>{ShowDetails.last_air_date}</span>
                    } />

                </MotionItem>
            </GridContainer>

            <DetailsLine className="my-8 text-center md:flex flex-col justify-center items-center" text="Overview" value={ShowDetails.overview} />


            {/* Show Seasons */}
            <Seasons ShowId={ShowId} ShowDetails={ShowDetails} />


            {/* cast */}
            {Cast.cast.length === 0 && Cast.crew.length === 0 ? (<Empty message='No Cast To Show' />) : (
                    <CastDetails Cast={Cast.cast.length !== 0 ? Cast.cast : Cast.crew} />
            )}
            <Hr />

            {/*Similar Shows */}
                {Simi.results.length === 0 && Recommend.results.length === 0 ? (<Empty message="No Similar Shows To Show" />) : (
                    <>
                        <Similar showType={true} Recommend={Recommend?.results?.length !== 0 ? Recommend : Simi} detailsLink={`/TvShows/ShowDetails`} />
                    </>
                )}

    </>
}

export default ShowDetails