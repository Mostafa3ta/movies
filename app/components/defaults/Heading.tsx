import React from 'react'

export default function Heading({ className, title, icon, center = false }: { className?: string, title: string | any, icon?: any, center?: boolean }) {
    return (
        <div className='my-4 flex items-center gap-2'>
            <h1 className={`${className || ""} ${center && "mx-auto mt-8 mb-4"} text-white text-3xl font-semibold capitalize`}>{title}</h1>
            {icon}
        </div>
    )

}
