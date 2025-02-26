import Image from 'next/image'
import React from 'react'
import { imgBaseUrl } from '../constants'
import CustomImg from './defaults/CustomImg'
import GridContainer from './defaults/GridContainer'
import { CastMember, Credits, CrewMember } from '../types'

export default function CastDetails({ Cast }: { Cast: CastMember[] | CrewMember[] }) {
    return <>
        {/* {castType.length === 0 ? <>      */}
        <GridContainer className='my-8 lg:mx-8 mx-2 items-center justify-center bg-black/40 rounded-xl overflow-auto h-[80vh] sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 customScrollBar ' cols={2}>
            {Cast?.map((actor: CastMember | CrewMember, i) =>
                <div className='flex flex-col my-2 items-center justify-start text-center' key={i}>
                    <CustomImg className='w-32 object-contain h-full rounded-xl mb-3' imgSrc={actor.profile_path} />
                    <span className='line-clamp-1 text-yellow-400'>{actor.name}</span>
                    {'character' in actor && (<span className='font-semibold line-clamp-1 text-white'>{actor.character}</span>)}
                    {'job' in actor && (<span className='font-semibold line-clamp-1 text-white'>{actor.job}</span>)}
                </div>
            )}
        </GridContainer>
        {/* </> : <>
            {castType.map((actor: any) =>
                <div className='col-lg-4 col-6 py-3 d-flex align-items-center flex-column'>
                    {actor.profile_path === null ?
                        <BlackImg imgType='actor' />
                        :
                        <CustomImg imgSrc={actor.profile_path} />
                    }
                    <span>{actor.name}</span>
                    <span className='text-warning'>{actor.character}</span>
                </div>
            )}
        </>} */}
    </>
}
