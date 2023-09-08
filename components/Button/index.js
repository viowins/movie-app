import Link from "next/link"
import cn from 'classnames'
import styles from './Button.module.css'

export default function index({children, variant, color, href, size, rounded, startIcon, endIcon,  ...porps}) {
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
            startIcon && endIcon ? styles.withIcon : '', 
            rounded ? `rounded-[${rounded}]` : 'rounded-md'
          )}
        >
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </Link>
      ) : (
        <button>
          {children}
        </button>
      )}
    </>
  )
}
