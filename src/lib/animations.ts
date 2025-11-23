export type Animation = {
  id: string
  title: string
  description: string
  technology: string[]
  previewGif: string
  codeSandboxUrl?: string
}

export const animations: Animation[] = [
  {
    id: 'morphing-character-faces',
    title: 'Morphing Character Faces',
    description:
      'Smooth facial expression transitions for anime characters using advanced interpolation techniques and custom shader effects.',
    technology: ['GLSL', 'Three.js', 'WebGL', 'Canvas API'],
    previewGif: '/assets/creations/animations/character-morphing.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/morphing-character-faces-xyz123',
  },
  {
    id: 'particle-music-visualizer',
    title: 'Particle Music Visualizer',
    description:
      'Real-time audio-reactive particle system that creates stunning visual effects synchronized with music beats and frequency analysis.',
    technology: ['Web Audio API', 'Canvas 2D', 'JavaScript', 'FFT Analysis'],
    previewGif: '/assets/creations/animations/music-visualizer.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/particle-music-visualizer-abc456',
  },
  {
    id: 'fluid-ui-transitions',
    title: 'Fluid UI Transitions',
    description:
      'Buttery smooth page transitions and component animations using physics-based motion and custom easing functions.',
    technology: [
      'Framer Motion',
      'React',
      'TypeScript',
      'CSS Custom Properties',
    ],
    previewGif: '/assets/creations/animations/ui-transitions.svg',
    codeSandboxUrl: 'https://codesandbox.io/s/fluid-ui-transitions-def789',
  },
  {
    id: 'procedural-wave-simulation',
    title: 'Procedural Wave Simulation',
    description:
      'Realistic water wave simulation using mathematical models and GPU-accelerated rendering for interactive ocean scenes.',
    technology: [
      'WebGL',
      'Vertex Shaders',
      'Fragment Shaders',
      'Noise Functions',
    ],
    previewGif: '/assets/creations/animations/wave-simulation.svg',
  },
]
