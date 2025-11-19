import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { inter, jetbrainsMono } from './fonts'
import { personalInfo } from '@/lib/personal-info'
import './globals.css'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kenzuu-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${personalInfo.name} Portfolio`,
    default: `${personalInfo.name} Portfolio - ${personalInfo.title}`,
  },
  description: personalInfo.description,
  keywords: [
    'developer',
    'portfolio',
    'web development',
    'design',
    'creative',
    'frontend',
    'fullstack',
    'Next.js',
    'React',
    'TypeScript',
    'UI/UX',
  ],
  authors: [{ name: personalInfo.name, url: baseUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: `${personalInfo.name} Portfolio - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} Portfolio - ${personalInfo.title}`,
    description: personalInfo.description,
    creator: '@kenzuu',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: personalInfo.name,
      url: baseUrl,
      sameAs: Object.values(personalInfo.social).filter(Boolean),
      jobTitle: personalInfo.title,
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: `${personalInfo.name} Portfolio`,
      description: personalInfo.description,
      publisher: {
        '@id': `${baseUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <div className="relative min-h-screen flex flex-col">
            <main id="main" className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
