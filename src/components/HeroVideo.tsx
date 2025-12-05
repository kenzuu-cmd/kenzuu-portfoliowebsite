'use client'

import { useRef, useEffect } from 'react'
import styles from './HeroVideo.module.css'

interface HeroVideoProps {
  /**
   * Primary video source (MP4 recommended for compatibility)
   */
  src: string
  /**
   * Optional WebM source for modern browsers
   */
  webmSrc?: string
  /**
   * Fallback poster image (shown before video loads or if video fails)
   */
  poster: string
  /**
   * Alt text for accessibility (describes the video content)
   */
  alt?: string
  /**
   * CSS class to apply to the container
   */
  className?: string
  /**
   * Object position for the video (default: 'center')
   * Use 'right center' to anchor character animations to the right
   */
  objectPosition?: string
}

/**
 * HeroVideo Component
 * 
 * A production-ready, decorative hero video component that:
 * - Prevents letterboxing/zoom-out issues across different devices
 * - Always fills its container using object-fit: cover
 * - Includes browser compatibility workarounds
 * - Supports both MP4 and WebM formats
 * - Is purely decorative (pointer-events: none, aria-hidden)
 * 
 * @example
 * ```tsx
 * <HeroVideo
 *   src="/hero home page/hero page animation.mp4"
 *   webmSrc="/hero home page/hero page animation.webm"
 *   poster="/hero home page/hero page fallback.png"
 *   alt="Animated character illustration"
 *   objectPosition="right center"
 * />
 * ```
 */
export function HeroVideo({
  src,
  webmSrc,
  poster,
  alt = 'Decorative hero animation',
  className = '',
  objectPosition = 'center',
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    /**
     * Workaround for browsers that need explicit play() after load
     * Some school computers/browsers pause autoplay until user interaction
     */
    const handleLoadedMetadata = () => {
      // Force video to respect object-fit immediately
      video.style.objectFit = 'cover'
      video.style.objectPosition = objectPosition
      
      // Attempt to play (catches and ignores errors silently)
      video.play().catch(() => {
        // Autoplay blocked - video will play on user interaction
      })
    }

    const handleCanPlay = () => {
      // Ensure video maintains aspect ratio after buffering
      if (video.paused) {
        video.play().catch(() => {})
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)

    // Initial play attempt
    if (video.readyState >= 2) {
      handleLoadedMetadata()
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [objectPosition])

  return (
    <div className={`${styles.container} ${className}`}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
        style={{
          objectPosition,
        }}
      >
        {/* WebM first for modern browsers (better compression) */}
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        {/* MP4 fallback for older browsers/devices */}
        <source src={src} type="video/mp4" />
        
        {/* Fallback for browsers that don't support video tag */}
        <img src={poster} alt={alt} className={styles.fallbackImage} />
      </video>
    </div>
  )
}
