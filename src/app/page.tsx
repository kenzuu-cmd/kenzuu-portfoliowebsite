'use client'

import Link from 'next/link'
import { HeroAnimation } from '@/components/HeroAnimation'
import { personalInfo } from '@/lib/personal-info'
import { useRef } from 'react'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section 
      className="hero"
      style={{
        position: 'relative',
        height: 'calc(100vh - var(--header-height))',
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Hero Inner Container - Responsive Grid */}
      <div 
        className="heroInner"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(min(100%, 440px), 46%) minmax(0, 54%)',
          gap: 'clamp(3rem, 5vw, 6rem)',
          alignItems: 'center',
          maxWidth: '1680px',
          margin: '0 auto',
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingLeft: 'clamp(2rem, 6vw, 8rem)',
          paddingRight: 'clamp(2rem, 6vw, 8rem)',
          paddingTop: 'clamp(2rem, 4vh, 4rem)',
          paddingBottom: 'clamp(2rem, 4vh, 4rem)',
        }}
      >
        {/* LEFT COLUMN: Text Content - Aligned with header brand "Kenzuu" */}
        <div
          className="heroTextCol"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'clamp(1rem, 2vh, 1.5rem)',
            zIndex: 20,
            position: 'relative',
            maxWidth: '100%',
            minWidth: 0,
          }}
        >
          <HeroAnimation>
            {/* Construction banner */}
            <div 
              className="inline-block px-6 py-2.5 rounded-lg" 
              style={{ 
                backgroundColor: 'rgba(255, 193, 7, 0.18)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid var(--hero-banner-warning)',
                boxShadow: '0 0 16px rgba(255, 193, 7, 0.25)',
                marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
              }}
            >
              <p className="text-sm font-bold" style={{ color: 'var(--hero-banner-warning)' }}>
                🚧 Under Construction - Some features are still being refined
              </p>
            </div>

            {/* Welcome tagline */}
            <p 
              className="text-sm uppercase font-semibold heroTagline" 
              style={{ 
                letterSpacing: '0.2em',
                marginBottom: 'clamp(1rem, 2vh, 1.25rem)',
              }}
            >
              Welcome to my portfolio
            </p>

            {/* Brand name heading - H1 for SEO */}
            <h1 
              className="font-display font-black uppercase heroTitle"
            >
              {personalInfo.name}
            </h1>

            {/* Description */}
            <p 
              className="leading-relaxed heroDescription" 
              style={{ 
                opacity: 0.92,
                maxWidth: '46ch',
                fontSize: 'clamp(0.95rem, 1.05rem, 1.075rem)',
                lineHeight: 1.55,
                marginBottom: 'clamp(2rem, 4vh, 2.5rem)',
              }}
            >
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 heroButtonGroup">
              <Link
                href="/work"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 1.4rem',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: 'var(--hero-accent-blue)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hero-accent-blue-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(55, 104, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hero-accent-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(75, 123, 255, 0.5)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 1.4rem',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--hero-accent-blue)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--hero-accent-blue)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#132343';
                  e.currentTarget.style.borderColor = 'var(--hero-accent-blue-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--hero-accent-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(75, 123, 255, 0.5)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contact
              </Link>
            </div>
          </HeroAnimation>
        </div>

        {/* RIGHT AREA: Animation container with gradient backdrop and alpha transparency */}
        <HeroAnimation>
          <div 
            className="heroAnimation" 
            style={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              /* Responsive container with aspect-ratio preservation */
              width: '100%',
              maxWidth: 'min(100%, 800px)',
              height: 'auto',
              aspectRatio: '9 / 16',
              overflow: 'visible',
              gridColumn: '2',
              marginLeft: 'clamp(-1rem, -2vw, -3rem)',
              marginBottom: 'clamp(-8rem, -10vh, -12rem)',
            }}
          >
            {/* Gradient backdrop behind animation - subtle white/blue glow */}
            <div
              className="heroAnimationBackdrop"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 40%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              aria-hidden="true"
            />
            
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/hero home page/hero page fallback.png"
              aria-hidden="true"
              className="heroAnimationVideo"
              style={{
                position: 'relative',
                /* Consistent sizing using viewport-based units with constraints */
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                /* Maintain aspect ratio and natural sizing */
                aspectRatio: '9 / 16',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                /* Simple transform without aggressive scaling */
                transform: 'translateY(0)',
                transformOrigin: 'center bottom',
                zIndex: 1,
              }}
            >
              <source src="/hero home page/hero page animation.webm" type="video/webm" />
              <source src="/hero home page/hero page animation.mp4" type="video/mp4" />
            </video>
          </div>
        </HeroAnimation>
      </div>

      {/* Responsive layout and light mode styles */}
      <style jsx>{`
        /* Base heroTitle styles */
        .heroTitle {
          font-size: clamp(2.8rem, 6.5vw, 4.8rem);
          line-height: 1.05;
          background: linear-gradient(90deg, #D9E2F7 0%, #648DFF 55%, #D9E2F7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 0.5rem rgba(100, 141, 255, 0.4));
          letter-spacing: -0.02em;
          margin-bottom: clamp(1.25rem, 3vh, 1.75rem);
        }

        /* Light mode overrides - title gradient and backdrop */
        @media (prefers-color-scheme: light) {
          .heroTitle {
            background: none !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            -webkit-text-fill-color: #0f172a !important;
            color: #0f172a !important;
            filter: none !important;
            text-shadow: none !important;
          }
          
          .heroAnimationBackdrop {
            background: radial-gradient(ellipse at center, rgba(55, 104, 239, 0.06) 0%, rgba(55, 104, 239, 0.03) 40%, transparent 70%) !important;
          }
        }

        /* ============================================
           BOUNDED RESPONSIVE VIDEO/ANIMATION SYSTEM
           ============================================
           Key principles:
           1. Use consistent aspect-ratio and max-width constraints
           2. This prevents overflow and zooming on different screen sizes
           3. Works naturally on 16:9, 16:10, and other aspect ratios
        */

        /* Extra Large Desktops (1600px+): Larger but bounded */
        @media (min-width: 1600px) {
          .heroInner {
            grid-template-columns: minmax(500px, 45%) minmax(0, 55%) !important;
            padding-left: clamp(3rem, 8vw, 10rem) !important;
            padding-right: clamp(3rem, 8vw, 10rem) !important;
          }
          
          .heroAnimation {
            max-width: min(100%, 900px) !important;
            margin-left: clamp(-1.5rem, -2.5vw, -3.5rem) !important;
            margin-bottom: clamp(-10rem, -12vh, -14rem) !important;
          }
          
          .heroAnimationVideo {
            max-width: 900px !important;
          }
        }

        /* Large Desktop (1200px - 1599px): Standard size */
        @media (min-width: 1200px) and (max-width: 1599px) {
          .heroInner {
            grid-template-columns: minmax(440px, 46%) minmax(0, 54%) !important;
            padding-left: clamp(2.5rem, 7vw, 8rem) !important;
            padding-right: clamp(2.5rem, 7vw, 8rem) !important;
          }
          
          .heroAnimation {
            max-width: min(100%, 800px) !important;
            margin-left: clamp(-1rem, -2vw, -3rem) !important;
            margin-bottom: clamp(-8rem, -10vh, -12rem) !important;
          }
          
          .heroAnimationVideo {
            max-width: 800px !important;
          }
        }
        
        /* Standard Desktop (1024px - 1199px): Slightly reduced */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .heroInner {
            grid-template-columns: minmax(400px, 47%) minmax(0, 53%) !important;
            gap: clamp(2.5rem, 4vw, 4rem) !important;
            padding-left: clamp(2rem, 6vw, 6rem) !important;
            padding-right: clamp(2rem, 6vw, 6rem) !important;
          }
          
          .heroAnimation {
            max-width: min(100%, 700px) !important;
            margin-left: clamp(-0.75rem, -1.5vw, -2.5rem) !important;
            margin-bottom: clamp(-7rem, -9vh, -11rem) !important;
          }
          
          .heroAnimationVideo {
            max-width: 700px !important;
          }
        }
        
        /* Tablet Landscape (768px - 1023px): Balanced for tablets */
        @media (min-width: 768px) and (max-width: 1023px) {
          .heroInner {
            grid-template-columns: minmax(340px, 48%) minmax(0, 52%) !important;
            gap: clamp(2rem, 3.5vw, 3rem) !important;
            padding-left: clamp(2rem, 5vw, 4rem) !important;
            padding-right: clamp(2rem, 5vw, 4rem) !important;
          }
          
          .heroAnimation {
            max-width: min(100%, 600px) !important;
            margin-left: clamp(-0.5rem, -1vw, -2rem) !important;
            margin-bottom: clamp(-6rem, -8vh, -10rem) !important;
          }
          
          .heroAnimationVideo {
            max-width: 600px !important;
          }
          
          .heroTextCol {
            gap: clamp(0.75rem, 1.5vh, 1.25rem) !important;
          }
        }
        
        /* Tablet & Mobile (≤960px): Video as background layer with content overlay */
        @media (max-width: 960px) {
          .hero {
            height: 100vh !important;
            min-height: 100vh !important;
            max-height: 100vh !important;
            align-items: center !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            overflow: hidden !important;
          }
          
          .heroInner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0 !important;
            padding: 2.5rem 2rem !important;
            height: 100% !important;
            position: relative !important;
            z-index: 10 !important;
          }
          
          .heroTextCol {
            text-align: center !important;
            align-items: center !important;
            z-index: 30 !important;
            position: relative !important;
            max-width: 640px !important;
          }
          
          /* Center buttons on mobile/tablet */
          .heroButtonGroup {
            justify-content: center !important;
            width: 100% !important;
          }
          
          /* Video becomes absolute positioned full-screen background */
          .heroAnimation {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
            z-index: 1 !important;
            margin: 0 !important;
            grid-column: unset !important;
            pointer-events: none !important;
            aspect-ratio: unset !important;
          }
          
          .heroAnimationVideo {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            min-height: 100vh !important;
            object-fit: cover !important;
            object-position: center !important;
            opacity: 0.35 !important;
            filter: none !important;
            aspect-ratio: unset !important;
          }
          
          /* Hide backdrop on mobile/tablet */
          .heroAnimationBackdrop {
            display: none !important;
          }
        }
        
        /* Tablet Landscape (768px - 960px): Slightly larger text */
        @media (min-width: 768px) and (max-width: 960px) {
          .heroInner {
            padding: 3rem 2.5rem !important;
          }
          
          .heroTextCol {
            max-width: 700px !important;
          }
          
          .heroTitle {
            font-size: clamp(2.8rem, 7vw, 3.8rem) !important;
          }
        }
        
        /* Mobile Landscape & Portrait (480px - 767px): Medium text */
        @media (min-width: 480px) and (max-width: 767px) {
          .heroInner {
            padding: 2.5rem 2rem !important;
          }
          
          .heroTextCol {
            max-width: 580px !important;
          }
          
          .heroTitle {
            font-size: clamp(2.4rem, 8vw, 3.2rem) !important;
          }
          
          .heroAnimationVideo {
            opacity: 0.32 !important;
          }
        }

        /* Small Mobile (<480px): Compact text */
        @media (max-width: 479px) {
          .heroInner {
            padding: 2rem 1.5rem !important;
          }
          
          .heroTextCol {
            max-width: 100% !important;
            gap: clamp(0.5rem, 1vh, 0.875rem) !important;
          }
          
          .heroTitle {
            font-size: clamp(2rem, 10vw, 2.8rem) !important;
          }
          
          .heroAnimationVideo {
            opacity: 0.3 !important;
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .heroAnimationVideo {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
