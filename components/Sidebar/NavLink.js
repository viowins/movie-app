"use client"
import Link from "next/link"
import cn from 'classnames'
import { Icon } from "@/components"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLink({ iconName, to, target, ...props }) {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <Link className={cn("grid place-items-center w-10 h-10 rounded-lg transition-colors duration-150 hover:text-blue-700 hover:bg-blue-950/50", activeSegment === target ? 'text-blue-700 bg-blue-700/25' : 'text-zinc-100')} href={to} {...props}>
      <Icon name={iconName} />
    </Link>
  )
}