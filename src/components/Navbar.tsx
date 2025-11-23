'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

// Visual variant toggle: 'accent-bar' (Option A) or 'refined-pill' (Option B)
const MENU_STYLE_VARIANT: 'accent-bar' | 'refined-pill' = 'accent-bar'

const mobileMenuVariants: Variants = {
  closed: {
    x: '-100%',
    transition: {
      duration: 0.26,
      ease: [0.16, 0.84, 0.44, 1], // Custom cubic-bezier for smooth exit
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.26,
      ease: [0.16, 0.84, 0.44, 1], // Custom cubic-bezier for smooth entrance
    },
  },
}

const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03, // Reduced stagger for snappier feel (30ms)
      duration: 0.25,
      ease: [0.16, 0.84, 0.44, 1],
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
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced keyboard and focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        setIsOpen(false)
        // Return focus to hamburger button
        setTimeout(() => hamburgerButtonRef.current?.focus(), 50)
      }

      // Arrow key navigation within menu
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        const menuItems = mobileMenuRef.current?.querySelectorAll('a')
        if (!menuItems) return

        const currentIndex = Array.from(menuItems).findIndex(item => item === document.activeElement)
        let nextIndex = currentIndex

        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1
        }

        menuItems[nextIndex]?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      
      // Focus first menu item when menu opens (after animation)
      setTimeout(() => firstMenuItemRef.current?.focus(), 280)
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
    // Return focus to hamburger button
    setTimeout(() => hamburgerButtonRef.current?.focus(), 50)
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
              ref={hamburgerButtonRef}
              variants={shouldReduceMotion ? undefined : hamburgerVariants}
              animate={isOpen ? 'open' : 'closed'}
              onClick={toggleMenu}
              className="md:hidden relative min-h-[44px] min-w-[44px] h-11 w-11 rounded-lg border-2 border-neutral-200 bg-white/90 backdrop-blur-sm p-2 shadow-md transition-all hover:bg-neutral-50 hover:border-brand-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900/90 dark:hover:bg-neutral-800 dark:hover:border-brand-400 active:scale-95"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
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

      {/* Enhanced Backdrop with blur */}
      {isOpen && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black/42"
          style={{
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            WebkitTapHighlightColor: 'transparent',
            zIndex: 1100,
          }}
          aria-hidden="true"
        />
      )}

      {/* Enhanced Mobile Navigation Panel */}
      <motion.div
        ref={mobileMenuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-modal="true"
        variants={shouldReduceMotion ? undefined : mobileMenuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="md:hidden fixed inset-y-0 left-0 w-[min(320px,85vw)] bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        style={{
          willChange: isOpen ? 'transform' : 'auto',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          WebkitTapHighlightColor: 'transparent',
          zIndex: 1200,
        }}
      >
        {/* Glass effect overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="relative flex flex-col h-full pt-20 pb-6 px-5">
          {/* Close button for clarity */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex-1">
            <ul className="space-y-7" role="list">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                const isFirst = i === 0
                
                return (
                  <motion.li
                    key={link.href}
                    variants={shouldReduceMotion ? undefined : menuItemVariants}
                    custom={i}
                  >
                    <Link
                      ref={isFirst ? firstMenuItemRef : undefined}
                      href={link.href}
                      onClick={closeMenu}
                      className={`
                        group relative flex items-center min-h-[44px] px-4 py-3
                        text-lg font-medium transition-all duration-150
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950
                        ${isActive
                          ? 'text-brand-600 dark:text-brand-400'
                          : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400'
                        }
                      `}
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        ...(isActive && {
                          borderLeft: '4px solid var(--color-brand-600, #3768EF)',
                          paddingLeft: 'calc(1rem - 4px)',
                        }),
                      }}
                    >
                      <span className="relative">{link.label}</span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>

          {/* Menu footer with theme toggle */}
          <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Kenzuu Portfolio</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
