import { type Variants } from 'framer-motion'

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const createVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    const reduced: Variants = {}
    Object.keys(variants).forEach((key) => {
      const variant = variants[key]
      if (
        typeof variant === 'object' &&
        variant !== null &&
        !Array.isArray(variant)
      ) {
        reduced[key] = {
          opacity: variant.opacity ?? 1,
          transition: variant.transition,
        }
      } else {
        reduced[key] = variant
      }
    })
    return reduced
  }
  return variants
}

export const fadeInUp: Variants = createVariants({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
})

export const slideInLeft: Variants = createVariants({
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
})

export const scaleIn: Variants = createVariants({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
})

export const staggerContainer: Variants = createVariants({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
})
