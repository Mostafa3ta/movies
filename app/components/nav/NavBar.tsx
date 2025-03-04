'use client'
import React, { useEffect, useState } from 'react'
import Hr from '../defaults/Hr'
import MotionItem from '../defaults/MotionItem'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '../defaults/Logo'
import { CgFormatJustify } from 'react-icons/cg'
import { MoviesLinks, ShowsLinks } from '@/app/constants'
import { IoClose } from 'react-icons/io5'

export default function NavBar() {
  const pathname = usePathname()
  const [activeTap, setActiveTap] = useState<string>('movies')
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false)
  // console.log(toggleCollapse);
  // console.log(pathname);

  useEffect(() => {
    setToggleCollapse(false)
  }, [pathname])

  return (
    <nav className="bg-white mb-10 transition-all ease-in duration-300 rounded-md border-gray-200 lg:hidden dark:bg-black/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <button onClick={() => setToggleCollapse(!toggleCollapse)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          {toggleCollapse ? <IoClose className='w-14 h-14' /> : <CgFormatJustify className='w-14 h-14' />}
        </button>
      </div>
      <div className={` w-1/2 md:w-1/3 mx-auto transition-all ease-in duration-300 ${toggleCollapse ? 'block' : 'hidden'}`}>
        <div className="mx-auto mt-6 w-full border-gray-200 dark:border-neutral-700">
          <header className="flex w-full justify-evenly items-center" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button onClick={() => setActiveTap('movies')} type="button" className={`text-lg inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-fuchsia-600 focus:outline-none duration-200 focus:text-fuchsia-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-fuchsia-500 ${activeTap === 'movies' ? 'font-semibold border-b-fuchsia-500 border-b-4 border-fuchsia-600 text-fuchsia-600 dark:text-neutral-200' : 'dark:text-neutral-400'}`}>
              Movies
            </button>
            <button onClick={() => setActiveTap('shows')} type="button" className={`text-lg inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-fuchsia-600 focus:outline-none duration-200 focus:text-fuchsia-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-fuchsia-500 ${activeTap === 'shows' ? 'font-semibold border-b-fuchsia-500 border-b-4 border-fuchsia-600 text-fuchsia-600 dark:text-neutral-200' : 'dark:text-neutral-400'}`}>
              TV Shows
            </button>
          </header>
          <Hr className='mt-6 ' />
          <div className="mt-6 flex justify-center px-4 mb-2">
            <MotionItem initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} className={`${activeTap === 'movies' ? 'block' : 'hidden'}`}>
              {MoviesLinks.map((link: any) => (<NavLink key={link.name} navlink={link} />))}
            </MotionItem>
            <MotionItem initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} className={`${activeTap === 'shows' ? 'block' : 'hidden'}`}>
              {ShowsLinks.map((link: any) => (<NavLink key={link.name} navlink={link} />))}
            </MotionItem>
          </div>
        </div>
      </div>
    </nav>

  )
}
