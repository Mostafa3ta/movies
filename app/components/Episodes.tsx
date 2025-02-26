import Link from 'next/link'
import React from 'react'
import GridContainer from './defaults/GridContainer'
import CustomImg from './defaults/CustomImg'
import { Season, SeasonEpisode } from '../types'
import Heading from './defaults/Heading'

export default function Episodes({ SeasonDetails, ShowId, EpisodeDetails }: { SeasonDetails: Season, ShowId: number, EpisodeDetails?: any }) {

    return <>
        <Heading center title={`Season ${SeasonDetails.season_number} Episodes`} />
        <GridContainer className='my-8 items-center gap-4 mx-8 p-4 bg-black/40 rounded-xl overflow-auto h-[90vh] customScrollBar md:grid-cols-3 lg:grid-cols-4' cols={2}>
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

// {SeasonDetails.episodes.length === 0 ? (
//     <div className="container">
//         <div className="flex my-2">
//             <h2 className="ml-4 py-2">
//                 {/* <i className="fa-solid fa-angles-right fs-4"></i> */}
//                 Season{' '}
//                 <span className="text-warning">{SeasonDetails.season_number}</span>{' '}
//                 Episodes :
//             </h2>
//             <h3 className="italic ml-4 mt-3">No Episodes To Show</h3>
//         </div>
//     </div>
// ) : (
//     <>
//         <div className="container row justify-center">
//             <div className="flex my-4">
//                 <h2 className="ml-4 py-2">
//                     {/* <i className="fa-solid fa-angles-right fs-4"></i>{' '} */}
//                     {SeasonDetails.name} Episodes :
//                 </h2>
//             </div>

//             {SeasonDetails.episodes.length > 25 ? (
//                 <div className="col-lg-8 col-10 rounded-4 cast-contain">
//                     <div className="flex items-center">
//                         {SeasonDetails.episodes.map((episode: any) => (
//                             <div
//                                 className="col-lg-3 col-md-4 col-6 my-2"
//                                 key={episode.episode_number}
//                             >
//                                 <Link
//                                     href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}
//                                 >
//                                     <div className="flex items-center flex-col img-content">
//                                         {episode.episode_number === EpisodeDetails?.episode_number ? (
//                                             <>
//                                                 {episode.still_path === null ? (
//                                                     <img
//                                                         src="/download4.jpg"
//                                                         className="w-full m-2 rounded-2"
//                                                         alt="poster"
//                                                     />
//                                                 ) : (
//                                                     <img
//                                                         src={imgBaseUrl + episode.still_path}
//                                                         className="w-full m-2 rounded-2"
//                                                         alt="poster"
//                                                     />
//                                                 )}
//                                                 <span className="text-warning text-sm font-bold">
//                                                     Episode {episode.episode_number}
//                                                 </span>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 {episode.still_path === null ? (
//                                                     <img
//                                                         src="/download4.jpg"
//                                                         className="w-full m-2 rounded-2"
//                                                         alt="poster"
//                                                     />
//                                                 ) : (
//                                                     <img
//                                                         src={imgBaseUrl + episode.still_path}
//                                                         className="w-full m-2 rounded-2"
//                                                         alt="poster"
//                                                     />
//                                                 )}
//                                                 <span>Episode {episode.episode_number}</span>
//                                             </>
//                                         )}
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 <div className="row items-center text-center ml-2">
//                     {SeasonDetails.episodes.map((episode: any) => (
//                         <div
//                             className="col-md-3 col-sm-4 col-6 my-2"
//                             key={episode.episode_number}
//                         >
//                             <Link
//                                 href={`/TvShows/Season/${ShowId}/${SeasonDetails.season_number}/${episode.episode_number}`}
//                             >
//                                 <div className="flex items-center flex-col img-content">
//                                     {episode.episode_number === EpisodeDetails?.episode_number ? (
//                                         <>
//                                             {episode.still_path === null ? (
//                                                 <img
//                                                     src="/download4.jpg"
//                                                     className="w-full m-2 rounded-2"
//                                                     alt="poster"
//                                                 />
//                                             ) : (
//                                                 <img
//                                                     src={imgBaseUrl + episode.still_path}
//                                                     className="w-full m-2 rounded-2"
//                                                     alt="poster"
//                                                 />
//                                             )}
//                                             <span className="text-warning text-sm font-bold">
//                                                 Episode {episode.episode_number}
//                                             </span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {episode.still_path === null ? (
//                                                 <img
//                                                     src="/download4.jpg"
//                                                     className="w-full m-2 rounded-2"
//                                                     alt="poster"
//                                                 />
//                                             ) : (
//                                                 <img
//                                                     src={imgBaseUrl + episode.still_path}
//                                                     className="w-full m-2 rounded-2"
//                                                     alt="poster"
//                                                 />
//                                             )}
//                                             <span>Episode {episode.episode_number}</span>
//                                         </>
//                                     )}
//                                 </div>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     </>
// )}