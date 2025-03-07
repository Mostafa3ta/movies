import React from 'react'
import PagesButtons from './PagesButtons'
import GridContainer from './defaults/GridContainer'
import MovieCard from './MovieCard'

export default function MoviesWrapper({ movies, pageLink, isShow, isSearch = false }: { movies: any, pageLink?: string, isShow?: boolean, isSearch?: boolean }) {
    console.log(isShow);

    return <>
        <GridContainer cols={2} className='my-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
            {movies.results?.map((movie: any) =>
                <MovieCard isSearch={isSearch} show={isSearch ? (movie?.media_type === "movie" ? false : true) : isShow} key={movie.id} movie={movie} pageLink={pageLink ? pageLink : (movie?.media_type === "movie" ? '/Movies/MovieDetails' : '/TvShows/ShowDetails')} />
            )}
        </GridContainer>
        {movies.total_pages > 1 && <PagesButtons movies={movies} />}

    </>
}
