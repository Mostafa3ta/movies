import React from 'react'
import { CastDetails, CustomImg, DetailsLine, Empty, Episodes, GridContainer, MotionItem, Rating, Seasons } from '../../components';
import { MdPeopleAlt } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
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

    // Fetch all data in parallel to avoid sequential loading
    const [ShowDetails, EpisodeDetails, SeasonDetails] = await Promise.all([
        fetchShowDetails({ ShowId }),
        fetchEpisodeDetails({ ShowId, seasonNum, episodeNum }),
        fetchSeasonDetails({ ShowId, seasonNum })
    ]);

    return <>
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
            <GridContainer className='glass-dark rounded-2xl md:rounded-3xl items-center md:grid-cols-2 shadow-2xl shadow-fuchsia-500/20 p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 border border-gray-700/30' cols={1}>
                <MotionItem 
                    initial={{ opacity: 0, x: -30 }} 
                    animation={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-1"
                >
                    <div className="relative group overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
                        <CustomImg
                            priority 
                            isWide={true} 
                            className='relative w-full h-full object-cover rounded-2xl shadow-2xl' 
                            imgSrc={EpisodeDetails?.still_path} 
                        />
                    </div>
                </MotionItem>
                
                <MotionItem 
                    animation={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-1 flex flex-col gap-4 md:gap-6"
                >
                    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg py-1.5">
                        {EpisodeDetails?.name}
                    </h1>

                    <div className="space-y-3 md:space-y-4">
                        <DetailsLine text="Show" value={
                            !ShowDetails.name || ShowDetails.name === "" ? (
                                <span className='italic text-gray-400'>Not Available</span>
                            ) : (
                                <h3 className='font-semibold text-gray-100'>{ShowDetails.name}</h3>
                            )
                        } />
                        <DetailsLine text="Season" value={
                            !EpisodeDetails?.season_number && EpisodeDetails?.season_number !== 0 ? (
                                <span className='italic text-gray-400'>Not Available</span>
                            ) : EpisodeDetails?.season_number === 0 ? 
                            <span className='italic text-gray-400'>Unknown</span> : 
                            <span className='font-semibold text-fuchsia-400'>{EpisodeDetails?.season_number}</span>
                        } />
                        <DetailsLine text="Episode" value={
                            !EpisodeDetails?.episode_number && EpisodeDetails?.episode_number !== 0 ? (
                                <span className='italic text-gray-400'>Not Available</span>
                            ) : (
                                <span className='font-semibold text-fuchsia-400'>{EpisodeDetails?.episode_number}</span>
                            )
                        } />
                        <DetailsLine text="Rating" value={<Rating rate={EpisodeDetails?.vote_average} />} />
                        <DetailsLine text="Air Date" value={
                            !EpisodeDetails?.air_date || EpisodeDetails?.air_date === "" ? 
                            <span className="italic text-gray-400">Not Available</span> : 
                            <span className="font-semibold">{EpisodeDetails?.air_date}</span>
                        } />
                        <DetailsLine 
                            noLine 
                            text="Runtime" 
                            value={
                                !EpisodeDetails.runtime || EpisodeDetails.runtime === null ? 
                                <span className="italic text-gray-400">Not Available</span> : 
                                <span className="font-semibold">{EpisodeDetails.runtime} <span className="text-fuchsia-400">mins</span></span>
                            } 
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
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {!ShowDetails.overview || ShowDetails.overview === "" ? (
                    <span className="italic text-gray-400">No overview available</span>
                ) : (
                    ShowDetails.overview
                )}
            </p>
        </MotionItem>

        {/* Season Episodes */}
        <Episodes SeasonDetails={SeasonDetails} ShowId={ShowId} />
        <Separator className="my-12 bg-gray-700/20" />

        {/* season cast */}
        {EpisodeDetails?.guest_stars?.length === 0 ? (<Empty message='No Guest Stars' icon={<MdPeopleAlt className="w-16 h-16 text-blue-400" />} />) : (
            <CastDetails Cast={EpisodeDetails?.guest_stars} />
        )}
        <Separator className="my-12 bg-gray-700/20" />

        <VideoPlayer isShow={true} id={ShowDetails?.id} season={EpisodeDetails?.season_number} episode={EpisodeDetails?.episode_number} show={show} />
        <Separator className="my-12 bg-gray-700/20" />

        {/* All Seasons */}
        <Seasons ShowId={ShowId} ShowDetails={ShowDetails} withHr={false} />
    </>
}

export default EpisodeDetails