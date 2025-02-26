import Link from 'next/link'
import React from 'react'

export default function notfound() {
    return (
        <div className='max-h-screen min-h-[70%] text-center flex gap-6 flex-col items-center justify-center'>
            <div className='flex justify-center items-center'>
                <h1 className="next-error-h1 me-5 pr-6 text-2xl font-semibold align-top">404</h1>
                <h2 className='text-2xl font-normal m-0'>This page could not be found.</h2>
            </div>
            <Link className=" text-xl text-fuchsia-500 w-fit hover:underline hover:text-fuchsia-400 duration-150" href='/'>
                Go TO HOME PAGE
            </Link>
        </div>
        // <section className="bg-white dark:bg-gray-900">
        //     <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        //         <div className="mx-auto max-w-screen-sm text-center">
        //             <div className='mb-4 text-2xl flex gap-4 items-center justify-center tracking-tight font-extrabold lg:text-3xl text-white dark:text-white'>
        //             <h4>404</h4>
        //             <span>|</span>
        //             <h4>page not found</h4>
        //             </div>
        //             {/* <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p> */}
        //             <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
        //             <Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
        //         </div>
        //     </div>
        // </section>
    )
}
