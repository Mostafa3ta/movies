'use client'
import React from 'react'
import Logo from '../defaults/Logo'
import SidebarNavigation from './SidebarNavigation'
import { Separator } from '@/components/ui/separator'

export default function SideBar() {
  return (
    <div className='py-5 w-full sticky inset-0 h-screen flex flex-col items-center'>
      <div className='mb-6'>
        <Logo />
      </div>
      <Separator className="bg-gray-700/30" />
      <div className="mx-auto mt-6 w-full px-4">
        <SidebarNavigation />
      </div>
    </div>
  )
}
