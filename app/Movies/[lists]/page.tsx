import React from 'react';
import { Empty, Heading, MoviesWrapper } from '@/app/components';
import { fetchMoviesLists } from '@/app/api';
import { TbMovie } from 'react-icons/tb';

export const metadata = {
    title: "Movies Lists",
}
interface ParamsProps {
    params: Promise<{ lists: string }>;
    searchParams: Promise<{ page: number }>;
}

async function movieListNum({ params, searchParams }: ParamsProps) {

    const listType = (await params)?.lists
    const pageNum = ((await searchParams)?.page > 500) ? 500 : (await searchParams)?.page || 1
    const movies = await fetchMoviesLists({ listType, pageNum })

    return (
        movies[0]?.success === false ? <Empty message='Sorry, There is No Movies With This List Name' link="/Movies/AllMovies" linkText="Explore Other Movies" /> :
            <>
                <Heading icon={<TbMovie className='text-red-500 w-8 h-8' />} className='text-red-100 px-2' title={listType === 'AllMovies' ? 'All Movies' : `${listType.split('_').join(' ')} Movies`} />
                <MoviesWrapper isShow={false} movies={movies[0]} pageLink={`/Movies/MovieDetails`} />
            </>
    )
}
export default movieListNum