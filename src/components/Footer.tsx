import Link from 'next/link'
import { personalInfo } from '@/lib/personal-info'
import { SocialLinks } from './SocialLinks'

const footerLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-4">
          {/* Top Row: Info and Navigation */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 w-full">
            <div className="flex flex-col items-center space-y-2 sm:items-start">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                Built with Next.js & Tailwind CSS
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex space-x-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom Row: Social Links */}
          <div className="flex justify-center w-full">
            <SocialLinks variant="compact" />
          </div>
        </div>
      </div>
    </footer>
  )
}
