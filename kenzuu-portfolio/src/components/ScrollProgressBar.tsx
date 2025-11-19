'use client'

import { useEffect, useState, useRef } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef<number>(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

      setScrollProgress(Math.min(100, Math.max(0, progress)))
      ticking.current = false
    }

    const requestTick = () => {
      if (!ticking.current) {
        rafRef.current = requestAnimationFrame(updateScrollProgress)
        ticking.current = true
      }
    }

    const handleScroll = () => {
      requestTick()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial calculation
    requestTick()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-75 ease-out origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
    </div>
  )
}
