import Image from 'next/image'
import React from 'react'
import { imgBaseUrl } from '../constants'
import CustomImg from './defaults/CustomImg'
import GridContainer from './defaults/GridContainer'
import { CastMember, Credits, CrewMember } from '../types'
import Heading from './defaults/Heading'

export default function CastDetails({ Cast }: { Cast: CastMember[] | CrewMember[] }) {
    return <>
        <div className="my-3 mx-4 md:mx-8">
            <Heading center title="Cast" />
            <GridContainer className='mb-8 lg:mx-8  items-center justify-center bg-black/40 rounded-xl overflow-auto h-[80vh] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 customScrollBar ' cols={2}>
                {Cast?.map((actor: CastMember | CrewMember, i) =>
                    <div className='flex flex-col my-2 items-center justify-start text-center' key={i}>
                        <CustomImg className='w-32 object-contain h-full rounded-xl mb-3' imgSrc={actor.profile_path} />
                        <span className='line-clamp-1 text-yellow-400'>{actor.name}</span>
                        {'character' in actor && (<span className='font-semibold line-clamp-1 text-white'>{actor.character}</span>)}
                        {'job' in actor && (<span className='font-semibold line-clamp-1 text-white'>{actor.job}</span>)}
                    </div>
                )}
            </GridContainer>
        </div>
    </>
}
