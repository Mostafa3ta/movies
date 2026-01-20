import React from 'react'
import { Empty, Heading, MoviesWrapper } from '../components'
import { searchResults } from '../api'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TbMovie } from 'react-icons/tb'
import { MdOutlineLiveTv } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import GridContainer from '../components/defaults/GridContainer'
import MotionItem from '../components/defaults/MotionItem'
import CustomImg from '../components/defaults/CustomImg'
import Link from 'next/link'

interface ParamsProps {
  searchParams: Promise<{ page: number, query: string }>;
}

export default async function SearchPage({ searchParams }: ParamsProps) {
  const requestedPageNum = (await searchParams)?.page || 1
  const pageNum = requestedPageNum > 500 ? 500 : requestedPageNum
  const Query = (await searchParams)?.query || ''
  
  const results = await searchResults({ value: Query, pageNum })

  return (
    results?.success === false || results?.results?.length === 0 ?
      Query === '' ?
        <Empty 
          message='Start Your Search Journey' 
          icon={<BiSearchAlt className="w-16 h-16 text-fuchsia-400" />}
          link="/"
          linkText="Explore Trending"
        />
        :
        <Empty 
          message={`No results found for "${Query}"`}
          link="/"
          linkText="Back to Home"
        />
      :
      <>
        <Heading className='text-red-100 px-2 my-4' title='Movies & Shows' />
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="glass-dark border border-gray-700/50 p-1.5 mb-8 flex-wrap h-auto w-full justify-start">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-6 py-2.5 rounded-lg font-semibold transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/50"
            >
              All ({results?.results?.length || 0})
            </TabsTrigger>
            <TabsTrigger 
              value="movie"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white px-6 py-2.5 rounded-lg font-semibold transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/50 flex items-center gap-2"
            >
              <TbMovie className="w-4 h-4" />
              Movies ({results?.results?.filter((item: any) => item.media_type === 'movie').length || 0})
            </TabsTrigger>
            <TabsTrigger 
              value="tv"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-500 data-[state=active]:text-white px-6 py-2.5 rounded-lg font-semibold transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/50 flex items-center gap-2"
            >
              <MdOutlineLiveTv className="w-4 h-4" />
              TV Shows ({results?.results?.filter((item: any) => item.media_type === 'tv').length || 0})
            </TabsTrigger>
            <TabsTrigger 
              value="person"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white px-6 py-2.5 rounded-lg font-semibold transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/50 flex items-center gap-2"
            >
              <FaUser className="w-4 h-4" />
              People ({results?.results?.filter((item: any) => item.media_type === 'person').length || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <MoviesWrapper isSearch={true} movies={results} requestedPage={requestedPageNum} />
          </TabsContent>

          <TabsContent value="movie">
            <MoviesWrapper 
              isSearch={true} 
              movies={{
                ...results,
                results: results.results.filter((item: any) => item.media_type === 'movie')
              }}
              requestedPage={requestedPageNum}
            />
          </TabsContent>

          <TabsContent value="tv">
            <MoviesWrapper 
              isSearch={true} 
              movies={{
                ...results,
                results: results.results.filter((item: any) => item.media_type === 'tv')
              }}
              requestedPage={requestedPageNum}
            />
          </TabsContent>

          <TabsContent value="person">
            <GridContainer cols={2} className='gap-6 md:grid-cols-4 xl:grid-cols-6'>
              {results.results
                .filter((person: any) => person.media_type === 'person')
                .map((person: any, index: number) => (
                  <MotionItem
                    key={person.id}
                    initial={{ opacity: 0, y: 20 }}
                    animation={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={`/Stars/PersonDetails/?id=${person.id}`} className="block group">
                      <div className="glass-dark rounded-xl overflow-hidden border border-gray-700/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative aspect-[2/3] overflow-hidden">
                          <CustomImg
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            imgSrc={person.profile_path}
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-semibold text-white group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                            {person.name}
                          </h3>
                          {person.known_for_department && (
                            <p className="text-xs text-gray-400 mt-1">{person.known_for_department}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </MotionItem>
                ))}
            </GridContainer>
          </TabsContent>
        </Tabs>
      </>
  )
}
