'use client'

import { personalInfo } from '@/lib/personal-info'
import { SocialIcon, socialConfig } from './SocialIcon'
import { ExternalLink } from 'lucide-react'

interface SocialLinksProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function SocialLinks({ variant = 'default', className = '' }: SocialLinksProps) {
  // Get all non-empty social links from personalInfo
  const socialLinks = Object.entries(personalInfo.social)
    .filter(([_, url]) => url && url.trim() !== '')
    .map(([platform, url]) => ({
      platform,
      url: url!,
      label: socialConfig[platform]?.label || platform.charAt(0).toUpperCase() + platform.slice(1),
    }))

  if (socialLinks.length === 0) {
    return null
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socialLinks.map(({ platform, url, label }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <SocialIcon platform={platform} className="w-5 h-5" />
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 gap-3 ${className}`}>
      {socialLinks.map(({ platform, url, label }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors group"
        >
          <div className="text-neutral-700 dark:text-neutral-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            <SocialIcon platform={platform} className="w-6 h-6" />
          </div>
          <span className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {label}
          </span>
          <ExternalLink className="w-4 h-4 ml-auto text-neutral-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
        </a>
      ))}
    </div>
  )
}
