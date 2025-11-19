import { forwardRef, type HTMLAttributes } from 'react'

interface TagPillProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

const TagPill = forwardRef<HTMLButtonElement | HTMLSpanElement, TagPillProps>(
  ({ label, active = false, onClick, className = '', ...props }, ref) => {
    const baseClasses = `
      inline-flex items-center px-3 py-1 text-sm font-medium rounded-full 
      transition-all duration-200 border border-transparent
    `
      .replace(/\s+/g, ' ')
      .trim()

    const activeClasses = active
      ? 'bg-brand-600 text-white border-brand-600'
      : 'bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700'

    const interactiveClasses = onClick
      ? `
        cursor-pointer hover:scale-105 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 
        focus-visible:ring-offset-2
        ${
          active
            ? 'hover:bg-brand-700 hover:border-brand-700'
            : 'hover:bg-neutral-200 hover:border-neutral-300 dark:hover:bg-neutral-700 dark:hover:border-neutral-600'
        }
      `
          .replace(/\s+/g, ' ')
          .trim()
      : ''

    const combinedClasses =
      `${baseClasses} ${activeClasses} ${interactiveClasses} ${className}`.trim()

    if (onClick) {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          type="button"
          className={combinedClasses}
          onClick={onClick}
          {...props}
        >
          {label}
        </button>
      )
    }

    return (
      <span
        ref={ref as React.ForwardedRef<HTMLSpanElement>}
        className={combinedClasses}
        {...props}
      >
        {label}
      </span>
    )
  }
)

TagPill.displayName = 'TagPill'

export default TagPill
export { TagPill }
