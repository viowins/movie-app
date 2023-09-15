import React from 'react'
import HeroLoading from '@/components/HeroSection/loading'
import SwiperLoading from '@/components/SwiperSection/loading'

export default function loading() {
  return (
    <div className='flex flex-col gap-6'>
      <HeroLoading />
      <SwiperLoading />
    </div>
  )
}
