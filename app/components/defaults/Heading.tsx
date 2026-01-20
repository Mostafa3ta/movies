import React from 'react'

export default function Heading({ className, title, icon, center = false }: { className?: string, title: string | any, icon?: any, center?: boolean }) {
    return (
        <div className='my-6 flex items-center gap-3'>
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <h1 className={`${className || ""} ${center && "mx-auto mt-8 mb-4"} bg-gradient-to-r from-white via-fuchsia-200 to-white bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold capitalize tracking-tight leading-tight py-1`}>{title}</h1>
        </div>
    )
}
