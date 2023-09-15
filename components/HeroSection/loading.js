import React from 'react'
import { Skeleton } from '@/components'

export default function HeroSectionLoading() {
  return (
    <div className='relative aspect-3/2 md:aspect-25/9'>
      <Skeleton height={'100%'} />
    </div>
  )
}
