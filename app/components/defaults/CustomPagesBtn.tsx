'use client'
import React, { MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function CustomPagesBtn({ condition, onClick, children, hide, current }: { condition?: boolean, hide?: boolean, current?: boolean, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, children?: React.ReactNode }) {
    return (
        <Button
            type="button"
            onClick={onClick}
            disabled={condition}
            aria-current={current ? "page" : undefined}
            variant="ghost"
            className={cn(
                "min-h-[36px] min-w-[36px] md:min-h-[42px] md:min-w-[42px]",
                "flex justify-center items-center",
                "p-1.5 md:py-2.5 md:px-4",
                "text-xs md:text-sm font-semibold",
                "rounded-lg md:rounded-xl",
                "transition-all duration-300",
                "border border-transparent",
                current 
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-500/50 scale-105 md:scale-110 border-fuchsia-500/30 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600' 
                    : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 hover:shadow-lg hover:border-gray-600',
                'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-800/60',
                hide ? 'hidden' : 'block'
            )}
        >
            {children}
        </Button>
    )
}

