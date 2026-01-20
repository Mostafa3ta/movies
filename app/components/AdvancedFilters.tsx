'use client'
import React, { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { FiFilter } from 'react-icons/fi'
import { MdClear } from 'react-icons/md'

interface FilterProps {
    type: 'movie' | 'tv'
    genres: any[]
}

export default function AdvancedFilters({ type, genres }: FilterProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') || '')
    const [selectedYear, setSelectedYear] = useState(searchParams.get('year') || '')
    const [selectedCountry, setSelectedCountry] = useState(searchParams.get('country') || '')
    const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get('language') || '')
    const [isExpanded, setIsExpanded] = useState(false)

    // Sync state with URL parameters
    useEffect(() => {
        setSelectedGenre(searchParams.get('genre') || '')
        setSelectedYear(searchParams.get('year') || '')
        setSelectedCountry(searchParams.get('country') || '')
        setSelectedLanguage(searchParams.get('language') || '')
    }, [searchParams])

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

    const countries = [
        { code: 'US', name: 'United States' },
        { code: 'GB', name: 'United Kingdom' },
        { code: 'CA', name: 'Canada' },
        { code: 'AU', name: 'Australia' },
        { code: 'FR', name: 'France' },
        { code: 'DE', name: 'Germany' },
        { code: 'IT', name: 'Italy' },
        { code: 'ES', name: 'Spain' },
        { code: 'JP', name: 'Japan' },
        { code: 'KR', name: 'South Korea' },
        { code: 'IN', name: 'India' },
        { code: 'BR', name: 'Brazil' },
        { code: 'MX', name: 'Mexico' },
        { code: 'CN', name: 'China' },
        { code: 'RU', name: 'Russia' },
    ]

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'zh', name: 'Chinese' },
        { code: 'hi', name: 'Hindi' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ru', name: 'Russian' },
        { code: 'ar', name: 'Arabic' },
    ]

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams.toString())
        
        // Reset to page 1 when filters change
        params.set('page', '1')
        
        if (selectedGenre) params.set('genre', selectedGenre)
        else params.delete('genre')
        
        if (selectedYear) params.set('year', selectedYear)
        else params.delete('year')
        
        if (selectedCountry) params.set('country', selectedCountry)
        else params.delete('country')
        
        if (selectedLanguage) params.set('language', selectedLanguage)
        else params.delete('language')

        router.push(`${pathname}?${params.toString()}`)
    }

    const clearFilters = () => {
        setSelectedGenre('')
        setSelectedYear('')
        setSelectedCountry('')
        setSelectedLanguage('')
        
        const params = new URLSearchParams(searchParams.toString())
        params.delete('genre')
        params.delete('year')
        params.delete('country')
        params.delete('language')
        params.set('page', '1')
        
        router.push(`${pathname}?${params.toString()}`)
    }

    const hasActiveFilters = searchParams.get('genre') || searchParams.get('year') || searchParams.get('country') || searchParams.get('language')

    return (
        <div className="glass-dark rounded-2xl p-3 md:p-6 mb-4 md:mb-8 border border-gray-700/30 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FiFilter className="w-6 h-6 text-fuchsia-400" />
                    <h2 className="flex flex-row items-center gap-1 text-xl md:text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                        {/* <span className='hidden md:block'>Advanced</span> */}
                          Filters
                    </h2>
                    {hasActiveFilters && (
                        <Badge variant="secondary" className="bg-fuchsia-600/20 text-fuchsia-400 border-fuchsia-500/30 hover:bg-fuchsia-600/30">
                            Active
                        </Badge>
                    )}
                </div>
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    variant="ghost"
                    size="sm"
                    className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-100 font-semibold"
                >
                    {isExpanded ? 'Hide' : 'Show'} <span className='hidden md:inline'>Filters</span>
                </Button>
            </div>

            {/* Filters Grid */}
            {isExpanded && (
                <div className="space-y-4 mt-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Genre Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Genre</label>
                            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                                <SelectTrigger className="glass-dark border-gray-700">
                                    <SelectValue placeholder="All Genres" />
                                </SelectTrigger>
                                <SelectContent className="glass-dark border-gray-700">
                                    <SelectItem value="all">All Genres</SelectItem>
                                    {genres.map((genre: any) => (
                                        <SelectItem key={genre.id} value={genre.id.toString()}>
                                            {genre.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Year Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Year</label>
                            <Select value={selectedYear} onValueChange={setSelectedYear}>
                                <SelectTrigger className="glass-dark border-gray-700">
                                    <SelectValue placeholder="All Years" />
                                </SelectTrigger>
                                <SelectContent className="glass-dark border-gray-700 max-h-[300px]">
                                    <SelectItem value="all">All Years</SelectItem>
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year.toString()}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Country Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Country</label>
                            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                                <SelectTrigger className="glass-dark border-gray-700">
                                    <SelectValue placeholder="All Countries" />
                                </SelectTrigger>
                                <SelectContent className="glass-dark border-gray-700 max-h-[300px]">
                                    <SelectItem value="all">All Countries</SelectItem>
                                    {countries.map((country) => (
                                        <SelectItem key={country.code} value={country.code}>
                                            {country.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Language Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Language</label>
                            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                <SelectTrigger className="glass-dark border-gray-700">
                                    <SelectValue placeholder="All Languages" />
                                </SelectTrigger>
                                <SelectContent className="glass-dark border-gray-700 max-h-[300px]">
                                    <SelectItem value="all">All Languages</SelectItem>
                                    {languages.map((lang) => (
                                        <SelectItem key={lang.code} value={lang.code}>
                                            {lang.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            onClick={applyFilters}
                            className="flex-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 shadow-lg shadow-fuchsia-500/50 text-white font-semibold"
                            size="lg"
                        >
                            Apply Filters
                        </Button>
                        {hasActiveFilters && (
                            <Button
                                onClick={clearFilters}
                                variant="secondary"
                                className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold"
                                size="lg"
                            >
                                <MdClear className="w-5 h-5 mr-2" />
                                Clear All
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
