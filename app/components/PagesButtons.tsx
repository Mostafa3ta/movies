'use client'
import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { updateSearchParams } from '../api'
import { useRouter } from 'next/navigation'
import CustomPagesBtn from './defaults/CustomPagesBtn'

export default function PagesButtons({ movies }: { movies: any }) {
    const totalPages: boolean = (movies?.total_pages === movies?.page)
    const page_1: boolean = (movies?.page === 1)
    const router = useRouter();

    const handleUpdateParams = (condition: boolean, num: number) => {
        const newPathName = updateSearchParams('page', num.toString());
        if (!condition) {
            router.push(newPathName);
        }
    }

    return (
        <section className="flex justify-center mt-12 items-center gap-x-1" aria-label="Pagination">
            <CustomPagesBtn onClick={() => handleUpdateParams((page_1), (movies?.page - 1))} condition={page_1}>
                <MdOutlineArrowBackIos size={24} className="shrink-0 size-3.5" />
                <span className="sr-only">Previous</span>
            </CustomPagesBtn>

            {/* page number 1 */}
            <div className={` flex items-center gap-x-1 ${page_1 || movies?.page === 2 || movies?.page === 3 ? 'hidden' : ''}`}>
                <CustomPagesBtn onClick={() => handleUpdateParams((page_1), (1))} condition={page_1}>1</CustomPagesBtn>
                <span className="text-xs">•••</span>
            </div>

            <CustomPagesBtn onClick={() => handleUpdateParams((page_1), (movies?.page - 1))} hide={page_1}>{movies?.page - 1}</CustomPagesBtn>
            <CustomPagesBtn current={true}>{movies?.page}</CustomPagesBtn>
            <CustomPagesBtn onClick={() => handleUpdateParams((totalPages || movies?.page === 500), (movies?.page + 1))} hide={(totalPages || movies?.page === 500)}>{movies?.page + 1}</CustomPagesBtn>

            {/*  last page */}
            <div className={` flex items-center gap-x-1 ${totalPages || movies?.page === movies?.total_pages - 1 || movies?.page === (500 - 2) || movies?.page === (500 - 1) || movies?.page === 500 ? 'hidden' : ''}`}>
                <span className="text-xs">•••</span>
                <CustomPagesBtn onClick={() => handleUpdateParams((totalPages), (movies?.total_pages > 500 ? 500 : movies?.total_pages))} condition={(totalPages || movies?.page === 500)}>{movies?.total_pages}</CustomPagesBtn>
            </div>

            <CustomPagesBtn onClick={() => handleUpdateParams((totalPages || movies?.page === 500), (movies?.page + 1))} condition={(totalPages || movies?.page === 500)}>
                <span className="sr-only z-40">Next</span>
                <MdOutlineArrowForwardIos size={24} className="shrink-0 size-3.5" />
            </CustomPagesBtn>
        </section>
    )
}
