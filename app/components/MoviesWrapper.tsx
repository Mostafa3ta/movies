import React from 'react'
import PagesButtons from './PagesButtons'
import GridContainer from './defaults/GridContainer'
import MovieCard from './MovieCard'
import MotionItem from './defaults/MotionItem'

export default function MoviesWrapper({ movies, pageLink, isShow, isSearch = false, isPerson = false, requestedPage }: { movies: any, pageLink?: string, isShow?: boolean, isSearch?: boolean, isPerson?: boolean, requestedPage?: number }) {

    return (
        <>
            <GridContainer cols={2} className='my-2 gap-4 gap-y-7 md:grid-cols-3 xl:grid-cols-4'>
                {movies.results?.map((movie: any, index: number) => (
                    <MotionItem
                        key={movie.id}
                        initial={{ opacity: 0, y: 20 }}
                        animation={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <MovieCard
                            priority={index < 4}
                            isSearch={isSearch}
                            isPerson={isPerson}
                            show={isSearch ? (movie?.media_type === "movie" ? false : true) : isShow} 
                            movie={movie} 
                            pageLink={pageLink ? pageLink : (movie?.media_type === "movie" ? '/Movies/MovieDetails' : '/TvShows/ShowDetails')} 
                        />
                    </MotionItem>
                ))}
            </GridContainer>
            
            {movies.total_pages > 1 && (
                <MotionItem 
                    initial={{ opacity: 0, y: 20 }}
                    animation={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <PagesButtons movies={movies} requestedPage={requestedPage} />
                </MotionItem>
            )}
        </>
    )
}