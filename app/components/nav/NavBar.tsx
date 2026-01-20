'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '../defaults/Logo'
import { CgFormatJustify } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import NavigationTabs from './NavigationTabs'
import { Button } from '@/components/ui/button'

export default function NavBar() {
  const pathname = usePathname()
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false)

  useEffect(() => {
    setToggleCollapse(false)
  }, [pathname])

  return (
    <nav className="bg-gray-900/90 backdrop-blur-xl mb-10 transition-all duration-300 rounded-2xl border border-gray-700/50 lg:hidden shadow-xl shadow-fuchsia-500/10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <Button
          onClick={() => setToggleCollapse(!toggleCollapse)}
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-gray-800 text-gray-300 hover:text-fuchsia-400 rounded-xl"
        >
          {toggleCollapse ? <IoClose className='w-6 h-6' /> : <CgFormatJustify className='w-6 h-6' />}
        </Button>
      </div>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${toggleCollapse ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto pb-6 px-4">
          <NavigationTabs />
        </div>
      </div>
    </nav>
  )
}
