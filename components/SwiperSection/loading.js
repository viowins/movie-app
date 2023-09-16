import React from 'react'
import { Skeleton } from '@/components'

export default function SwiperLoading() {
  return (
    <>
      <Skeleton width={240} height={28} />
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {Array(6).fill(null).map((item, k) => (
          <div className='relative aspect-poster' key={k}>
            <Skeleton />
          </div>
        ))}
      </div>
    </>
  )
}
