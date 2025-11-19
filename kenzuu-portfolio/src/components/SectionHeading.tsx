'use client'

import { type ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode | string
  subtext?: string
  align?: 'left' | 'center'
  animate?: boolean
  className?: string
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeOnlyVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = 'left',
  animate = false,
  className = '',
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion ? fadeOnlyVariants : fadeUpVariants

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  }

  const containerClasses = `${alignmentClasses[align]} ${className}`

  if (animate) {
    return (
      <div className={containerClasses}>
        {eyebrow && (
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-sm font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-2"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          {title}
        </motion.h2>

        {subtext && (
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      {eyebrow && (
        <p className="text-sm font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-2">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        {title}
      </h2>

      {subtext && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          {subtext}
        </p>
      )}
    </div>
  )
}
