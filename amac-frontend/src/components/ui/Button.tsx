import type { ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'navy' | 'orange'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
