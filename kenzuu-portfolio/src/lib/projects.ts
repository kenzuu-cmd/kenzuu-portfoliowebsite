export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  coverImage?: string
  figmaEmbed?: string
  tools?: string[]
  images?: string[]
  fullDescription?: string
}

export const projects: Project[] = [
  {
    slug: 'sams-portal-redesign',
    title: 'ACT SAMS Portal Redesign',
    description:
      'Mobile-first student portal redesign for Asian College of Technology. Features 25+ screens with clean layouts and intuitive navigation optimized for one-handed mobile use.',
    fullDescription:
      'Project Overview\n\nThis project is a mobile-first redesign of the Student Academic Management System portal for Asian College of Technology. The goal was to create a clean and easy to use interface that helps students access important services like grades, clearance status, financial information, document requests, and scholarships directly from their phones.\n\nProblem\n\nThe existing portal was difficult to use on mobile devices. Students found it hard to navigate and locate the features they needed most. The interface was cluttered and not designed for small screens, making everyday tasks frustrating.\n\nSolution\n\nI designed over 25 mobile screens in Figma that put student needs first. The new design uses a simple navigation system, clear visual hierarchy, and card-based layouts that work well on phones. Each screen focuses on specific tasks to avoid overwhelming users with too much information at once.\n\nKey Features\n\n- Login and dashboard screens optimized for 390 x 844 pixel displays\n- Quick Actions section for one-tap access to common tasks\n- Grade tracking, clearance management, and financial services pages\n- Document request system and library access interface\n- Scholarship announcements and notification cards\n- Sliding navigation pattern for smooth transitions between sections\n\nDesign Decisions\n\nI used a blue color scheme for professionalism and readability. The Inter font was chosen for its clarity on small screens. All buttons and interactive elements have enough spacing to work well with touch input. High contrast text ensures good readability in different lighting conditions.\n\nTools and Deliverables\n\nCreated using Figma with a complete design system including reusable components. The prototype demonstrates how users would navigate through different features. All screens are production-ready and include detailed specifications for developers.\n\nOutcome\n\nThis redesign shows how a mobile student portal can combine multiple services into one simple interface. The design makes complex academic tasks easier to complete on a phone and provides a foundation for future development.',
    tags: ['UI/UX Design', 'Figma', 'Prototyping'],
    tools: ['Figma'],
    coverImage: '/projects/Sams Portal Redesign in Figma/Sams Portal.jpg',
    images: [
      '/projects/Sams Portal Redesign in Figma/Sams Portal.jpg',
      '/projects/Sams Portal Redesign in Figma/Sams Portal2.jpg',
      '/projects/Sams Portal Redesign in Figma/Sams Portal3.jpg',
    ],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/uJap9ocm5FMf6v0jIWhIap/ACT-SAMS-REDESIGNED?node-id=38-632&scaling=scale-down&page-id=0:1&starting-point-node-id=38:632',
  },
  {
    slug: 'the-weeb-den-ecommerce',
    title: 'Weeb Den E-commerce',
    description:
      'Full-stack e-commerce platform for Japanese manga and anime collectibles. Built with HTML5, CSS3, and JavaScript featuring dynamic product loading and persistent shopping cart.',
    fullDescription:
      'Project Overview\n\nThe Weeb Den is an e-commerce website built for a web development course. It specializes in selling Japanese manga, light novels, and anime collectibles. The project demonstrates front-end web development skills including responsive design, interactive features, and modern web standards.\n\nTechnical Stack\n\nBuilt using HTML5 for structure, CSS3 for styling, and JavaScript for interactivity. The site uses Bootstrap 5.3.2 framework for responsive layouts and components. Font Awesome 6.4.0 provides icons throughout the interface. Custom Google Fonts including Inter and Noto Sans JP ensure good readability and support for Japanese characters.\n\nMain Features\n\nThe homepage includes an image carousel that automatically rotates through manga collection images every 4 seconds. A fixed navigation bar stays visible as users scroll, with active page indicators and a shopping cart badge showing item count. The featured products section loads dynamically using JavaScript.\n\nThe shopping cart system uses browser storage to remember items even after closing the page. Users can add products, view their cart, and adjust quantities across different pages. Product browsing includes category filters, search functionality, and detailed product cards showing images, descriptions, prices, and stock status.\n\nUser Interface\n\nThe design uses a card-based layout with hover effects for visual feedback. Trust indicators on the homepage show 500+ products, 5000+ customers, and a 4.9 star rating. Key features highlighted include authentic imports, rare collections, fast delivery, and 24/7 support.\n\nAdditional Features\n\nNewsletter subscription with email validation, contact form, and call-to-action sections throughout the site. Consistent branding with custom logo and favicon. Gradient backgrounds and accent colors create visual interest.\n\nSite Structure\n\nMultiple pages include home, product catalog, about page, contact form, shopping cart, privacy policy, and terms of service. All pages maintain consistent navigation and footer elements.\n\nDeployment\n\nHosted on GitHub Pages with Git version control. The site uses semantic HTML5 markup for better accessibility, includes ARIA labels where needed, and has meta descriptions for search engine optimization. Responsive design works on all device sizes from phones to desktop computers.\n\nLearning Outcomes\n\nThis project demonstrates practical web development skills including building a complete e-commerce interface, implementing interactive features with JavaScript, creating responsive layouts, and deploying a website to a live hosting platform.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Font Awesome', 'GitHub Pages'],
    coverImage: '/projects/The Weeb Den E-commerce/weebden1.png',
    images: [
      '/projects/The Weeb Den E-commerce/weebden1.jpg',
      '/projects/The Weeb Den E-commerce/weebden2.jpg',
      '/projects/The Weeb Den E-commerce/weebden3.jpg',
    ],
    repoUrl: 'https://github.com/kenzuu-codes/kenzuu_theweebdenshop',
    liveUrl: 'https://kenzuu-codes.github.io/kenzuu_theweebdenshop/',
  },
  {
    slug: 'anime-intelligence-chatbot',
    title: 'Anime Intelligence Chatbot',
    description:
      'AI-powered anime assistant with OpenAI integration. Provides expert insights on anime and manga with quick-access topic buttons and dark/light theme support.',
    fullDescription:
      'Project Overview\n\nAnime Intelligence is an AI-powered chatbot designed to help anime and manga fans. Built using OpenAI technology, this web application answers questions and provides recommendations about anime series, characters, studios, voice actors, and Japanese pop culture.\n\nCore Features\n\nThe chatbot connects to OpenAI API to provide detailed responses about anime topics. Users can ask about series information, character details, plot discussions, animation studios, soundtracks, and streaming availability. The AI is specifically trained to act as an anime expert, giving accurate and helpful answers.\n\nUser Interface\n\nThe chat interface includes a welcome screen explaining what the bot can do. Quick-access buttons let users instantly ask about popular topics like trending anime, action series, and seasonal releases. The message area clearly separates user questions from bot responses with anime-themed avatars for visual appeal.\n\nTechnical Implementation\n\nBuilt entirely with HTML5, CSS3, and vanilla JavaScript without any frameworks. This keeps the application lightweight and fast. The chat system handles real-time responses from the AI and limits user input to 500 characters per message. The design includes smooth transitions, gradient backgrounds, and carefully chosen typography for easy reading.\n\nTheme Options\n\nUsers can switch between light and dark modes using a sun and moon icon button. The dark theme uses deep navy backgrounds with bright accent colors, while the light theme offers high contrast with softer colors. This helps users read comfortably in different lighting situations.\n\nAPI Integration\n\nThe application makes secure calls to OpenAI GPT models with proper error handling and loading indicators. The system instructions configure the AI to provide expert knowledge about anime recommendations, character analysis, Japanese cultural elements, animation techniques, and where to watch series.\n\nAccessibility and Deployment\n\nHosted on GitHub Pages and designed to work on desktop, tablet, and mobile devices. The site uses semantic HTML markup, proper heading structure, and keyboard-friendly controls. Input validation prevents empty messages and enforces character limits for better API usage.\n\nLearning Outcomes\n\nThis project demonstrates how to integrate AI services into web applications, build interactive chat interfaces, implement theme switching, handle API calls with error management, and create responsive designs that work across different devices.',
    tags: ['JavaScript', 'OpenAI', 'Chatbot', 'CSS3'],
    tools: ['JavaScript', 'HTML5', 'CSS3', 'OpenAI API', 'GitHub Pages'],
    coverImage: '/projects/Anime Chatbot/Anime Chatbot.jpg',
    images: [''],
    repoUrl: 'https://github.com/kenzuu-codes/kenzuu_chatbot1',
    liveUrl: 'https://kenzuu-codes.github.io/kenzuu_chatbot1/',
  },
  {
    slug: 'anime-studio-dashboard',
    title: 'Anime Studio Dashboard',
    description:
      'Production management platform streamlining anime studio workflows. Features real-time collaboration tools, character sheet organization, and timeline tracking.',
    fullDescription:
      'Project Overview\n\nThe Anime Studio Dashboard is a production management platform designed to help animation teams organize their work. This system brings together character sheets, storyboards, timelines, and team communication into one place, making it easier for studios to manage animation projects.\n\nProblem\n\nAnimation studios handle many moving parts during production. Teams need to track character designs, manage production schedules, review work, and communicate about changes. Keeping everything organized across different tools and files can be difficult and slow down the creative process.\n\nSolution\n\nThis dashboard centralizes important production information in a visual interface built for animation workflows. Character sheets are displayed in organized galleries where team members can view designs, check revision history, and see which versions are approved. This helps keep everyone working from the same reference materials.\n\nTimeline Features\n\nThe timeline system shows production stages including pre-production, keyframe animation, in-between frames, coloring, and post-production. It displays task dependencies, milestones, and real-time progress. Team members can quickly see where work is getting delayed and adjust resources accordingly.\n\nCollaboration Tools\n\nTeams can leave comments directly on specific frames or character poses, making feedback clear and actionable. Notification systems alert the right people when approvals are needed. This reduces email chains and keeps discussions focused on the work itself.\n\nTechnical Stack\n\nBuilt with React and TypeScript for the user interface components. Node.js handles the backend API and data management. WebGL renders high-quality character previews efficiently. MongoDB stores project data. The system is designed to scale from small indie teams to larger studios managing multiple projects.\n\nKey Benefits\n\nBy organizing production information visually and keeping communication tied to specific work items, the dashboard helps animation teams stay coordinated. It reduces time spent searching for files or clarifying feedback, letting teams focus more energy on creating quality animation.\n\nLearning Outcomes\n\nThis project demonstrates building specialized workflow tools, implementing real-time collaboration features, working with media-heavy interfaces, and designing systems that scale for different team sizes.',
    tags: ['React', 'TypeScript', 'Animation', 'WebGL', 'Node.js'],
    tools: ['React', 'TypeScript', 'Node.js', 'WebGL', 'MongoDB'],
    repoUrl: 'https://github.com/kenzuu/anime-studio-dashboard',
    liveUrl: 'https://anime-studio.kenzuu.dev',
    coverImage: '/projects/anime-studio.svg',
    images: ['/projects/anime-studio.svg'],
  },
  {
    slug: 'synthwave-music-generator',
    title: 'SynthWave Music Generator',
    description:
      'AI-powered music composition tool creating authentic synthwave tracks. Features intelligent chord progressions, real-time audio visualization, and MIDI export.',
    fullDescription:
      'Project Overview\n\nThe SynthWave Music Generator is a web-based tool that helps people create synthwave music without needing advanced music theory knowledge. It combines AI assistance with simple controls, allowing users to generate authentic retro-style tracks that capture the synthwave sound.\n\nProblem\n\nMany people enjoy synthwave music but find music production software complicated and difficult to learn. Traditional tools require understanding music theory, synthesizer programming, and complex interfaces, which can be discouraging for beginners.\n\nSolution\n\nThis generator makes music creation visual and intuitive. Users adjust mood, tempo, and intensity using sliders and preset options. The AI handles technical details like chord progressions, basslines, and drum patterns that fit the synthwave style. Real-time visualizations show audio waveforms and frequency spectrums, making the creative process more engaging.\n\nCustomization Options\n\nUsers can adjust individual layers of the music. This includes changing synthesizer sounds, modifying drum patterns, and experimenting with arpeggiator sequences. The system prevents musical choices that would sound bad while still giving users creative freedom to shape their tracks.\n\nExport Functionality\n\nThe MIDI export feature lets users save their generated music as MIDI files. These files can be opened in professional music software like Ableton Live or FL Studio for further editing. This workflow helps beginners explore ideas quickly while also serving experienced producers looking for inspiration.\n\nTechnical Implementation\n\nBuilt entirely with JavaScript and the Web Audio API, the application runs directly in web browsers with no installation needed. The AI model uses pattern recognition trained on thousands of synthwave songs to create music that sounds natural rather than randomly generated.\n\nKey Features\n\n- Visual controls for mood, tempo, and intensity settings\n- Real-time audio visualization with waveforms and spectrum display\n- Layer-by-layer sound customization\n- MIDI file export for professional software integration\n- Browser-based with no installation required\n- AI-powered composition that follows synthwave conventions\n\nLearning Outcomes\n\nThis project demonstrates working with the Web Audio API, implementing AI-assisted creative tools, building intuitive interfaces for complex tasks, and bridging browser-based applications with professional production workflows.',
    tags: ['JavaScript', 'Web Audio API', 'Music Production', 'AI', 'MIDI'],
    tools: ['JavaScript', 'Web Audio API', 'TensorFlow.js', 'Tone.js'],
    repoUrl: 'https://github.com/kenzuu/synthwave-generator',
    liveUrl: 'https://synthwave.kenzuu.dev',
    coverImage: '/projects/synthwave-generator.svg',
    images: ['/projects/synthwave-generator.svg'],
  },
  {
    slug: 'interactive-portfolio-3d',
    title: 'Interactive 3D Portfolio',
    description:
      'Immersive portfolio experience showcasing work through 3D environments. Features smooth character animations, particle effects, and responsive design.',
    fullDescription:
      'Project Overview\n\nThe Interactive 3D Portfolio presents work in an immersive 3D environment instead of traditional webpage layouts. Visitors explore different project areas by walking through themed spaces, creating a memorable experience that showcases both creative work and technical skills.\n\nConcept\n\nRather than scrolling through static pages and image galleries, users control a character that moves through a 3D world. Different areas represent different project categories. When users approach project displays, the camera smoothly transitions to show detailed information, images, and links. This spatial design makes browsing feel more like visiting an exhibition than reading a list.\n\nVisual Design\n\nThe environment includes carefully designed animations, particle effects, and lighting that create atmosphere without hurting performance. Character movements blend smoothly between idle, walking, and interaction states. Particle effects like floating embers, falling leaves, or light rays add environmental detail while staying subtle enough not to distract from portfolio content.\n\nResponsive Design\n\nThe experience works across desktop, tablet, and mobile devices. On touch screens, controls switch to swipe and tap interactions. Performance optimization through level-of-detail systems and compressed assets keeps the frame rate smooth even on mid-range devices, ensuring good performance without sacrificing visual quality.\n\nTechnical Stack\n\nBuilt with Three.js for 3D rendering and GLSL shaders for custom visual effects. The project uses advanced WebGL techniques including skeletal animation, post-processing effects, and optimized rendering. Character models created in Blender are rigged with bones, textured, and exported with compression to maintain quality while keeping file sizes small.\n\nKey Features\n\n- Explorable 3D environments representing different project categories\n- Smooth character movement with blended animations\n- Particle systems for environmental atmosphere\n- Touch-friendly controls for mobile devices\n- Performance optimization for various hardware levels\n- Camera transitions when viewing projects\n- Integration of portfolio content within 3D space\n\nLearning Outcomes\n\nThis project demonstrates 3D web development with Three.js, shader programming with GLSL, 3D modeling and rigging in Blender, performance optimization for web graphics, and creating interactive experiences that work across different devices.',
    tags: ['Three.js', 'GLSL', 'Animation', 'WebGL', 'Blender'],
    tools: ['Three.js', 'GLSL Shaders', 'Blender', 'WebGL', 'JavaScript'],
    repoUrl: 'https://github.com/kenzuu/3d-portfolio',
    liveUrl: 'https://3d.kenzuu.dev',
    coverImage: '/projects/3d-portfolio.svg',
    images: ['/projects/3d-portfolio.svg'],
  },
  {
    slug: 'multimedia-content-cms',
    title: 'Multimedia Content CMS',
    description:
      'Headless CMS built for multimedia creators. Streamlines video processing, audio editing, and content workflow automation for efficient production.',
    fullDescription:
      'Project Overview\n\nThe Multimedia Content CMS is a content management system built specifically for video producers, podcasters, and multimedia creators. It combines media processing tools with workflow management, helping creators upload, organize, edit, and distribute content efficiently without dealing with overly complex enterprise software.\n\nProblem\n\nContent creators often struggle with managing large media libraries. They need to handle video transcoding, audio processing, file organization, team collaboration, and content distribution. Using multiple separate tools for these tasks creates extra work and slows down production.\n\nSolution\n\nThis platform provides a complete system for managing multimedia content. Large thumbnail previews, audio waveforms, and video timeline scrubbing make content easy to recognize and access. Bulk upload with automatic metadata extraction saves time. Smart tagging and search help find assets quickly even in libraries with thousands of files.\n\nAutomatic Processing\n\nWhen videos are uploaded, the system automatically creates multiple resolution versions for different devices and internet speeds. Audio files get volume normalized, compressed, and formatted for web playback. These background processes eliminate manual technical work, letting creators focus on content quality.\n\nCollaboration Features\n\nRole-based permissions control who can upload, edit, or publish content. Approval workflows help maintain quality without slowing down creative work. Team members can leave comments and feedback on specific timestamps in videos or audio tracks, making communication clear and actionable.\n\nHeadless Architecture\n\nThe system provides content through REST APIs, giving creators flexibility in how they publish. They can build custom websites, mobile apps, or streaming platforms while the CMS handles storage, processing, and organization behind the scenes. This separation keeps creative control with creators while managing technical complexity.\n\nTechnical Stack\n\nBuilt with Next.js for the admin interface, Python for media processing using FFmpeg, PostgreSQL for storing metadata, and AWS for scalable storage and content delivery. Docker containers ensure consistent deployment. The platform scales from individual creators to teams managing multiple projects.\n\nKey Features\n\n- Visual media library with thumbnails and waveforms\n- Automatic video transcoding and audio processing\n- Bulk upload with metadata extraction\n- Smart tagging and search functionality\n- Team collaboration with role-based permissions\n- Approval workflows and timestamped comments\n- REST API for flexible content publishing\n- Cloud storage with content delivery network\n\nLearning Outcomes\n\nThis project demonstrates building full-stack applications, working with media processing pipelines, implementing headless CMS architecture, designing team collaboration features, and deploying scalable cloud infrastructure.',
    tags: ['Next.js', 'Python', 'FFmpeg', 'PostgreSQL', 'AWS'],
    tools: ['Next.js', 'Python', 'FFmpeg', 'PostgreSQL', 'AWS S3', 'Docker'],
    repoUrl: 'https://github.com/kenzuu/multimedia-cms',
    coverImage: '/projects/multimedia-cms.svg',
    images: ['/projects/multimedia-cms.svg'],
  },
  {
    slug: 'character-animation-toolkit',
    title: 'Character Animation Toolkit',
    description:
      'Open-source toolkit simplifying 2D character animation for web and mobile. Features bone rigging, keyframe interpolation, and flexible export capabilities.',
    fullDescription:
      'Project Overview\n\nThe Character Animation Toolkit is an open-source browser-based tool that makes 2D character animation easier for developers. It provides features traditionally found in expensive software, allowing users to create smooth character animations directly in their web browser and export them for use in games, websites, or mobile apps.\n\nProblem\n\nProfessional animation software is often expensive and has a steep learning curve. Developers who want to add character animations to their projects may not have access to specialized tools or animation training. This creates a barrier for teams trying to bring characters to life in their applications.\n\nSolution\n\nThis toolkit runs entirely in the browser with no installation needed. Users can create bone structures by drawing skeletal hierarchies over character artwork. Parent-child relationships ensure natural movement, so moving an arm automatically moves the connected hand. Inverse kinematics support lets animators position hands or feet and have the system calculate the correct joint angles automatically.\n\nAnimation Features\n\nKeyframe animation gives precise control over timing and movement. Users set keyframes at specific moments, and the toolkit smoothly fills in the motion between them using customizable easing curves. Layer-based timelines help organize complex animations, allowing separate control of different body parts while keeping everything synchronized.\n\nExport Options\n\nAnimations can be exported as sprite sheets, JSON data compatible with popular game engines, or video formats for web use. This flexibility lets teams integrate the toolkit into their existing workflows without being locked into specific technologies.\n\nAccessibility\n\nThe browser-based interface removes installation barriers. Cloud save functionality keeps work safe across sessions. Project sharing enables team collaboration and community learning. The open-source nature encourages contributions and improvements from the community.\n\nTechnical Stack\n\nBuilt with TypeScript for code reliability and the Canvas API for efficient rendering. The modular architecture makes it easy to extend with custom features. As an open-source project, the code is available for others to study, use, and improve.\n\nKey Features\n\n- Browser-based bone rigging system\n- Parent-child skeletal hierarchies\n- Inverse kinematics support\n- Keyframe animation with easing curves\n- Layer-based timeline organization\n- Multiple export formats (sprite sheets, JSON, video)\n- Cloud save functionality\n- Project sharing for collaboration\n- Open-source and extensible\n\nLearning Outcomes\n\nThis project demonstrates building animation tools, working with Canvas API for rendering, implementing inverse kinematics algorithms, creating timeline-based interfaces, handling multiple export formats, and contributing to open-source software.',
    tags: ['TypeScript', 'Canvas API', 'Animation', 'Open Source', 'Tools'],
    tools: ['TypeScript', 'Canvas API', 'JavaScript', 'HTML5'],
    repoUrl: 'https://github.com/kenzuu/character-animation-toolkit',
    liveUrl: 'https://animation-toolkit.kenzuu.dev',
    coverImage: '/projects/animation-toolkit.svg',
    images: ['/projects/animation-toolkit.svg'],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
