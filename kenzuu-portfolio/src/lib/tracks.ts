export type Track = {
  id: string
  title: string
  artist: string
  src: string
  duration?: number
}

export const tracks: Track[] = [
  {
    id: 'neon-dreams',
    title: 'Neon Dreams',
    artist: 'Kenzuu',
    src: '/music/neon-dreams.mp3',
    duration: 245,
  },
  {
    id: 'digital-horizon',
    title: 'Digital Horizon',
    artist: 'Kenzuu',
    src: '/music/digital-horizon.mp3',
    duration: 198,
  },
  {
    id: 'synthwave-nights',
    title: 'Synthwave Nights',
    artist: 'Kenzuu',
    src: '/music/synthwave-nights.mp3',
    duration: 312,
  },
  {
    id: 'cyberpunk-rain',
    title: 'Cyberpunk Rain',
    artist: 'Kenzuu',
    src: '/music/cyberpunk-rain.mp3',
    duration: 267,
  },
  {
    id: 'anime-opening-theme',
    title: 'Anime Opening Theme',
    artist: 'Kenzuu',
    src: '/music/anime-opening-theme.mp3',
    duration: 94,
  },
]
