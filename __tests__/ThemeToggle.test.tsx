import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from '@/components/ThemeToggle'

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
    resolvedTheme: 'light',
  }),
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Toggle theme')
  })

  it('calls setTheme when clicked', async () => {
    const mockSetTheme = jest.fn()
    
    // Re-mock useTheme for this test
    const { useTheme } = require('next-themes')
    useTheme.mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      resolvedTheme: 'light',
    })

    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockSetTheme).toHaveBeenCalled()
  })

  it('renders sun icon in light mode', () => {
    const { useTheme } = require('next-themes')
    useTheme.mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
      resolvedTheme: 'light',
    })

    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )
    
    // Check for sun icon (you may need to adjust this based on your icon implementation)
    const sunIcon = document.querySelector('.lucide-sun')
    expect(sunIcon).toBeInTheDocument()
  })
})