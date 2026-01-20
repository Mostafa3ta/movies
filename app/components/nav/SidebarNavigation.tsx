'use client'
import React from 'react'
import NavLink from './NavLink'
import { MoviesLinks, ShowsLinks, StarsLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'
import { TbMovie } from 'react-icons/tb'
import { MdOutlineLiveTv } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function SidebarNavigation() {
  const pathname = usePathname()
  
  // Determine which section to expand based on pathname
  const getDefaultExpanded = () => {
    if (pathname.startsWith('/TvShows') || pathname.startsWith('/tvshows')) {
      return 'shows'
    } else if (pathname.startsWith('/Stars') || pathname.startsWith('/People') || pathname.startsWith('/people')) {
      return 'people'
    }
    return 'movies'
  }

  const sections = [
    {
      id: 'movies',
      label: 'Movies',
      icon: TbMovie,
      links: MoviesLinks,
      isActive: pathname.startsWith('/Movies'),
    },
    {
      id: 'shows',
      label: 'TV Shows',
      icon: MdOutlineLiveTv,
      links: ShowsLinks,
      isActive: pathname.startsWith('/TvShows'),
    },
    {
      id: 'people',
      label: 'People',
      icon: FaUserFriends,
      links: StarsLinks,
      isActive: pathname.startsWith('/Stars') || pathname.startsWith('/People'),
    },
  ]

  return (
    <Accordion type="single" collapsible defaultValue={getDefaultExpanded()} className="w-full space-y-3">
      {sections.map((section) => {
        const Icon = section.icon

        return (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border-none"
          >
            <AccordionTrigger
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 hover:no-underline ${
                section.isActive
                  ? 'bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 text-white shadow-lg shadow-fuchsia-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{section.label}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-2 pb-0">
              <div className="space-y-1 pl-2">
                {section.links.map((link: any) => (
                  <NavLink key={link.name} navlink={link} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
