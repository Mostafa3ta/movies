import React from 'react'
import PagesButtons from './PagesButtons'
import GridContainer from './defaults/GridContainer'
import MovieCard from './MovieCard'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import Hr from './defaults/Hr'

export default function MoviesWrapper({ movies, pageLink, totalPages, pageNum, pageNavLink, show, isShow }: { movies: any, pageLink: string, pageNavLink: string, show: string, isShow: boolean, pageNum: number, totalPages: number }) {
    return <>
        <GridContainer cols={2} className='my-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
            {movies.results?.map((movie: any) =>
                <MovieCard show={isShow} key={movie.id} movie={movie} pageLink={pageLink} />
            )}
        </GridContainer>
        <PagesButtons movies={movies} pageNavLink={pageNavLink} show={show} />

        {/* <PaginationWithLinks  page={pageNum} totalCount={totalPages} pageSize={20} /> */}

    </>
}
