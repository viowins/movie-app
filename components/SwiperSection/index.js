'use client'
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css'
import '@/styles/swiper.css'
import { Card } from '@/components'

export default function SwiperSection({title, movies = {}, index}) {

  return (
    <div className='relative flex flex-col gap-5 mt-8' style={{zIndex: index && index}}>
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className='min-w-full'>
        <Swiper spaceBetween={24}
        slidesPerView={6}
        >
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
