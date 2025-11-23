'use client'

import { motion } from 'framer-motion'
import { CATEGORIES, type CategoryId } from '@/data/creations'
import { useRef, useEffect } from 'react'

interface CategoryFilterProps {
  selected: CategoryId
  onChange: (category: CategoryId) => void
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll selected item into view on mobile
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const selectedButton = container.querySelector(`[data-category="${selected}"]`)
    if (selectedButton) {
      selectedButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [selected])

  // Ensure first tab is visible on initial load
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollTo({ left: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <div className="relative mb-12">
      {/* Desktop: Inline tabs */}
      <div className="hidden md:flex items-center justify-center gap-2">
        {CATEGORIES.map((category) => {
          const isActive = selected === category.id
          return (
            <button
              key={category.id}
              onClick={() => onChange(category.id)}
              className={`
                relative px-4 py-2 text-sm font-medium transition-colors rounded-md min-h-[40px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400'
                }
              `}
              aria-pressed={isActive}
            >
              <span className="relative z-10">
                {category.label}
                <span className="ml-1.5 text-xs opacity-60">({category.count})</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brand-50 dark:bg-brand-900/20 rounded-md"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Mobile: Horizontal scrollable chips */}
      <div className="md:hidden relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto overflow-y-visible pb-2 pl-4 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollPaddingLeft: '16px',
          }}
        >
          {CATEGORIES.map((category) => {
            const isActive = selected === category.id
            return (
              <button
                key={category.id}
                data-category={category.id}
                onClick={() => onChange(category.id)}
                className={`
                  relative flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all
                  whitespace-nowrap min-h-[40px] min-w-[44px] box-border
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                  ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-lg z-[2]'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 z-[1]'
                  }
                `}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-pressed={isActive}
              >
                {category.label}
                <span className="ml-1.5 text-xs opacity-75">({category.count})</span>
              </button>
            )
          })}
          {/* Spacer for right padding */}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </div>

        {/* Gradient fade edges on mobile for scroll indication */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-[3]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-[3]" />
      </div>
    </div>
  )
}
