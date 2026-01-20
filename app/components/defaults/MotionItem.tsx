'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface MotionItemProps {
    children: React.ReactNode;
    className?: string;
    initial?: any;
    animation?: any;
    whileInView?: any;
    viewport?: { once?: boolean; amount?: number };
    transition?: any;
    delay?: number;
}

export default function MotionItem({ 
    children, 
    className, 
    initial, 
    animation, 
    whileInView,
    viewport,
    transition,
    delay = 0
}: MotionItemProps) {
    return (
        <motion.div
            className={className || ''}
            initial={initial || { opacity: 0, y: 30 }}
            animate={animation}
            whileInView={whileInView || { opacity: 1, y: 0 }}
            viewport={viewport || { once: true, amount: 0.3 }}
            transition={transition || { duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
