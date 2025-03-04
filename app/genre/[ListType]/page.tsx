import React from 'react'
import { TbMovie } from 'react-icons/tb'
import GenereFilters from '../../components/GenereFilters'
import { Empty, Heading, MoviesWrapper } from '../../components'
import { fetchGeneres, fetchMoviesLists } from '../../api'

interface ParamsProps {
    params: Promise<{ ListType: string }>
    searchParams: Promise<{ page: number, genre: string }>;
}


export default async function page({ searchParams, params }: ParamsProps) {

    const listType = (await params)?.ListType
    const pageNum = ((await searchParams)?.page > 500) ? 500 : (await searchParams)?.page || 1
    const movies = await fetchMoviesLists({ listType, pageNum })
    const genres = await fetchGeneres({ Type: listType === 'AllMovies' ? 'movie' : 'tv' })
    const newMovies = (movies[0]?.results?.filter(async (movie: any) => movie.genre_ids.includes(Number((await searchParams)?.genre)))) || []
    // const totalPages = Math.ceil(newMovies?.data.count / 21);
    // console.log(movies);
    // console.log(newMovies);
    

    return (
        movies[0]?.success === false ? <Empty message='Sorry, There is No Movies With This List Name' link="/Movies/AllMovies" linkText="Explore Other Movies" /> :
            <>
                <Heading icon={<TbMovie className='text-red-500 w-8 h-8' />} className='text-red-100 px-2' title={listType === 'AllMovies' ? 'All Movies' : `${listType.split('_').join(' ')} Movies`} />
                {listType === 'AllMovies' && <GenereFilters listType={listType} genres={genres.genres} />}
                <MoviesWrapper isShow={false} movies={newMovies.length > 0 ? { results: newMovies } : movies[0]} pageLink={`/Movies/MovieDetails`}  />
            </>)
}
