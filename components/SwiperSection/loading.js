import React from 'react'
import { Skeleton } from '@/components'

export default function SwiperLoading() {
  return (
    <>
      <Skeleton width={240} height={28} />
      <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
        {Array(6).fill(null).map((item, k) => (
          <div className='relative aspect-poster' key={k}>
            <Skeleton />
          </div>
        ))}
      </div>
    </>
  )
}
