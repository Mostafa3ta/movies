'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import NavLink from './NavLink'
import { MoviesLinks, ShowsLinks, StarsLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'

export default function NavigationTabs() {
  const pathname = usePathname()
  
  // Determine active tab based on current pathname
  const getActiveTab = () => {
    if (pathname.startsWith('/TvShows') || pathname.startsWith('/tvshows')) {
      return 'shows'
    } else if (pathname.startsWith('/Stars') || pathname.startsWith('/People') || pathname.startsWith('/people')) {
      return 'people'
    }
    return 'movies'
  }

  return (
    <Tabs defaultValue={getActiveTab()} className="w-full">
      <TabsList className="glass-dark border border-gray-700/50 p-1.5 mb-6 h-auto w-full grid grid-cols-3 justify-center items-center gap-1.5">
        <TabsTrigger 
          value="movies"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/50 px-3 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700/50 text-sm"
        >
          Movies
        </TabsTrigger>
        <TabsTrigger 
          value="shows"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/50 px-3 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700/50 text-sm"
        >
          TV Shows
        </TabsTrigger>
        <TabsTrigger 
          value="people"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/50 px-3 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700/50 text-sm"
        >
          People
        </TabsTrigger>
      </TabsList>

      <TabsContent value="movies" className="mt-6 space-y-2">
        {MoviesLinks.map((link: any) => (
          <NavLink key={link.name} navlink={link} />
        ))}
      </TabsContent>

      <TabsContent value="shows" className="mt-6 space-y-2">
        {ShowsLinks.map((link: any) => (
          <NavLink key={link.name} navlink={link} />
        ))}
      </TabsContent>

      <TabsContent value="people" className="mt-6 space-y-2">
        {StarsLinks.map((link: any) => (
          <NavLink key={link.name} navlink={link} />
        ))}
      </TabsContent>
    </Tabs>
  )
}
