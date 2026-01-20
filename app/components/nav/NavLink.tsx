'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactElement } from 'react'

export default function NavLink({ navlink }: { navlink: { name: string, link: string, icon: ReactElement } }) {
    const pathName = usePathname()
    const { name, link, icon } = navlink
    const isActive = (pathName === link.slice(0, -8))

    return (
        <Link 
            href={link} 
            key={name} 
            className={`
                group relative flex items-center gap-3 px-4 py-2 my-1 
                rounded-xl transition-all duration-300 ease-out
                overflow-hidden
                ${isActive 
                    ? 'text-white font-medium bg-gradient-to-r from-fuchsia-600/60 to-purple-600/60 shadow-md shadow-fuchsia-500/20 scale-[1.01] border border-fuchsia-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-fuchsia-600/20 hover:to-purple-600/20 hover:scale-[1.02] hover:shadow-md hover:shadow-fuchsia-500/10'
                }
            `}
        >
            {/* Animated background gradient on hover */}
            <span className={`absolute inset-0 bg-gradient-to-r from-fuchsia-400/0 via-purple-400/0 to-fuchsia-400/0 
                ${!isActive && 'group-hover:from-fuchsia-400/5 group-hover:via-purple-400/10 group-hover:to-fuchsia-400/5'}
                transition-all duration-500 ease-out`}
            />
            
            {/* Icon with animation */}
            <span className={`relative z-10 transition-transform duration-300 
                ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-3'}`}
            >
                {icon}
            </span>
            
            {/* Text */}
            <span className="relative z-10">{name}</span>
            
            {/* Active indicator bar */}
            {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full shadow-lg shadow-white/50" />
            )}
        </Link>
    )
}
