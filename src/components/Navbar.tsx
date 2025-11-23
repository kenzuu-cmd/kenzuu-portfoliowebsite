'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
}

const hamburgerVariants: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 180,
  },
}

const lineVariants: Variants = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: 45,
    y: 6,
  },
}

const line2Variants: Variants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
}

const line3Variants: Variants = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
    rotate: -45,
    y: -6,
  },
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/animations', label: 'Animations' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm"
            onClick={closeMenu}
          >
            Kenzuu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 dark:bg-brand-400"
                      layoutId="activeTab"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button - Enhanced for small phones */}
            <motion.button
              variants={shouldReduceMotion ? undefined : hamburgerVariants}
              animate={isOpen ? 'open' : 'closed'}
              onClick={toggleMenu}
              className="md:hidden relative min-h-[44px] min-w-[44px] h-11 w-11 rounded-lg border-2 border-neutral-200 bg-white/90 backdrop-blur-sm p-2 shadow-md transition-all hover:bg-neutral-50 hover:border-brand-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900/90 dark:hover:bg-neutral-800 dark:hover:border-brand-400 active:scale-95"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex flex-col justify-center items-center h-full space-y-1.5">
                <motion.span
                  variants={shouldReduceMotion ? undefined : lineVariants}
                  className="block h-0.5 w-5 bg-neutral-800 dark:bg-neutral-200 origin-center rounded-full"
                />
                <motion.span
                  variants={shouldReduceMotion ? undefined : line2Variants}
                  className="block h-0.5 w-5 bg-neutral-800 dark:bg-neutral-200 rounded-full"
                />
                <motion.span
                  variants={shouldReduceMotion ? undefined : line3Variants}
                  className="block h-0.5 w-5 bg-neutral-800 dark:bg-neutral-200 origin-center rounded-full"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation */}
      <motion.div
        ref={mobileMenuRef}
        id="mobile-menu"
        variants={shouldReduceMotion ? undefined : mobileMenuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="md:hidden fixed inset-y-0 right-0 w-64 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-xl z-50"
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex-1 space-y-4">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  variants={shouldReduceMotion ? undefined : menuItemVariants}
                  custom={i}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                      isActive
                        ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 border-l-4 border-brand-600 dark:border-brand-400'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-brand-600 dark:hover:text-brand-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>
        </div>
      </motion.div>
    </nav>
  )
}
