'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

interface HeroAnimationProps {
  children: React.ReactNode
}

export function HeroAnimation({ children }: HeroAnimationProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>{children}</motion.div>
    </motion.div>
  )
}
