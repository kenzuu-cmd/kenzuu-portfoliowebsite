import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  clickable?: boolean
  className?: string
  children: React.ReactNode
} & Omit<
  ComponentPropsWithoutRef<T>,
  keyof {
    as?: T
    clickable?: boolean
    className?: string
    children: React.ReactNode
  }
>

const Card = forwardRef<any, CardProps>(
  (
    {
      as: Component = 'div',
      clickable = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 
      bg-white dark:bg-neutral-950 p-6 shadow-sm transition-all duration-300
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br 
      before:from-brand-500/20 before:via-transparent before:to-accent-500/20 
      before:opacity-0 before:transition-opacity before:duration-500 
      hover:before:opacity-100
    `
      .replace(/\s+/g, ' ')
      .trim()

    const clickableClasses = clickable
      ? `
        cursor-pointer transform hover:scale-[1.02] hover:shadow-md 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 
        focus-visible:ring-offset-2 active:scale-[0.98]
      `
          .replace(/\s+/g, ' ')
          .trim()
      : ''

    const combinedClasses =
      `${baseClasses} ${clickableClasses} ${className}`.trim()

    // Add interactive props only if clickable and not already an interactive element
    const needsInteractiveProps = clickable && Component === 'div'

    const interactiveProps = needsInteractiveProps
      ? {
          role: 'button' as const,
          tabIndex: 0,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              ;(e.target as HTMLElement).click()
            }
          },
        }
      : {}

    return (
      <Component
        ref={ref}
        className={combinedClasses}
        {...interactiveProps}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </Component>
    )
  }
)

Card.displayName = 'Card'

export default Card
export { Card }
