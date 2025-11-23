import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creations',
  description: 'A showcase of creative work spanning animations, digital art, and graphic design experiments.',
  openGraph: {
    title: 'Creations | Kenzuu Portfolio',
    description: 'Browse my creative work including animations, digital art, and graphic design projects.',
    type: 'website',
  },
}

export default function CreationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
