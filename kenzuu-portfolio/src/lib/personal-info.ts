/**
 * Personal Information Configuration
 * 
 * This file contains all personal information used across the portfolio.
 * Changes made here will automatically update throughout the site.
 * 
 * SOCIAL LINKS:
 * - Simply add or remove URLs from the 'social' object
 * - Supported platforms: github, linkedin, twitter, instagram, dribbble, behance, youtube, facebook
 * - Icons will automatically render with official brand logos
 * - Leave empty string or comment out platforms you don't use
 * - To add a new platform, add it to the interface and update SocialIcon.tsx with the SVG
 */

export interface PersonalInfo {
  name: string
  title: string
  description: string
  heroDescription: string
  email: string
  location: string
  resumeUrl?: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
    dribbble?: string
    behance?: string
    youtube?: string
    facebook?: string
    // Add more social platforms as needed - they will automatically appear on the site
  }
}

export const personalInfo: PersonalInfo = {
  name: "Kenzuu",
  title: "Creative Developer & Designer",
  description: "Creative developer portfolio showcasing innovative projects, technical skills, and design expertise. Specializing in modern web development, interactive animations, and user experience design.",
  heroDescription: "I create immersive digital experiences through programming, anime-inspired animations, and music production. Blending technology with creativity to build something extraordinary.",
  email: "kenji.devcodes@gmail.com",
  location: "Philippines",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/kenzuu-codes",
    // linkedin: "",
    twitter: "https://x.com/kenzuuGenga",
    // dribbble: "https://dribbble.com/kenzuu",
    instagram: "https://www.instagram.com/kenzuuarts/",
    // behance: "https://behance.net/kenzuu",
  }
}

// About page content
export const aboutContent = {
  intro: "I'm a multidisciplinary creative developer who thrives at the intersection of technology, art, and storytelling. My journey spans from crafting elegant code to creating immersive animations and producing atmospheric music. I believe the most compelling digital experiences emerge when technical precision meets creative expression, and I'm constantly exploring new ways to push the boundaries of what's possible in the digital realm.",
  timeline: [
    {
      year: '2019',
      title: 'Started Programming Journey',
      description: 'Began learning web development and discovered passion for creating digital experiences.',
      icon: 'Code2',
    },
    {
      year: '2020',
      title: 'Anime Animation Discovery',
      description: 'Explored 2D animation and motion graphics, drawing inspiration from anime aesthetics.',
      icon: 'Palette',
    },
    {
      year: '2021',
      title: 'Music Production',
      description: 'Started creating electronic music and soundscapes for multimedia projects.',
      icon: 'Music',
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Expanded skills to backend development and modern framework mastery.',
      icon: 'Zap',
    },
    {
      year: '2023',
      title: 'Creative Synthesis',
      description: 'Began combining programming, animation, and music into cohesive digital experiences.',
      icon: 'Sparkles',
    },
  ]
}

// Skills and technologies
export const skills = {
  frontend: [
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Sass/SCSS", "Framer Motion", "Three.js"
  ],
  backend: [
    "Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL",
    "Prisma", "Supabase", "Firebase"
  ],
  design: [
    "Figma", "Adobe Creative Suite", "Sketch", "Principle", "Framer",
    "UI/UX Design", "Prototyping", "Design Systems"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Vercel", "Netlify", "Docker",
    "Jest", "Cypress", "Webpack", "Vite"
  ]
}

export const techStack = [
  { name: 'React/Next.js', icon: 'Atom' },
  { name: 'TypeScript', icon: 'FileCode' },
  { name: 'Node.js', icon: 'Server' },
  { name: 'Python', icon: 'Binary' },
  { name: 'Framer Motion', icon: 'Film' },
  { name: 'Three.js', icon: 'Box' },
  { name: 'Figma', icon: 'Figma' },
  { name: 'Adobe Photoshop', icon: 'Image' },
  { name: 'Adobe Illustrator', icon: 'PenTool' },
  { name: 'Adobe After Effects', icon: 'Video' },
  { name: 'FL Studio', icon: 'Music2' },
  { name: 'Blender', icon: 'Boxes' },
  { name: 'VS Code', icon: 'Code' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'Docker', icon: 'Package' },
  { name: 'HTML5', icon: 'FileCode2' },
  { name: 'CSS3', icon: 'Palette' },
  { name: 'JavaScript', icon: 'Braces' },
]

// Experience (optional - can be used if needed)
export const experience = [
  {
    company: "Freelance",
    position: "Creative Developer",
    duration: "2022 - Present",
    description: "Building custom web applications and digital experiences for clients across various industries.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    company: "Design Studio",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    description: "Developed responsive websites and interactive prototypes for creative agency clients.",
    technologies: ["Vue.js", "Nuxt.js", "GSAP", "Webflow"]
  }
]