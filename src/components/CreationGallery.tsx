'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Sparkles } from 'lucide-react'
import { CreationItem } from '@/data/creations'

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

interface CreationGalleryProps {
  items: CreationItem[]
}

export function CreationGallery({ items }: CreationGalleryProps) {
  // Empty state
  if (items.length === 0) {
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="w-20 h-20 mb-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-neutral-400 dark:text-neutral-600" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          No creations yet
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-md">
          This category is waiting for creative work. Check back soon for new additions!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6"
    >
      {items.map((creation) => (
        <motion.div
          key={creation.id}
          variants={itemVariants}
          className="group relative aspect-video rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800"
        >
          {/* Thumbnail/Preview */}
          <div className="relative w-full h-full">
            <Image
              src={creation.thumbnail}
              alt={creation.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-semibold text-base mb-1 line-clamp-1">
              {creation.title}
            </h3>
            <p className="text-white/80 text-xs mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {creation.description}
            </p>

            {/* Technology tags */}
            {creation.technology && creation.technology.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {creation.technology.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {creation.technology.length > 3 && (
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] rounded-full">
                    +{creation.technology.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* External link button */}
            {(creation.codeSandboxUrl || creation.href) && (
              <a
                href={creation.codeSandboxUrl || creation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
