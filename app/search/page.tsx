import React from 'react'
import { Empty, Heading, MoviesWrapper } from '../components'
import { searchResults } from '../api';

interface ParamsProps {
  searchParams: Promise<{ page: number, query: string }>;
}

export default async function page({ searchParams }: ParamsProps) {
  const pageNum = (((await searchParams)?.page > 500) ? 500 : (await searchParams)?.page || 1)
  const Query = (await searchParams)?.query || ''
  const results = await searchResults({ value: Query, pageNum })

  return (
    results?.success === false || results?.results?.length === 0 ?
      Query === '' ?
        <Empty message='Please, Provide Some Input '/> :
        <Empty message={`Sorry, No results found with "${Query}"`}/>
      :
      <>
        <Heading className='text-red-100 px-2 my-4' title='Movies & Shows' />
        <MoviesWrapper isSearch={true} movies={results} />
      </>
  )
}
