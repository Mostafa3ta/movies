import React from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { MdSearchOff, MdOutlineExplore } from 'react-icons/md';

export default function Empty({ message, link, linkText, icon }: { message?: string; link?: string; linkText?: string; icon?: React.ReactNode }) {
    return (
        <div className="flex gap-6 items-center justify-center col-span-full w-full min-h-[40vh] flex-col py-12">
            <div className="glass-dark rounded-3xl p-12 border border-gray-700/30 max-w-2xl text-center space-y-6 shadow-2xl">
                <div className="flex justify-center mb-4">
                    <div className="p-6 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30">
                        {icon || <MdSearchOff className="w-16 h-16 text-fuchsia-400" />}
                    </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    {message || "No Results Found"}
                </h3>
                
                {link && (
                    <Button asChild className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 shadow-lg shadow-fuchsia-500/50 text-white font-semibold mt-6">
                        <Link href={link} className="flex items-center gap-2">
                            <MdOutlineExplore className="w-5 h-5" />
                            {linkText || "Explore More"}
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    )
}
