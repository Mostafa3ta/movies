import React from 'react';
import { Empty, Heading, MoviesWrapper } from '@/app/components';
import { fetchMoviesLists } from '@/app/api';
import { BiMove, BiMovie } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';

export const metadata = {
    title: "Movies Lists",
}

interface ParamsProps {
    params: { lists: string},
    searchParams: { page: number }
}

async function movieListNum({ params, searchParams }: ParamsProps) {

    const listType = params?.lists
    const pageNum = (searchParams?.page > 500) ? 500 : searchParams?.page || 1

    const movies = await fetchMoviesLists({ listType, pageNum })
    console.log(movies);



    return (
        movies[0]?.success === false ? <Empty message='Sorry, There is No Movies With This List Name' link="/Movies/AllMovies" linkText="Explore Other Movies" /> :
            <>
                <Heading icon={<TbMovie className='text-red-500 w-8 h-8' />} className='text-red-100 px-2' title={listType === 'AllMovies' ? 'All Movies' : `${listType.split('_').join(' ')} Movies`} />
                <MoviesWrapper totalPages={movies[0].total_pages} pageNum={pageNum} isShow={false} show='' movies={movies[0]} pageLink={`/Movies/MovieDetails`} pageNavLink={`/Movies/${listType}`} />
            </>
    )
}
export default movieListNum