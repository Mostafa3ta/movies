import Link from 'next/link'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import { MdOutlineSearchOff } from 'react-icons/md'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className='min-h-[70vh] flex items-center justify-center p-4'>
            <div className='max-w-3xl w-full text-center'>
                {/* Animated background decoration */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                
                <div className="glass-dark rounded-3xl p-12 shadow-2xl shadow-fuchsia-500/20 border border-gray-700/30">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-fuchsia-500/20 rounded-full blur-2xl"></div>
                            <div className="relative p-6 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 rounded-full border border-fuchsia-500/30">
                                <MdOutlineSearchOff className="w-20 h-20 text-fuchsia-400" />
                            </div>
                        </div>
                    </div>
                    
                    {/* 404 Text */}
                    <div className="space-y-4 mb-8">
                        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                            404
                        </h1>
                        <h2 className='text-2xl md:text-3xl font-bold text-white'>
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mx-auto">
                            Oops! The page you're looking for seems to have vanished into the digital void.
                        </p>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                        asChild
                        className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-2xl shadow-fuchsia-500/50"
                        size="lg"
                    >
                        <Link href='/'>
                            <BiHome className="w-5 h-5 mr-3" />
                            Back to Home
                        </Link>
                    </Button>
                    
                    {/* Additional info */}
                    <p className="text-sm text-gray-500 mt-8">
                        Error Code: <span className="text-fuchsia-400 font-mono">404</span> • Page Not Found
                    </p>
                </div>
            </div>
        </div>
    )
}
