'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { tracks } from '@/lib/tracks'
import SectionHeading from '@/components/SectionHeading'
import { fadeInUp } from '@/lib/motion'

const AudioPlayer = dynamic(() => import('@/components/AudioPlayer').then(mod => ({ default: mod.AudioPlayer })), {
  ssr: false,
  loading: () => (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
      <div className="max-h-48 overflow-y-auto border-b border-neutral-200 dark:border-neutral-700">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 space-y-2">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
            <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded max-w-24 animate-pulse" />
          </div>
        ))}
      </div>
      <div className="p-4 space-y-4">
        <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
        <div className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
})

export default function MusicPage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <SectionHeading
            title="Music"
            subtext="Original compositions blending electronic, synthwave, and anime-inspired soundscapes. Each track tells a story through carefully crafted melodies and atmospheric production."
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AudioPlayer tracks={tracks} />
        </motion.div>
      </div>
    </main>
  )
}
