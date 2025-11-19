'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const sunVariants: Variants = {
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hidden: {
    scale: 0.5,
    rotate: 90,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

const moonVariants: Variants = {
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hidden: {
    scale: 0.5,
    rotate: -90,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

const buttonVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative h-9 w-9 rounded-md border border-neutral-200 bg-white p-2 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
        aria-label="Toggle theme"
      >
        <div className="h-4 w-4" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      variants={shouldReduceMotion ? undefined : buttonVariants}
      whileHover={shouldReduceMotion ? undefined : 'hover'}
      whileTap={shouldReduceMotion ? undefined : 'tap'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative h-9 w-9 rounded-md border border-neutral-200 bg-white p-2 shadow-sm transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="relative h-4 w-4">
        <motion.svg
          className="absolute inset-0 h-4 w-4 text-neutral-800 dark:text-neutral-200"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          variants={shouldReduceMotion ? undefined : sunVariants}
          animate={isDark ? 'hidden' : 'visible'}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </motion.svg>
        <motion.svg
          className="absolute inset-0 h-4 w-4 text-neutral-800 dark:text-neutral-200"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          variants={shouldReduceMotion ? undefined : moonVariants}
          animate={isDark ? 'visible' : 'hidden'}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </motion.svg>
      </div>
    </motion.button>
  )
}
