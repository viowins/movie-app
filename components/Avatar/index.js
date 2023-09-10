import Link from "next/link"
import Image from "next/image"
import cn from 'classnames'

export default function Avatar({href, size}) {
  return (
    <>
    {href ? (
      <Link href={href}>
        <Image className={cn('rounded-full object-cover', size ? `w-[${size}px] h-[${size}px]` : 'w-9 h-9')} src='https://picsum.photos/seed/picsum/512/512' width={size ? size : 36} height={size ? size : 36} loading="lazy" />
      </Link>
    ) : (
      <Image className={cn('rounded-full object-cover', size ? `w-[${size}px] h-[${size}px]` : 'w-9 h-9')} src='https://picsum.photos/seed/picsum/512/512' width={size ? size : 36} height={size ? size : 36} loading="lazy" />
    )}
    </>
  )
}
