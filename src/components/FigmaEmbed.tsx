'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface FigmaEmbedProps {
  embedUrl: string
  title: string
  previewImage?: string
}

export function FigmaEmbed({ embedUrl, title, previewImage }: FigmaEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Lazy load embed when it comes into view
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !showEmbed) {
          setShowEmbed(true)
        }
      },
      { rootMargin: '100px' } // Start loading 100px before it comes into view
    )

    observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [showEmbed])

  const handleIframeLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const extractFigmaUrl = (embedUrl: string): string => {
    // Extract the original Figma URL from the embed URL
    const match = embedUrl.match(/url=([^&]+)/)
    return match ? decodeURIComponent(match[1]) : embedUrl
  }

  const figmaUrl = extractFigmaUrl(embedUrl)

  return (
    <div ref={containerRef} className="space-y-6">
      <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
        Interactive Prototype
      </h2>

      {/* Embed Container */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800">
        {!showEmbed ? (
          /* Placeholder before lazy load */
          <div
            className="relative"
            style={{ paddingBottom: '75%', minHeight: '600px' }}
          >
            {previewImage ? (
              <Image
                src={previewImage}
                alt={`${title} preview`}
                fill
                className="object-cover"
                quality={85}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
              >
                <p className="text-white font-medium">Loading interactive prototype...</p>
                <Loader2 className="w-6 h-6 text-white animate-spin mx-auto" />
              </motion.div>
            </div>
          </div>
        ) : hasError ? (
          /* Error/Fallback State */
          <div
            className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
            style={{ paddingBottom: '75%', minHeight: '600px' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-brand-600 dark:text-brand-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  View Full Prototype
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                  For the best interactive experience, open this prototype directly in Figma
                </p>
              </div>
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:scale-105 font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                Open in Figma
              </a>
              {previewImage && (
                <Image
                  src={previewImage}
                  alt={`${title} preview`}
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg mt-6"
                  quality={85}
                />
              )}
            </div>
          </div>
        ) : (
          /* Iframe Embed */
          <div style={{ paddingBottom: '75%', position: 'relative', minHeight: '600px' }}>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={embedUrl}
              allowFullScreen
              title={`${title} Figma Prototype`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                touchAction: 'pan-y pan-x',
                WebkitOverflowScrolling: 'touch',
                pointerEvents: 'auto',
              }}
              allow="clipboard-read; clipboard-write; fullscreen"
            />
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-xl">
        <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center sm:text-left">
          <span className="font-medium">Interactive prototype:</span> Click and drag to explore the design
        </p>
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-700 dark:text-brand-300 hover:text-brand-900 dark:hover:text-brand-100 transition-colors whitespace-nowrap"
        >
          <ExternalLink className="w-4 h-4" />
          Open in Figma
        </a>
      </div>
    </div>
  )
}
