'use client'

import { useState, useEffect, useMemo } from 'react'
import { projects } from '@/lib/projects'
import { WorkGrid } from '../../components/WorkGrid'
import { ProjectCardSkeleton } from '@/components/ProjectCardSkeleton'

export default function WorkPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Derive unique tags from all projects - memoized to prevent recalculation
  const allTags = useMemo(() => 
    Array.from(
      new Set(projects.flatMap((project) => project.tags))
    ).sort()
  , [])

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            My Work
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of projects showcasing programming, animation, and
            creative development across various technologies.
          </p>
        </header>

        {isLoading ? (
          <div className="space-y-8">
            {/* Filter Bar Skeleton */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"
                />
              ))}
            </div>

            {/* Projects Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : (
          <WorkGrid projects={projects} availableTags={allTags} />
        )}
      </div>
    </main>
  )
}
