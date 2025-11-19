'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import SectionHeading from '@/components/SectionHeading'
import { fadeInUp } from '@/lib/motion'

const AnimationGallery = dynamic(() => import('@/components/AnimationGallery').then(mod => ({ default: mod.AnimationGallery })), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-video rounded-lg bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
      ))}
    </div>
  )
})

export default function AnimationsPage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <SectionHeading
            title="Animations"
            subtext="Interactive animations and visual experiments showcasing creative coding and artistic expression."
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AnimationGallery items={animations} />
        </motion.div>
      </div>
    </main>
  )
}
