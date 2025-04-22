import React from 'react'
import { fetchMovieDetails, fetchMovieCast, fetchMovieRecommend, fetchMovieSimilar } from '@/app/api';
import { CastDetails, CustomImg, DetailsLine, Empty, GridContainer, Hr, MotionItem, Rating, Similar } from '@/app/components';
import VideoPlayer from '@/app/components/VideoPlayer';

export const metadata = {
    title: "Movie Details",
}

interface searchParamsProps {
    searchParams: Promise<{
        id: number;
        show: boolean;
    }>;
}

async function MovieDetails({ searchParams }: searchParamsProps) {

    const MovieID = (await searchParams)?.id
    const show = (await searchParams)?.show

    const movieDetails = await fetchMovieDetails({ MovieID })
    const Cast = await fetchMovieCast({ MovieID })
    const Recommend = await fetchMovieRecommend({ MovieID })
    const Simi = await fetchMovieSimilar({ MovieID })
    console.log(movieDetails);
    


    return (

        movieDetails?.success === false ? <Empty message='Sorry, There is No Movie With This ID' link="/Movies/AllMovies" linkText="Explore Other Movies" /> :

            <>
                <GridContainer className='bg-black/50 rounded-xl items-center md:grid-cols-3' cols={1}>
                    <MotionItem initial={{ opacity: 0, x: -30 }} animation={{ opacity: 1, x: 0 }} className="flex justify-center  items-center md:col-span-1">
                        <CustomImg className='object-contain mx-auto w-full h-96 md:h-full rounded-md' imgSrc={movieDetails.poster_path} />
                    </MotionItem>
                    <MotionItem animation={{ opacity: 1, y: 0 }} className="md:col-span-2 flex flex-col gap-3 px-4">
                        <h2 className="font-bold text-3xl px-4 text-center text-yellow-400 my-6 pb-2">
                            {movieDetails.title}
                        </h2>

                        <DetailsLine text="Generes" value={movieDetails.genres?.map((gener: any) => (
                            <span className="px-1" key={gener.id}>
                                {gener.name}
                            </span>
                        ))
                        } />
                        <DetailsLine text="Rate" value={<Rating rate={movieDetails.vote_average} />} />
                        <DetailsLine text="Status" value={movieDetails.status} />
                        <DetailsLine text="Languages" value={movieDetails.spoken_languages.map((lang: any) => (
                            <span className="px-1" key={lang.iso_639_1}>
                                {lang.name}
                            </span>
                        ))} />
                        <DetailsLine text="Countries" value={movieDetails.production_countries.map((country: any) => (
                            <span className="px-1" key={country.iso_3166_1}>
                                {country.name}
                            </span>
                        ))} />
                        <DetailsLine text="Release" value={movieDetails.release_date} />
                        <DetailsLine className='mb-4 items-center px-2 sm:px-8' noLine text="Runtime" value={<>
                            <span>{movieDetails.runtime}</span>
                            <span className="text-red-300 ps-1"> mins </span>
                        </>} />

                    </MotionItem>
                </GridContainer>

                <DetailsLine className="my-8 text-center justify-center items-start" text="Overview" value={movieDetails.overview} />

                {/* Cast */}
                {Cast.cast.length === 0 && Cast.crew.length === 0 ? (<Empty message='No Cast To Show' />) : (
                    <CastDetails Cast={Cast.cast.length !== 0 ? Cast.cast : Cast.crew} />
                )}
                <Hr />

                <VideoPlayer id={movieDetails.id} show={show} />
                <Hr />

                {/* Similar Movies */}
                {Simi.results.length === 0 && Recommend.results.length === 0 ? (<Empty message="No Similar Movies To Show" />) : (
                    <Similar
                        Recommend={Recommend?.results?.length !== 0 ? Recommend : Simi}
                        detailsLink={`/Movies/MovieDetails`}
                    />
                )}
            </>
    )
}

export default MovieDetails