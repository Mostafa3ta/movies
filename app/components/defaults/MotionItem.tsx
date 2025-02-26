'use client'
import { motion } from 'framer-motion'
import React from 'react'
motion

export default function MotionItem({ children, className, initial, animation, whileInView }: { children: React.ReactNode, className?: string, initial?: any, animation?: any, whileInView?: any }) {
    return (
        <motion.div
            className={className || ''}
            initial={initial || { opacity: 0, y: 30 }}
            animate={animation}
            whileInView={whileInView}
        >
            {children}
        </motion.div>
    )
}
