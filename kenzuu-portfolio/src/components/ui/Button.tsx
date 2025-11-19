import { forwardRef, type ButtonHTMLAttributes } from 'react'

// Embedded variant utility (cva-like)
type VariantConfig<T> = {
  [K in keyof T]: Record<string, string>
}

function createVariants<T extends Record<string, string>>(config: {
  base: string
  variants: VariantConfig<T>
  defaultVariants?: Partial<T>
}) {
  return (props: Partial<T> & { className?: string }) => {
    const { className = '', ...variantProps } = props

    let classes = config.base

    // Apply variant classes
    Object.entries(config.variants).forEach(([variantKey, variantValues]) => {
      const value =
        (variantProps as any)[variantKey] ??
        (config.defaultVariants as any)?.[variantKey]
      if (value && variantValues[value]) {
        classes += ` ${variantValues[value]}`
      }
    })

    return `${classes} ${className}`.trim()
  }
}

const buttonVariants = createVariants({
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
      secondary:
        'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:active:bg-neutral-600',
      outline:
        'border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:active:bg-neutral-800',
      ghost:
        'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:active:bg-neutral-800',
      subtle:
        'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 dark:bg-neutral-900/50 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:active:bg-neutral-700',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    asChild?: false | undefined
  }

type ButtonAsChild = ButtonBaseProps & {
  asChild: true
}

type ButtonProps = ButtonAsButton | ButtonAsChild

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, asChild, children, ...props }, ref) => {
    const baseClasses = buttonVariants({ variant, size, className })

    if (asChild) {
      // For asChild pattern, we'd need a Slot implementation
      // This is a simplified version that just returns the child
      return <>{children}</>
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={loading || buttonProps.disabled}
        aria-busy={loading}
        {...buttonProps}
      >
        {loading && <Spinner />}
        {loading ? <span className="ml-2">{children}</span> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
export { Button, buttonVariants }
