'use client'
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css'
import '@/styles/swiper.css'
import { Card } from '@/components'

export default function SwiperSection({title, movies = {}}) {

  return (
    <div className='flex flex-col gap-5 mt-8'>
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className='min-w-full'>
        <Swiper spaceBetween={24}
        slidesPerView={5}>
          {movies.map((movie, k) => (
            <SwiperSlide>
              <Card movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}
