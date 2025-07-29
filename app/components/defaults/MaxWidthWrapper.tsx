import { cn } from '@/lib/utils'
import React from 'react'

export default function MaxWidthWrapper({ className, children, noPadding, customPadding }: { className?: string, children: React.ReactNode, noPadding?: boolean, customPadding?: string }) {
    return (
        <section className={cn('w-full max-w-[1375px] mx-auto px-5 md:px-10',
            className || '',
            { 'py-0': noPadding && !customPadding },
            { 'py-4 md:py-8': !noPadding && !customPadding },
            customPadding
        )}>
            {children}
        </section>
    )
}
