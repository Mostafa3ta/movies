import React from 'react';
import { Empty, Heading, MotionItem, MoviesWrapper } from '@/app/components';
import { fetchPeopleLists } from '@/app/api';
import { FaUser, FaUserAlt, FaUserSlash } from 'react-icons/fa';

export const metadata = {
    title: "People Lists",
}

interface ParamsProps {
    params: Promise<{ lists: string }>;
    searchParams: Promise<{ page: number }>;
}

async function PeopleListPage({ params, searchParams }: ParamsProps) {
    const listType = (await params)?.lists;
    const pageNum = (await searchParams)?.page || 1;
    
    const people = await fetchPeopleLists({ listType, pageNum });

    return (
        people[0]?.success === false ? 
            <Empty 
                message='No People Found' 
                icon={<FaUserSlash className="w-16 h-16 text-purple-400" />}
                link="/Stars/popular" 
                linkText="Explore Popular People" 
            /> :
            <>
                <MotionItem 
                    initial={{ opacity: 0, y: -20 }} 
                    animation={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading 
                        icon={<FaUserAlt className='text-purple-500 w-8 h-8' />} 
                        className='text-red-100 px-2' 
                        title={`${listType.split('_').join(' ')} Stars`} 
                    />
                </MotionItem>
                
                <MotionItem 
                    initial={{ opacity: 0 }} 
                    animation={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <MoviesWrapper 
                        isShow={false} 
                        isPerson={true}
                        movies={people[0]} 
                        pageLink={`/People/PersonDetails`}
                        requestedPage={pageNum}
                    />
                </MotionItem>
            </>
    )
}

export default PeopleListPage;
