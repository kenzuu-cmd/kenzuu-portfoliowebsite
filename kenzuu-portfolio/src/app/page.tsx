import Link from 'next/link'
import { HeroAnimation } from '@/components/HeroAnimation'
import { personalInfo } from '@/lib/personal-info'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-50/20 via-transparent to-accent-50/10 dark:from-brand-950/30 dark:via-transparent dark:to-accent-950/20" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <HeroAnimation>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 tracking-wide uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-600 via-accent-500 to-brand-700 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        </HeroAnimation>
      </div>
    </main>
  )
}
