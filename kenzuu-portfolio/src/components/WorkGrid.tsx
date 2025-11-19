'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { TagPill } from '@/components/ui/TagPill'
import { staggerContainer, fadeInUp } from '@/lib/motion'

interface WorkGridProps {
  projects: Project[]
  availableTags: string[]
}

export function WorkGrid({ projects, availableTags }: WorkGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All')

  // Memoize filtered projects to prevent recalculation on every render
  const filteredProjects = useMemo(() =>
    selectedTag === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag))
  , [selectedTag, projects])

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTag(tag)
  }, [])

  const handleProjectTagClick = useCallback((tag: string) => {
    setSelectedTag(tag)
  }, [])

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 justify-center"
      >
        <TagPill
          label="All"
          active={selectedTag === 'All'}
          onClick={() => handleTagClick('All')}
        />
        {availableTags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={selectedTag === tag}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={selectedTag} // Re-animate when filter changes
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
            No projects found for &quot;{selectedTag}&quot;
          </p>
        </motion.div>
      )}
    </div>
  )
}
