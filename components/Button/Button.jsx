import Link from "next/link"
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button({children, href, variant, color, size, width, rounded, align, startIcon, endIcon, className, ...args}) {
  return (
    <>
    {href ? (
      <Link 
        href={href}
        className={cn(
          styles.btn,
          startIcon || endIcon ? styles.btn_icon : '',
          variant === 'contained' && styles.contained,
          variant === 'outline' && styles.outline,
          variant === 'contained-hover' && styles.contained_hover,
          color === 'primary' && styles.primary,
          color === 'secondary' && styles.secondary,
          color === 'white' && styles.white,
          color === 'danger' && styles.danger,
          size === 'sm' && styles.sm,
          size === 'base' && styles.base,
          size === 'lg' && styles.lg,
          width === 'square' && styles.square,
          width === 'full' && styles.full,
          rounded === 'base' && 'rounded-md',
          rounded === 'sm' && 'rounded-sm',
          rounded === 'md' && 'rounded-lg',
          rounded === 'lg' && 'rounded-xl',
          rounded === 'circle' && '!rounded-full',
          align === 'vertical' && 'flex-col',
          className ? className : '',
        )}
        {...args}
      >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </Link>
    ) : (
      <button 
        className={cn(
          styles.btn,
          startIcon || endIcon ? styles.btn_icon : '',
          variant === 'contained' && styles.contained,
          variant === 'outline' && styles.outline,
          variant === 'contained-hover' && styles.contained_hover,
          color === 'primary' && styles.primary,
          color === 'secondary' && styles.secondary,
          color === 'white' && styles.white,
          color === 'danger' && styles.danger,
          size === 'sm' && styles.sm,
          size === 'base' && styles.base,
          size === 'lg' && styles.lg,
          width === 'square' && styles.square,
          width === 'full' && styles.full,
          rounded === 'base' && 'rounded-md',
          rounded === 'sm' && 'rounded-sm',
          rounded === 'md' && 'rounded-lg',
          rounded === 'lg' && 'rounded-xl',
          rounded === 'circle' && '!rounded-full',
          align === 'vertical' && 'flex-col',
          className ? className : '',
        )}
        {...args}
      >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    )}
    </>
  )
}
