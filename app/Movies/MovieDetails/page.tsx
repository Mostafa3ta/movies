import React from 'react'
import { fetchMovieDetails, fetchMovieCast, fetchMovieRecommend, fetchMovieSimilar } from '@/app/api';
import { CastDetails, CustomImg, DetailsLine, Empty, GridContainer, MotionItem, Rating, Similar } from '@/app/components';
import VideoPlayer from '@/app/components/VideoPlayer';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MdMovie, MdPeopleAlt, MdMovieFilter } from 'react-icons/md'

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

    // Fetch all data in parallel to avoid sequential loading
    const [movieDetails, Cast, Recommend, Simi] = await Promise.all([
        fetchMovieDetails({ MovieID }),
        fetchMovieCast({ MovieID }),
        fetchMovieRecommend({ MovieID }),
        fetchMovieSimilar({ MovieID })
    ]);

    return (

        movieDetails?.success === false ? <Empty message='Movie Not Found' icon={<MdMovie className="w-16 h-16 text-red-400" />} link="/Movies/AllMovies" linkText="Explore All Movies" /> :

            <>
                {/* Hero Section */}
                <div className="relative mb-8 md:mb-12">
                    <GridContainer className='glass-dark rounded-2xl md:rounded-3xl items-center md:grid-cols-3 shadow-2xl shadow-fuchsia-500/20 p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 border border-gray-700/30' cols={1}>
                        <MotionItem 
                            initial={{ opacity: 0, x: -30 }} 
                            animation={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center items-center md:col-span-1"
                        >
                            <div className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <CustomImg priority className='relative object-cover w-full aspect-[2/3] md:h-[500px] md:aspect-auto rounded-2xl shadow-2xl' imgSrc={movieDetails.poster_path} />
                            </div>
                        </MotionItem>
                        
                        <MotionItem 
                            animation={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:col-span-2 flex flex-col gap-4 md:gap-6"
                        >
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-1 text-center md:text-left bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                                {movieDetails.title}
                            </h1>

                            <div className="space-y-3 md:space-y-4">
                                <DetailsLine text="Genres" value={movieDetails.genres?.map((gener: any) => (
                                    <Badge key={gener.id} className="mx-0.5 sm:mx-1 my-0.5 sm:my-1 bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 text-gray-100 border-white/20 hover:from-fuchsia-500/80 hover:to-purple-500/80">
                                        {gener.name}
                                    </Badge>
                                ))} />
                                <DetailsLine text="Rating" value={<Rating rate={movieDetails.vote_average} />} />
                                <DetailsLine text="Status" value={<span className="font-semibold text-green-400">{movieDetails.status}</span>} />
                                <DetailsLine text="Languages" value={movieDetails.spoken_languages.map((lang: any) => (
                                    <span className="px-2" key={lang.iso_639_1}>{lang.name}</span>
                                ))} />
                                <DetailsLine text="Countries" value={movieDetails.production_countries.map((country: any) => (
                                    <span className="px-2" key={country.iso_3166_1}>{country.name}</span>
                                ))} />
                                <DetailsLine text="Release Date" value={<span className="font-semibold">{movieDetails.release_date}</span>} />
                                <DetailsLine 
                                    noLine 
                                    text="Runtime" 
                                    value={<span className="font-semibold">{movieDetails.runtime} <span className="text-fuchsia-400">mins</span></span>} 
                                />
                            </div>
                        </MotionItem>
                    </GridContainer>
                </div>

                {/* Overview Section */}
                <MotionItem 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="my-8 md:my-12 glass-dark rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-400 mb-3 md:mb-4">Overview</h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{movieDetails.overview}</p>
                </MotionItem>

                {/* Cast */}
                {Cast.cast.length === 0 && Cast.crew.length === 0 ? (<Empty message='No Cast Information' icon={<MdPeopleAlt className="w-16 h-16 text-blue-400" />} />) : (
                    <CastDetails Cast={Cast.cast.length !== 0 ? Cast.cast : Cast.crew} />
                )}
                <Separator className="my-12 bg-gray-700/20" />

                <VideoPlayer id={movieDetails.id} show={show} />
                <Separator className="my-12 bg-gray-700/20" />

                {/* Show empty message only if both are empty */}
                {Simi.results.length === 0 && Recommend.results.length === 0 ? (
                    <Empty message="No Recommendations Available" icon={<MdMovieFilter className="w-16 h-16 text-gray-400" />} />
                ) : (
                    <>
                        {/* Recommended Movies */}
                        {Recommend.results.length > 0 && (
                            <>
                                <Similar
                                    title="Recommended"
                                    Recommend={Recommend}
                                    detailsLink={`/Movies/MovieDetails`}
                                />
                                {Simi.results.length > 0 && <Separator className="my-12 bg-gray-700/20" />}
                            </>
                        )}

                        {/* Similar Movies */}
                        {Simi.results.length > 0 && (
                            <Similar
                                title="Similar"
                                Recommend={Simi}
                                detailsLink={`/Movies/MovieDetails`}
                            />
                        )}
                    </>
                )}
            </>
    )
}

export default MovieDetails