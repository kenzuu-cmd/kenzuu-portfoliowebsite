/**
 * Creations data structure
 * Organized by category: Animations, Arts, Graphic Design, Other
 */

export type CreationCategory = 'animations' | 'arts' | 'graphic' | 'other'

export type CreationItem = {
  id: string
  title: string
  description: string
  category: CreationCategory
  technology?: string[]
  thumbnail: string
  href?: string
  codeSandboxUrl?: string
}

// Animations (migrated from existing animations)
export const ANIMATIONS: CreationItem[] = [
  {
    id: 'morphing-character-faces',
    title: 'Morphing Character Faces',
    description:
      'Smooth facial expression transitions for anime characters using advanced interpolation techniques and custom shader effects.',
    category: 'animations',
    technology: ['GLSL', 'Three.js', 'WebGL', 'Canvas API'],
    thumbnail: '/assets/creations/animations/character-morphing.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/morphing-character-faces-xyz123',
  },
  {
    id: 'particle-music-visualizer',
    title: 'Particle Music Visualizer',
    description:
      'Real-time audio-reactive particle system that creates stunning visual effects synchronized with music beats and frequency analysis.',
    category: 'animations',
    technology: ['Web Audio API', 'Canvas 2D', 'JavaScript', 'FFT Analysis'],
    thumbnail: '/assets/creations/animations/music-visualizer.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/particle-music-visualizer-abc456',
  },
  {
    id: 'fluid-ui-transitions',
    title: 'Fluid UI Transitions',
    description:
      'Buttery smooth page transitions and component animations using physics-based motion and custom easing functions.',
    category: 'animations',
    technology: [
      'Framer Motion',
      'React',
      'TypeScript',
      'CSS Custom Properties',
    ],
    thumbnail: '/assets/creations/animations/ui-transitions.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/fluid-ui-transitions-def789',
  },
  {
    id: 'procedural-wave-simulation',
    title: 'Procedural Wave Simulation',
    description:
      'Realistic water wave simulation using mathematical models and GPU-accelerated rendering for interactive ocean scenes.',
    category: 'animations',
    technology: [
      'WebGL',
      'Vertex Shaders',
      'Fragment Shaders',
      'Noise Functions',
    ],
    thumbnail: '/assets/creations/animations/wave-simulation.svg',
  },
]

// Arts (digital art, illustrations, paintings)
export const ARTS: CreationItem[] = [
  {
    id: 'generative-portrait',
    title: 'Generative Portrait Series',
    description:
      'AI-assisted portraits exploring the intersection of human creativity and machine learning in digital art.',
    category: 'arts',
    technology: ['Stable Diffusion', 'Procreate', 'Digital Painting'],
    thumbnail: '/assets/creations/arts/portrait-placeholder.jpg',
  },
  {
    id: 'abstract-exploration',
    title: 'Abstract Geometry',
    description:
      'Minimalist abstract compositions using geometric shapes and bold color palettes to evoke emotion and depth.',
    category: 'arts',
    technology: ['Adobe Illustrator', 'Figma', 'Vector Art'],
    thumbnail: '/assets/creations/arts/abstract-placeholder.jpg',
  },
]

// Graphic Design (branding, posters, layouts)
export const GRAPHIC: CreationItem[] = [
  {
    id: 'poster-series-neon',
    title: 'Neon Dreams Poster Series',
    description:
      'Cyberpunk-inspired poster designs featuring bold typography and vibrant neon color schemes.',
    category: 'graphic',
    technology: ['Adobe Photoshop', 'Typography', 'Color Theory'],
    thumbnail: '/assets/creations/graphic/poster-placeholder.jpg',
  },
  {
    id: 'brochure-modern-tech',
    title: 'Modern Tech Brochure',
    description:
      'Clean, professional brochure design for a tech startup, emphasizing whitespace and modern aesthetics.',
    category: 'graphic',
    technology: ['InDesign', 'Figma', 'Print Design'],
    thumbnail: '/assets/creations/graphic/brochure-placeholder.jpg',
  },
]

// Other (placeholders and experimental work)
export const OTHER: CreationItem[] = [
  {
    id: 'experimental-placeholder',
    title: 'Experimental Projects',
    description:
      'Coming soon: experimental works, prototypes, and creative explorations that don\'t fit traditional categories.',
    category: 'other',
    technology: ['Various'],
    thumbnail: '/assets/creations/other/placeholder.png',
  },
]

// Combined array for "All" filter
export const ALL_CREATIONS: CreationItem[] = [
  ...ANIMATIONS,
  ...ARTS,
  ...GRAPHIC,
  ...OTHER,
]

// Category metadata for UI
export const CATEGORIES = [
  { id: 'all' as const, label: 'All', count: ALL_CREATIONS.length },
  { id: 'animations' as const, label: 'Animations', count: ANIMATIONS.length },
  { id: 'arts' as const, label: 'Arts', count: ARTS.length },
  { id: 'graphic' as const, label: 'Graphic Design', count: GRAPHIC.length },
  { id: 'other' as const, label: 'Other', count: OTHER.length },
] as const

export type CategoryId = typeof CATEGORIES[number]['id']

// Helper to get items by category
export function getCreationsByCategory(category: CategoryId): CreationItem[] {
  switch (category) {
    case 'all':
      return ALL_CREATIONS
    case 'animations':
      return ANIMATIONS
    case 'arts':
      return ARTS
    case 'graphic':
      return GRAPHIC
    case 'other':
      return OTHER
    default:
      return ALL_CREATIONS
  }
}
