'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface MobileMenuPortalProps {
  children: React.ReactNode
}

/**
 * Portal component that renders mobile menu/backdrop directly to document.body
 * This prevents stacking context issues from page-level transforms/filters
 */
export function MobileMenuPortal({ children }: MobileMenuPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Only render portal on client-side after mount
  if (!mounted || typeof document === 'undefined') {
    return null
  }

  return createPortal(children, document.body)
}
