import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/ProjectCard'
import { Project } from '@/lib/projects'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description',
  tags: ['React', 'TypeScript', 'Testing'],
  repoUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com',
  coverImage: '/test-image.jpg',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders all project tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
  })

  it('renders action links when provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLink = screen.getByLabelText('View Test Project source code on GitHub')
    const liveLink = screen.getByLabelText('View Test Project live demo')
    
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project')
    
    expect(liveLink).toBeInTheDocument()
    expect(liveLink).toHaveAttribute('href', 'https://test-project.com')
  })

  it('calls onTagClick when tag is clicked', () => {
    const mockOnTagClick = jest.fn()
    render(<ProjectCard project={mockProject} onTagClick={mockOnTagClick} />)
    
    const reactTag = screen.getByText('React')
    reactTag.click()
    
    expect(mockOnTagClick).toHaveBeenCalledWith('React')
  })

  it('renders gradient background when no cover image', () => {
    const projectWithoutImage = { ...mockProject, coverImage: undefined }
    render(<ProjectCard project={projectWithoutImage} />)
    
    const gradientDiv = document.querySelector('.bg-gradient-to-br')
    expect(gradientDiv).toBeInTheDocument()
  })
})