"use client"
import React, { useState, useEffect } from 'react'
import { SwiperSection, SkeletonSwiper } from '@/components'
import { getTrendings } from '@/services/movie'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function LoadMoreHome() {
  const [page, setPage] = useState(3);
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchInitialTrendings = async () => {
      const initialTrendings = await getTrendings(`&page=${page}`);
      setTrendings([{ data: initialTrendings.results, page: page }]);
      setPage(prev => prev + 1)
    };
    fetchInitialTrendings();
  }, []);

  const fetchMoreData = async () => {
    const newTrendings = await getTrendings(`&page=${page}`);
    setTrendings(prev => [...prev, { data: newTrendings.results, page }]);
    setPage(prev => prev + 1);
  }

  return (
    <InfiniteScroll
      dataLength={trendings.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<SkeletonSwiper />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      style={{ overflow: 'unset' }}
    >
      {trendings.map((trendings, index) => (
        <SwiperSection key={index} movies={trendings.data} index={500 - trendings.page} />
      ))}
    </InfiniteScroll>
  )
}
