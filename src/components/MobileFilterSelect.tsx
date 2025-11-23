'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, Search } from 'lucide-react'

interface MobileFilterSelectProps {
  availableTags: string[]
  selectedTags: string[]
  onTagsChange: (tags: string[])=> void
}

export function MobileFilterSelect({ 
  availableTags, 
  selectedTags, 
  onTagsChange 
}: MobileFilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter tags based on search query
  const filteredTags = useMemo(() => {
    if (!searchQuery.trim()) return availableTags
    return availableTags.filter(tag =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [availableTags, searchQuery])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  const removeTag = (tag: string) => {
    onTagsChange(selectedTags.filter(t => t !== tag))
  }

  const clearAll = () => {
    onTagsChange([])
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Selected Tags Display */}
      <div className="space-y-2">
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedTags.map(tag => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => removeTag(tag)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium rounded-full hover:bg-brand-200 dark:hover:bg-brand-900/50 transition-colors"
                aria-label={`Remove ${tag} filter`}
              >
                {tag}
                <X className="w-3.5 h-3.5" />
              </motion.button>
            ))}
            <button
              onClick={clearAll}
              className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-brand-500 dark:hover:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Filter by tags"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {selectedTags.length === 0 
                ? 'Filter by tags...' 
                : `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} selected`
              }
            </span>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl shadow-2xl z-50 max-h-[60vh] overflow-hidden"
              role="listbox"
              aria-multiselectable="true"
            >
              {/* Search Input */}
              <div className="p-3 border-b border-neutral-200 dark:border-neutral-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tags..."
                    className="w-full pl-10 pr-4 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    aria-label="Search tags"
                  />
                </div>
              </div>

              {/* Tags List */}
              <div className="max-h-80 overflow-y-auto overscroll-contain p-2 space-y-1">
                {filteredTags.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    No tags found matching &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  filteredTags.map(tag => {
                    const isSelected = selectedTags.includes(tag)
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                          isSelected
                            ? 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'bg-brand-600 border-brand-600'
                            : 'border-neutral-300 dark:border-neutral-600'
                        }`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {tag}
                      </button>
                    )
                  })
                )}
              </div>

              {/* Action Footer */}
              <div className="p-3 border-t border-neutral-200 dark:border-neutral-700 flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium"
                >
                  Apply
                </button>
                <button
                  onClick={() => {
                    clearAll()
                    setIsOpen(false)
                  }}
                  className="px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm font-medium"
                >
                  Clear
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
