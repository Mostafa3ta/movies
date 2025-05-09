import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className='flex items-center space-x-3 rtl:space-x-reverse'>
            <Image loading='lazy' src="/movies-club.png" className="object-contain hover:scale-110 duration-150 w-full h-10" width={100} height={100} alt='poster' />
        </Link>
    )
}
