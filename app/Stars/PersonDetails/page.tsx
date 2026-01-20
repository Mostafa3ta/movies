import React from 'react'
import { fetchPersonDetails, fetchPersonCombinedCredits, fetchPersonImages } from '@/app/api'
import { CustomImg, DetailsLine, Empty, GridContainer, MotionItem, MovieCard } from '@/app/components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TbMovie } from 'react-icons/tb'
import { MdOutlineLiveTv } from 'react-icons/md'
import { FaUserSlash } from 'react-icons/fa'
import { RiCake2Line, RiCalendarLine } from 'react-icons/ri'

export const metadata = {
    title: "Person Details",
}

interface ParamsProps {
    searchParams: Promise<{ id: number }>
}

async function PersonDetails({ searchParams }: ParamsProps) {
    const personId = (await searchParams)?.id
    
    // Fetch all data in parallel to avoid sequential loading
    const [personDetails, credits, images] = await Promise.all([
        fetchPersonDetails({ personId }),
        fetchPersonCombinedCredits({ personId }),
        fetchPersonImages({ personId })
    ]);

    if (personDetails?.success === false) {
        return <Empty message='Person Not Found' icon={<FaUserSlash className="w-16 h-16 text-purple-400" />} link="/search" linkText="Search Again" />
    }

    // Calculate age
    let age = null
    if (personDetails.birthday) {
        const birthDate = new Date(personDetails.birthday)
        const endDate = personDetails.deathday ? new Date(personDetails.deathday) : new Date()
        age = endDate.getFullYear() - birthDate.getFullYear()
        const monthDiff = endDate.getMonth() - birthDate.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < birthDate.getDate())) {
            age--
        }
    }

    // Separate and sort credits
    const movies = credits?.cast?.filter((item: any) => item.media_type === 'movie')
        .sort((a: any, b: any) => (b.popularity || 0) - (a.popularity || 0)) || []
    
    const tvShows = credits?.cast?.filter((item: any) => item.media_type === 'tv')
        .sort((a: any, b: any) => (b.popularity || 0) - (a.popularity || 0)) || []

    const allCredits = [...movies, ...tvShows]

    return (
        <>
            {/* Hero Section */}
            <div className="relative mb-12">
                <GridContainer className='glass-dark rounded-3xl items-center md:grid-cols-3 shadow-2xl shadow-fuchsia-500/20 p-8 gap-8 border border-gray-700/30' cols={1}>
                    <div className="flex justify-center items-center md:col-span-1">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <CustomImg
                                priority 
                                className='relative object-cover w-full rounded-2xl shadow-2xl' 
                                imgSrc={personDetails.profile_path} 
                            />
                        </div>
                    </div>
                    
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg py-1">
                            {personDetails.name}
                        </h1>

                        <div className="space-y-3 md:space-y-4">
                            {personDetails.known_for_department && (
                                <DetailsLine 
                                    text="Known For" 
                                    value={<span className="font-semibold text-lg">{personDetails.known_for_department}</span>} 
                                />
                            )}

                            {personDetails.birthday && (
                                <DetailsLine 
                                    text="Birthday" 
                                    value={<span>{personDetails.birthday}</span>} 
                                />
                            )}

                            {age && (
                                <DetailsLine 
                                    text="Age" 
                                    value={
                                        <span className="font-semibold">
                                            {age} years{personDetails.deathday ? ' old at death' : ' old'}
                                        </span>
                                    } 
                                />
                            )}

                            {personDetails.deathday && (
                                <DetailsLine 
                                    text="Date of Death" 
                                    value={
                                        <span className="text-red-400 font-semibold flex items-center gap-2">
                                            † {personDetails.deathday}
                                        </span>
                                    } 
                                />
                            )}

                            {personDetails.place_of_birth && (
                                <DetailsLine 
                                    text="Place of Birth" 
                                    value={<span>{personDetails.place_of_birth}</span>} 
                                />
                            )}

                            {personDetails.also_known_as && personDetails.also_known_as.length > 0 && (
                                <DetailsLine 
                                    noLine
                                    text="Also Known As" 
                                    value={<span>{personDetails.also_known_as.slice(0, 3).join(', ')}</span>} 
                                />
                            )}
                        </div>
                    </div>
                </GridContainer>
            </div>

            {/* Biography */}
            {personDetails.biography && (
                <div className="my-12 glass-dark rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Biography</h2>
                    <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">{personDetails.biography}</p>
                </div>
            )}

            {/* Filmography */}
            <div className="my-12">
                <h2 className="text-3xl font-bold text-fuchsia-400 mb-6">Filmography</h2>
                
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="glass-dark border border-gray-700/50 p-1.5 mb-8 flex-wrap h-auto w-full justify-start">
                        <TabsTrigger 
                            value="all" 
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all"
                        >
                            All ({allCredits.length})
                        </TabsTrigger>
                        <TabsTrigger 
                            value="movies"
                            disabled={movies.length === 0}
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
                        >
                            <TbMovie className="w-6 h-6 font-bold" />
                            <span className="hidden sm:inline">Movies</span>
                            <span>({movies.length})</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="tv"
                            disabled={tvShows.length === 0}
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-500 data-[state=active]:text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale"
                        >
                            <MdOutlineLiveTv className="w-6 h-6 font-bold" />
                            <span className="hidden sm:inline">TV Shows</span>
                            <span>({tvShows.length})</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {allCredits.length === 0 ? (
                            <Empty message="No credits found" />
                        ) : (
                            <GridContainer cols={2} className='gap-4 gap-y-7 md:grid-cols-3 xl:grid-cols-5'>
                            {allCredits.map((item: any, index: number) => (
                                <MovieCard
                                    key={`${item.id}-${item.media_type}-${index}`}
                                    isSearch={true}
                                    show={item.media_type === 'tv'}
                                    movie={item}
                                    pageLink={item.media_type === 'movie' ? '/Movies/MovieDetails' : '/TvShows/ShowDetails'}
                                />
                            ))}
                            </GridContainer>
                        )}
                    </TabsContent>

                    <TabsContent value="movies">
                        {movies.length === 0 ? (
                            <Empty message="No movies found" icon={<TbMovie className="w-16 h-16 text-red-400" />} />
                        ) : (
                            <GridContainer cols={2} className='gap-4 gap-y-7 md:grid-cols-3 xl:grid-cols-5'>
                            {movies.map((movie: any, index: number) => (
                                <MovieCard
                                    key={`movie-${movie.id}-${index}`}
                                    isSearch={true}
                                    show={false}
                                    movie={movie}
                                    pageLink='/Movies/MovieDetails'
                                />
                            ))}
                            </GridContainer>
                        )}
                    </TabsContent>

                    <TabsContent value="tv">
                        {tvShows.length === 0 ? (
                            <Empty message="No TV shows found" icon={<MdOutlineLiveTv className="w-16 h-16 text-yellow-400" />} />
                        ) : (
                            <GridContainer cols={2} className='gap-4 gap-y-7 md:grid-cols-3 xl:grid-cols-5'>
                            {tvShows.map((show: any, index: number) => (
                                <MovieCard
                                    key={`tv-${show.id}-${index}`}
                                    isSearch={true}
                                    show={true}
                                    movie={show}
                                    pageLink='/TvShows/ShowDetails'
                                />
                            ))}
                            </GridContainer>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default PersonDetails
