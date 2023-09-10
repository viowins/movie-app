'use client'
import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css'
import '@/styles/swiper.css'
import { Card } from '@/components'
import { useEffect, useState } from 'react'
import { getDetail } from '@/services/hooks'

export default function SwiperSection({title, index}) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetail();
      setMovies(data.results);
    };
    fetchData();
   
  }, []);

  return (
    <div className='relative flex flex-col gap-5 mt-8' style={{zIndex: index && index}}>
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className='min-w-full'>
        <Swiper spaceBetween={24}
        slidesPerView={6}
        >
          {movies.map((movie, k) => (
            <React.Fragment key={k}>
              <SwiperSlide>
                <Card movie={movie} key={movie.id} />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>

  )
}
