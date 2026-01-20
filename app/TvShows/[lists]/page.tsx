
import React from 'react';
import { AdvancedFilters, Empty, Heading, MotionItem, MoviesWrapper } from '../../components';
import { discoverTVShows, fetchGenres, fetchShowsLists } from '@/app/api';
import { MdOutlineLiveTv, MdTv } from 'react-icons/md';

export const metadata = {
  title: "Tv Shows Lists",
}
interface ParamsProps {
  params: Promise<{ lists: string }>;
  searchParams: Promise<{ page: number; genre?: string; year?: string; country?: string; language?: string }>;
}

async function movieListNum({ params, searchParams }: ParamsProps) {

  const listType = (await params)?.lists
  const pageNum = (await searchParams)?.page || 1
  const genre = (await searchParams)?.genre
  const year = (await searchParams)?.year
  const country = (await searchParams)?.country
  const language = (await searchParams)?.language
  
  // Use discover API if filters are applied or if it's AllShows
  const hasFilters = genre || year || country || language
  const useDiscover = listType === 'AllShows' || hasFilters
  
  const TvShows = useDiscover 
    ? [await discoverTVShows({ pageNum, genre, year, country, language })]
    : await fetchShowsLists({ listType, pageNum })
  
  const genres = useDiscover ? await fetchGenres({ type: 'tv' }) : { genres: [] }


  return (
    TvShows[0]?.success === false ? 
      <Empty 
        message='No TV Shows Found' 
        icon={<MdTv className="w-16 h-16 text-yellow-400" />}
        link="/TvShows/AllShows" 
        linkText="Explore All Shows" 
      /> :
      <>
        <MotionItem 
          initial={{ opacity: 0, y: -20 }} 
          animation={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading 
            icon={<MdOutlineLiveTv className='text-yellow-500 w-8 h-8' />} 
            className='text-red-100 px-2' 
            title={listType === 'AllShows' ? 'All Shows' : `${listType.split('_').join(' ')} Shows`} 
          />
        </MotionItem>

        {/* Advanced Filters - Only show for AllShows */}
        {listType === 'AllShows' && (
          <MotionItem 
            initial={{ opacity: 0, y: 20 }} 
            animation={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AdvancedFilters type="tv" genres={genres.genres || []} />
          </MotionItem>
        )}
        
        <MotionItem 
          initial={{ opacity: 0 }} 
          animation={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MoviesWrapper 
            isShow={true} 
            movies={TvShows[0]} 
            pageLink={`/TvShows/ShowDetails`}
            requestedPage={pageNum}
          />
        </MotionItem>
      </>
  )
}
export default movieListNum