
import React from 'react';
import { Heading, MoviesWrapper } from '../../components';
import { fetchGeneres, fetchShowsLists } from '@/app/api';
import { MdOutlineLiveTv } from 'react-icons/md';

export const metadata = {
  title: "Tv Shows Lists",
}
interface ParamsProps {
  params: Promise<{ lists: string }>;
  searchParams: Promise<{ page: number }>;
}

async function movieListNum({ params, searchParams }: ParamsProps) {

  const listType = (await params)?.lists
  const pageNum = ((await searchParams)?.page > 500) ? 500 : (await searchParams)?.page || 1
  const TvShows = await fetchShowsLists({ listType, pageNum })
  const genres = await fetchGeneres({ Type: 'tv' })


  // console.log(params, searchParams);


  return <>
    <Heading icon={<MdOutlineLiveTv className='text-yellow-500 w-8 h-8' />} className='text-red-100 px-2' title={listType === 'AllShows' ? 'All Shows' : `${listType.split('_').join(' ')} Shows`} />
    <MoviesWrapper isShow={true} movies={TvShows[0]} pageLink={`/TvShows/ShowDetails`}
    />
  </>
}
export default movieListNum