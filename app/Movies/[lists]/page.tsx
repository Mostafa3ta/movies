import React from 'react';
import { AdvancedFilters, Empty, Heading, MotionItem, MoviesWrapper } from '@/app/components';
import { discoverMovies, fetchGenres, fetchMoviesLists } from '@/app/api';
import { TbMovie } from 'react-icons/tb';
import { MdMovie } from 'react-icons/md';

export const metadata = {
    title: "Movies Lists",
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
    
    // Use discover API if filters are applied or if it's AllMovies
    const hasFilters = genre || year || country || language
    const useDiscover = listType === 'AllMovies' || hasFilters
    
    const movies = useDiscover 
        ? [await discoverMovies({ pageNum, genre, year, country, language })]
        : await fetchMoviesLists({ listType, pageNum })
    
    const genres = useDiscover ? await fetchGenres({ type: 'movie' }) : { genres: [] }

    return (
        movies[0]?.success === false ? 
            <Empty 
                message='No Movies Found' 
                icon={<MdMovie className="w-16 h-16 text-red-400" />}
                link="/Movies/AllMovies" 
                linkText="Explore All Movies" 
            /> :
            <>
                <MotionItem 
                    initial={{ opacity: 0, y: -20 }} 
                    animation={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading 
                        icon={<TbMovie className='text-red-500 md:w-8 md:h-8 w-6 h-6' />} 
                        className='text-red-100 md:px-2 px-1' 
                        title={listType === 'AllMovies' ? 'All Movies' : `${listType.split('_').join(' ')} Movies`} 
                    />
                </MotionItem>
                
                {/* Advanced Filters - Only show for AllMovies */}
                {listType === 'AllMovies' && (
                    <MotionItem 
                        initial={{ opacity: 0, y: 20 }} 
                        animation={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <AdvancedFilters type="movie" genres={genres.genres || []} />
                    </MotionItem>
                )}
                
                <MotionItem 
                    initial={{ opacity: 0 }} 
                    animation={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <MoviesWrapper 
                        isShow={false} 
                        movies={movies[0]} 
                        pageLink={`/Movies/MovieDetails`}
                        requestedPage={pageNum}
                    />
                </MotionItem>
            </>
    )
}
export default movieListNum