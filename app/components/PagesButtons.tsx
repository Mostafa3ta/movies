import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

export default function PagesButtons({ movies, pageNavLink, show }: { movies: any, pageNavLink: string, show: string }) {
    const totalPages: boolean = (movies?.total_pages === movies?.page)
    const page_1: boolean = (movies?.page === 1)

    return (
        <nav className="flex justify-center mt-12 items-center gap-x-1" aria-label="Pagination">
            {/* previous icon */}
            <Link className={`${page_1 ? 'pointer-events-none' : ''}`} href={`${page_1 ? '' : pageNavLink + '/?page=' + (movies?.page - 1)}`}>
                <button type="button" disabled={page_1} className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500" aria-label="Previous">
                    <MdOutlineArrowBackIos size={24} className="shrink-0 size-3.5" />
                    <span className="sr-only">Previous</span>
                </button>
            </Link>

            {/* page number 1 */}
            <div className={` flex items-center gap-x-1 ${page_1 || movies?.page === 2 || movies?.page === 3 ? 'hidden' : ''}`}>
                <Link className={`${page_1 ? 'hidden' : ''}`} href={`${page_1 ? '' : pageNavLink + '/?page=1'}`}>
                    <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500">1</button>
                </Link>
                <button type="button" className="pointer-events-none hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-40 p-2 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500">
                    <span className="text-xs">•••</span>
                </button>
            </div>

            <Link className={`${page_1 ? 'hidden' : ''}`} href={`${page_1 ? '' : pageNavLink + '/?page=' + (movies?.page - 1)}`}>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500">{movies?.page - 1}</button>
            </Link>
            <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-fuchsia-800 dark:text-white" aria-current="page">{movies?.page}</button>
            <Link className={`${totalPages || movies?.page === 500 ? 'hidden' : ''}`} href={`${totalPages || movies?.page === 500 ? '' : pageNavLink + '/?page=' + (movies?.page + 1)}`}>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500">{movies?.page + 1}</button>
            </Link>

            <div className={` flex items-center gap-x-1 ${totalPages || movies?.page === movies?.total_pages - 1 || movies?.page === (500 - 2) || movies?.page === (500 - 1) || movies?.page === 500 ? 'hidden' : ''}`}>
                <button type="button" className="pointer-events-none hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-40 p-2 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500">
                    <span className="text-xs">•••</span>
                </button>
                <Link className={`${totalPages ? 'hidden' : ''}`} href={`${totalPages ? '' : pageNavLink + '/?page=' + (movies?.total_pages > 500 ? 500 : movies?.total_pages)}`}>
                    <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500">{movies?.total_pages > 500 ? '500' : movies?.total_pages}</button>
                </Link>
            </div>

            <Link className={`${totalPages || movies.page === 500 ? 'pointer-events-none opacity-50' : ''}`} href={`${totalPages ? '' : pageNavLink + '/?page=' + (movies?.page + 1)}`}>
                <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-fuchsia-500" aria-label="Next">
                    <span className="sr-only z-40">Next</span>
                    <MdOutlineArrowForwardIos size={24} className="shrink-0 size-3.5" />
                </button>
            </Link>
        </nav>
    )
}
