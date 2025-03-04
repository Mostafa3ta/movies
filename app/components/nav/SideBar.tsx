'use client'
import React, { useState } from 'react'
import NavLink from './NavLink'
import Logo from '../defaults/Logo'
import Hr from '../defaults/Hr'
import MotionItem from '../defaults/MotionItem'
import { MoviesLinks, ShowsLinks } from '@/app/constants'

export default function SideBar() {
  const [activeTap, setActiveTap] = useState<string>('movies')

  return (
    <div className='py-5 w-full sticky inset-0 h-screen flex flex-col items-center '>
      <div className='mb-6'>
        <Logo />
      </div>
      <Hr />
      <div className="mx-auto mt-6 w-full border-gray-200 dark:border-neutral-700">
        <nav className="flex w-full justify-evenly items-center" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button onClick={() => setActiveTap('movies')} type="button" className={`text-lg inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-fuchsia-600 focus:outline-none duration-200 focus:text-fuchsia-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-fuchsia-500 ${activeTap === 'movies' ? 'font-semibold border-b-fuchsia-500 border-b-4 border-fuchsia-600 text-fuchsia-600 dark:text-neutral-200' : 'dark:text-neutral-400'}`}>
            Movies
          </button>
          <button onClick={() => setActiveTap('shows')} type="button" className={`text-lg inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-fuchsia-600 focus:outline-none duration-200 focus:text-fuchsia-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-fuchsia-500 ${activeTap === 'shows' ? 'font-semibold border-b-fuchsia-500 border-b-4 border-fuchsia-600 text-fuchsia-600 dark:text-neutral-200' : 'dark:text-neutral-400'}`}>
            TV Shows
          </button>
        </nav>
        <Hr className='mt-6 ' />

        <div className="mt-6 flex justify-start px-4">
          <MotionItem initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} className={`${activeTap === 'movies' ? 'block' : 'hidden'}`}>
            {MoviesLinks?.map((link: any) => (<NavLink key={link.name} navlink={link} />))}
          </MotionItem>
          <MotionItem initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} className={`${activeTap === 'shows' ? 'block' : 'hidden'}`}>
            {ShowsLinks?.map((link: any) => (<NavLink key={link.name} navlink={link} />))}
          </MotionItem>
        </div>
      </div>
    </div>
  )
}
