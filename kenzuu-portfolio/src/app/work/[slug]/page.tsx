'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ExternalLink, Github, ArrowLeft, Calendar, Wrench } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { TagPill } from '@/components/ui/TagPill'
import { motion } from 'framer-motion'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex(p => p.slug === slug)
  const role = projectIndex === 0 || projectIndex === 1 ? 'Designer & Developer' : 'Full Stack Developer'
  const type = projectIndex === 0 ? 'UI/UX Design' : projectIndex === 1 ? 'E-commerce Platform' : 'Web Application'

  return (
    <main className="relative bg-white dark:bg-neutral-950 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </a>
        </div>
      </div>

      {/* Hero Section with Parallax */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.title}
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </motion.p>

            {/* Meta Info Pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{role}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <Wrench className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{type}</span>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center mb-10">
              {project.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:scale-105 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:border-brand-600 dark:hover:border-brand-400 transition-all hover:shadow-lg font-medium"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Cover Image with Device Mockup */}
          {project.coverImage && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group">
                {/* Device Frame Shadow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Device Frame */}
                <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-3 rounded-2xl shadow-2xl">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-neutral-950 rounded-t-xl border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded text-xs text-neutral-600 dark:text-neutral-400">
                        {project.liveUrl || 'Preview'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden rounded-b-xl bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      priority
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                About This Project
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                  {project.fullDescription || project.description}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Tools & Technologies */}
          {project.tools && project.tools.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-6 py-3 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:scale-105 transition-all font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Figma Embed */}
          {project.figmaEmbed && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Interactive Prototype
                </h2>
                <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800">
                  <div style={{ paddingBottom: '75%', position: 'relative', minHeight: '600px' }}>
                    <iframe
                      src={project.figmaEmbed}
                      allowFullScreen
                      title={`${project.title} Figma Prototype`}
                      style={{ 
                        border: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                      allow="clipboard-read; clipboard-write"
                    />
                  </div>
                </div>
                <p className="text-center text-neutral-600 dark:text-neutral-400">
                  Interactive Figma prototype – Click and explore the design
                </p>
              </div>
            </motion.section>
          )}

          {/* Project Gallery */}
          {project.images && project.images.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.images.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      {/* Glow Effect */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-brand-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      
                      {/* Image Container */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Navigation Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-neutral-200 dark:border-neutral-800"
          >
            <a
              href="/work"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:gap-3 transition-all group font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>View All Projects</span>
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
