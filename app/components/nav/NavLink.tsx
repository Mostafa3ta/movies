'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactElement } from 'react'

export default function NavLink({ navlink }: { navlink: { name: string, link: string, icon: ReactElement } }) {
    const pathName = usePathname()
    const { name, link, icon } = navlink
    const isActive = (pathName === link.slice(0, -8))

    return (
        <Link href={link} key={name} className={`flex items-center gap-2 p-2 my-2 duration-150 rounded-md ${isActive ? 'text-fuchsia-500 hover:text-fuchsia-400' : 'hover:text-gray-400 text-gray-50'}`}>
            {/* {React.cloneElement(icon, {className: 'w-4 h-4' })} */}
            {icon}
            {name}
        </Link>
    )
}
