'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Project } from '@/lib/projects'
import { TagPill } from './ui/TagPill'
import { memo, useCallback } from 'react'

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

interface ProjectCardProps {
  project: Project
  onTagClick?: (tag: string) => void
}

function ProjectCardComponent({ project, onTagClick }: ProjectCardProps) {
  const handleCardClick = useCallback(() => {
    window.location.href = `/work/${project.slug}`
  }, [project.slug])

  const handleTagClick = useCallback((tag: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onTagClick?.(tag)
  }, [onTagClick])

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative h-full"
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
      
      {/* Card Container */}
      <div
        onClick={handleCardClick}
        className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 h-full flex flex-col cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-brand-300 dark:group-hover:border-brand-700"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
          <div className="aspect-video relative w-full">
            {/* Project Image */}
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-500 via-purple-500 to-accent-500" />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <button
                key={tag}
                type="button"
                onClick={(e) => handleTagClick(tag, e)}
                className="inline-block"
              >
                <TagPill
                  label={tag}
                  className="cursor-pointer hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-colors"
                />
              </button>
            ))}
          </div>

          {/* Footer - pushed to bottom */}
          <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            {/* External Links */}
            <div className="flex gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* View More Link */}
            <div className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export const ProjectCard = memo(ProjectCardComponent)
