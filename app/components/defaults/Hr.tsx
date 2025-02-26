import React from 'react'

export default function Hr({ className }: { className?: string }) {
    return (
        <hr className={`${className || ''} h-px w-[90%] mx-auto bg-gray-200 border-0 dark:bg-gray-700`} />)
}
