'use client'
import React from 'react'
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          }
        }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Card movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}
