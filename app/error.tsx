'use client'
import React from 'react'
import { MdError } from 'react-icons/md'

export default function error() {
    return (
        <div className="flex items-center p-4 mb-4 text-lg text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-red-800" role="alert">
            <MdError className='shrink-0 inline w-8 h-8 me-3' />
            <div>
                <span className="font-medium">Something went wrong!</span> Please, check your internet connection or refresh the page.
            </div>
        </div>)
}
