'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { TagPill } from '@/components/ui/TagPill'
import { MobileFilterSelect } from '@/components/MobileFilterSelect'
import { staggerContainer, fadeInUp } from '@/lib/motion'

interface WorkGridProps {
  projects: Project[]
  availableTags: string[]
}

export function WorkGrid({ projects, availableTags }: WorkGridProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Initialize selected tags from URL or default to empty array for multi-select
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tagsParam = searchParams.get('tags')
    return tagsParam ? tagsParam.split(',').filter(Boolean) : []
  })

  // Update URL when selected tags change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (selectedTags.length > 0) {
        params.set('tags', selectedTags.join(','))
      } else {
        params.delete('tags')
      }
      router.replace(`?${params.toString()}`, { scroll: false })
    }, 150)

    return () => clearTimeout(timeoutId)
  }, [selectedTags, router, searchParams])

  // Memoize filtered projects - show all if no tags selected, otherwise filter by ANY tag match
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects
    return projects.filter((project) =>
      selectedTags.some(tag => project.tags.includes(tag))
    )
  }, [selectedTags, projects])

  const handleDesktopTagClick = useCallback((tag: string) => {
    // Desktop single-select behavior
    setSelectedTags(prev => {
      if (prev.includes(tag) && prev.length === 1) {
        return [] // Deselect if it's the only one selected
      }
      return [tag] // Replace with new tag
    })
  }, [])

  const handleProjectTagClick = useCallback((tag: string) => {
    setSelectedTags([tag])
  }, [])

  const handleMobileTagsChange = useCallback((tags: string[]) => {
    setSelectedTags(tags)
  }, [])

  return (
    <div className="space-y-8">
      {/* Filter Bar - Mobile (≤768px): Compact multi-select dropdown */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="md:hidden"
      >
        <MobileFilterSelect
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagsChange={handleMobileTagsChange}
        />
      </motion.div>

      {/* Filter Bar - Desktop (>768px): Tag pills */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="hidden md:flex flex-wrap gap-2 justify-center"
      >
        <TagPill
          label="All"
          active={selectedTags.length === 0}
          onClick={() => setSelectedTags([])}
        />
        {availableTags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={selectedTags.includes(tag)}
            onClick={() => handleDesktopTagClick(tag)}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={selectedTags.join(',')} // Re-animate when filter changes
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={fadeInUp}>
            <ProjectCard project={project} onTagClick={handleProjectTagClick} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center py-12"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            No projects found for selected tags
          </p>
        </motion.div>
      )}
    </div>
  )
}
