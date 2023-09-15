import Link from "next/link"
import cn from 'classnames'
import styles from './Button.module.css'

export default function index({children, variant, color, href, size, width, rounded, startIcon, endIcon, className, ...props}) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={cn(
            styles.btn,
            !size || size == 'base' ? styles.base : '',
            variant == 'contained' && styles.contained,
            color == 'secondary' && styles.secondary,
            color == 'blueHover' && styles.blueHover,
            color == 'blue' && styles.blue,
            width == 'square' && styles.square,
            startIcon && endIcon ? styles.withIcon : '', 
            rounded ? `rounded-${rounded}` : 'rounded-md',
            size == 'sm' && styles.sm,
            className && className
          )}
          {...props}
        >
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </Link>
      ) : (
        <button
        className={cn(
          styles.btn,
          !size || size == 'base' ? styles.base : '',
          variant == 'contained' && styles.contained,
          color == 'secondary' && styles.secondary,
          color == 'whiteHover' && styles.whiteHover,
          color == 'blueHover' && styles.blueHover,
          color == 'blue' && styles.blue,
          width == 'square' && styles.square,
          startIcon && endIcon ? styles.withIcon : '', 
          rounded ? `rounded-${rounded}` : 'rounded-md',
          size == 'sm' && styles.sm,
          className && className
        )}
        {...props}
        >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
        </button>
      )}
    </>
  )
}
