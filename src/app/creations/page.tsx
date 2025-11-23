'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { getCreationsByCategory, type CategoryId } from '@/data/creations'
import SectionHeading from '@/components/SectionHeading'
import { CategoryFilter } from '@/components/CategoryFilter'
import { fadeInUp } from '@/lib/motion'

const CreationGallery = dynamic(
  () => import('@/components/CreationGallery').then((mod) => ({ default: mod.CreationGallery })),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-video rounded-lg bg-neutral-200 dark:bg-neutral-700 animate-pulse"
          />
        ))}
      </div>
    ),
  }
)

export default function CreationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Debounced category change with transition effect
  const handleCategoryChange = useCallback((category: CategoryId) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsTransitioning(false)
    }, 150)
  }, [])

  const items = getCreationsByCategory(selectedCategory)

  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <SectionHeading
            title="Creations"
            subtext="A showcase of creative work spanning animations, digital art, and graphic design experiments."
          />
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter selected={selectedCategory} onChange={handleCategoryChange} />

        {/* Gallery with transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTransitioning ? 0.5 : 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <CreationGallery items={items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

