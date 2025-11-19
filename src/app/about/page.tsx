'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { SocialLinks } from '@/components/SocialLinks'
import { TechIcon } from '@/components/TechIcon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { aboutContent, techStack, personalInfo } from '@/lib/personal-info'

// Helper for timeline Lucide icons
const getIcon = (iconName: string): React.ComponentType<LucideProps> => {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[iconName]
  return IconComponent || Icons.Circle
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <SectionHeading
            title="About Me"
            subtext="Passionate creator at the intersection of technology and art"
          />
        </motion.div>

        {/* Intro */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {aboutContent.intro}
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
          aria-labelledby="timeline-heading"
        >
          <motion.h2
            variants={fadeInUp}
            id="timeline-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8"
          >
            Journey
          </motion.h2>
          <div className="space-y-8">
            {aboutContent.timeline.map((item) => {
              const IconComponent = getIcon(item.icon)
              return (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/50 rounded-lg flex items-center justify-center group-hover:bg-brand-200 dark:group-hover:bg-brand-800/50 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {item.year}
                      </time>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          aria-labelledby="tech-heading"
        >
          <motion.h2
            variants={fadeInUp}
            id="tech-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8"
          >
            Technologies & Tools
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech) => {
              return (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors group"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    <TechIcon name={tech.name} className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16"
          aria-labelledby="contact-heading"
        >
          <motion.h2
            variants={fadeInUp}
            id="contact-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8"
          >
            My Socials
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Details */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <Icons.Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    Email
                  </p>
                  <p className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex-shrink-0">
                  <Icons.MapPin className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    Location
                  </p>
                  <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Resume Download */}
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-4 p-4 bg-brand-50 dark:bg-brand-900/20 rounded-lg border border-brand-200 dark:border-brand-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Icons.Download className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                      Download Resume
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      PDF Format
                    </p>
                  </div>
                </a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                Connect with me
              </p>
              <SocialLinks />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
