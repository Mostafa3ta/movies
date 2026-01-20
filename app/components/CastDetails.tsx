import React from 'react'
import CustomImg from './defaults/CustomImg'
import GridContainer from './defaults/GridContainer'
import { CastMember, CrewMember } from '../types'
import Heading from './defaults/Heading'
import Link from 'next/link'

export default function CastDetails({ Cast }: { Cast: CastMember[] | CrewMember[] }) {
    return (
        <div className="my-12">
            <Heading center title="Cast & Crew" />
            <GridContainer 
                className='my-8 items-stretch gap-6 p-8 glass-dark rounded-3xl overflow-auto max-h-[80vh] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 shadow-2xl border border-gray-700/30' 
                cols={2}
            >
                {Cast?.map((actor: CastMember | CrewMember, i) =>
                    <Link
                        key={i}
                        href={`/Stars/PersonDetails/?id=${actor.id}`}
                        className='group flex flex-col h-full transition-all duration-500 hover:-translate-y-3'
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-fuchsia-500/50 transition-all duration-500">
                            <div className="relative aspect-[2/3] w-full">
                                <CustomImg 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                    imgSrc={actor.profile_path} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Info overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-0 transition-transform duration-500">
                                <div className="text-center space-y-1">
                                    <h4 className='text-sm font-bold text-white group-hover:text-fuchsia-400 transition-colors duration-300 line-clamp-2'>
                                        {actor.name}
                                    </h4>
                                    {'character' in actor && (
                                        <p className='text-xs font-medium text-gray-300 line-clamp-2'>
                                            as {actor.character}
                                        </p>
                                    )}
                                    {'job' in actor && (
                                        <p className='text-xs font-medium text-gray-300'>
                                            {actor.job}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </GridContainer>
        </div>
    )
}
