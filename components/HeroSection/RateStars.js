'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@/components'

function RateStars({ rate }) {
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const Arr = []
    for (let i = 1; i < 6; i++) {
      let vote = (rate / 2).toFixed(1)
      if (vote > i) {
        Arr.push({ name: 'StarFill' })
      }
      else if (vote < i && vote > i - 1) {
        Arr.push({ name: 'StarHalf' })
      }
      else {
        Arr.push({ name: 'StarOutline' })
      }
    }
    setMovieRate(Arr)
  }, [])

  return (
    <div className='inline-flex items-center gap-1 text-yellow-600'>
      {movieRate.map((item, key) => (
        <Icon name={item.name} key={key} />
      ))}
    </div>
  )
}

export default RateStars