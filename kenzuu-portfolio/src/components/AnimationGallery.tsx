'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Animation } from '@/lib/animations'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

interface AnimationGalleryProps {
  items: Animation[]
}

export function AnimationGallery({ items }: AnimationGalleryProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6"
    >
      {items.map((animation) => (
        <motion.div
          key={animation.id}
          variants={itemVariants}
          className="group relative aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800"
        >
          {/* Preview GIF */}
          <Image
            src={animation.previewGif}
            alt={animation.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg mb-2">
              {animation.title}
            </h3>

            {animation.codeSandboxUrl && (
              <a
                href={animation.codeSandboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${animation.title} on CodeSandbox`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
