'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
    children: React.ReactNode;
    offset?: number;
}

export default function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, offset])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

    return (
        <motion.div ref={ref} style={{ y, opacity }}>
            {children}
        </motion.div>
    )
}
