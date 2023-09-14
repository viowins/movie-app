import React from 'react'

export default function Skeleton({ width, height, ...props }) {
  return (
    <div className='animate-pulse bg-zinc-800 rounded-lg' style={{ width, height }} {...props}></div>
  )
}
