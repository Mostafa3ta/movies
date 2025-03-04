'use client'
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'
import Spinner from './Spinner'

export default function CustomPagesBtn({ condition, onClick, children, hide, current }: { condition?: boolean, hide?: boolean, current?: boolean, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, children?: React.ReactNode }) {
    return (<>
        <button
            type="button"
            onClick={onClick}
            disabled={condition}
            aria-current={current ? "page" : undefined}
            className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none ${current ? 'bg-gray-200 text-gray-800 focus:outline-none focus:bg-gray-300 dark:bg-fuchsia-800 dark:text-white' : 'text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-fuchsia-500'} ${hide ? 'hidden' : 'block'}`}
        >
            {children}
        </button>
    </>
    )

}

