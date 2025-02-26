'use client'
import Link from 'next/link'
import React from 'react'
import Spinner from './Spinner'

export default function CustomBtn({ className, onClick, link, text, icon, disabled = false, showSpan = true }: { className?: string, onClick?: any, link?: string, text: string, icon?: any, disabled?: boolean, showSpan?: boolean }) {
    return (
        <button
            className={`${className || ''} cursor-pointer min-w-[90px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800`}
            disabled={disabled}
            onClick={() => { onClick && onClick() }}
        >
            {showSpan ? <span className="relative min-w-full flex items-center justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
            </span> : text}

            {icon && icon}
        </button>
    )
}
