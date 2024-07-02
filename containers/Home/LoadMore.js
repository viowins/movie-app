"use client"
import React, { useState, useEffect } from 'react'
import { Button, SwiperSection } from '@/components'
import { getTrendings } from '@/services/movie'

export default function LoadMoreHome() {
  const [page, setPage] = useState(3);
  const [additionalTrendings, setAdditionalTrendings] = useState([]);

  const handleLoadMore = async () => {
    const newTrendings = await getTrendings(`&page=${page}`);
    setAdditionalTrendings(prev => [...prev, { data: newTrendings.results }]);
    setPage(prev => prev + 1);
  }

  return (
    <>
      {additionalTrendings.map((trendings, index) => (
        <React.Fragment key={index}>
          <SwiperSection movies={trendings.data} index={500} />
        </React.Fragment>
      ))}
      <div className='text-center mt-8'>
        <Button variant="contained" color="blue" onClick={handleLoadMore}>Load More</Button>
      </div>
    </>
  )
}
