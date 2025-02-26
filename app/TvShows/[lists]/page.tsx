
import React from 'react';
import { Heading, MoviesWrapper } from '../../components';
import { fetchShowsLists } from '@/app/api';
import { MdOutlineLiveTv } from 'react-icons/md';

export const metadata = {
  title: "Tv Shows Lists",
}
interface ParamsProps {
  params: { lists: string },
  searchParams: { page: number }
}

async function movieListNum({ params, searchParams }: ParamsProps) {

  const listType = params?.lists
  const pageNum = (searchParams?.page > 500) ? 500 : searchParams?.page || 1


  const TvShows = await fetchShowsLists({ listType, pageNum })
  console.log(params, searchParams);


  return <>
    <Heading icon={<MdOutlineLiveTv className='text-yellow-500 w-8 h-8' />} className='text-red-100 px-2' title={listType === 'AllShows' ? 'All Shows' : `${listType.split('_').join(' ')} Shows`} />
    <MoviesWrapper
      isShow={true}
      show=""
      movies={TvShows[0]}
      pageLink={` /TvShows/ShowDetails`}
      pageNavLink={`/TvShows/${listType}`}
      totalPages={TvShows[0].total_pages}
      pageNum={pageNum}
    />
  </>
}
export default movieListNum