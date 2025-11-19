import React from 'react'
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiFramer,
  SiThreedotjs,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiBlender,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { Box } from 'lucide-react'

interface TechIconProps {
  name: string
  className?: string
}

/**
 * TechIcon Component
 * 
 * Renders official brand logos for technologies and tools using react-icons.
 * Uses Simple Icons (Si*) for official brand logos.
 * Falls back to a generic icon if the technology is not found.
 */

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'React/Next.js': SiReact,
  'TypeScript': SiTypescript,
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'Framer Motion': SiFramer,
  'Three.js': SiThreedotjs,
  'Figma': SiFigma,
  'Adobe Photoshop': SiAdobephotoshop,
  'Adobe Illustrator': SiAdobeillustrator,
  'Adobe After Effects': SiAdobeaftereffects,
  'FL Studio': Box, // No official FL Studio icon, using fallback
  'Blender': SiBlender,
  'VS Code': VscCode,
  'Git': SiGit,
  'Docker': SiDocker,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'JavaScript': SiJavascript,
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-8 h-8" }) => {
  const IconComponent = techIconMap[name]
  
  if (IconComponent) {
    return <IconComponent className={className} />
  }
  
  // Fallback icon
  return <Box className={className} />
}
