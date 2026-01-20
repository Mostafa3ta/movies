'use client'
import React from 'react'
import { MdError } from 'react-icons/md'
import { BiRefresh } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <div className="glass-dark rounded-3xl border-2 border-red-500/50 shadow-2xl shadow-red-500/20 overflow-hidden">
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-r from-red-600/20 via-red-500/20 to-orange-500/20 p-6 border-b border-red-500/30">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-red-500/20 rounded-2xl">
                                <MdError className='w-12 h-12 text-red-400' />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                                    Something Went Wrong!
                                </h2>
                                <p className="text-gray-400 mt-1">We encountered an unexpected error</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Body */}
                    <div className="p-8 space-y-6">
                        <div className="space-y-3">
                            <p className="text-gray-300 text-lg">
                                Don't worry, this happens sometimes. Here are a few things you can try:
                            </p>
                            <ul className="space-y-2 text-gray-400 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-fuchsia-400 mt-1">•</span>
                                    <span>Check your internet connection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fuchsia-400 mt-1">•</span>
                                    <span>Refresh the page</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-fuchsia-400 mt-1">•</span>
                                    <span>Try again in a few moments</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                            <Button 
                                onClick={() => window.location.reload()}
                                className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-2xl shadow-red-500/50"
                                size="lg"
                            >
                                <BiRefresh className="w-5 h-5 mr-2" />
                                Refresh Page
                            </Button>
                            <Button 
                                asChild
                                variant="secondary"
                                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold"
                                size="lg"
                            >
                                <Link href="/">
                                    Go Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
