"use client"
import React, { useState, useEffect } from 'react'
import { SwiperSection, SkeletonSwiper } from '@/components'
import { getTrendingMovies } from '@/services/movie'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function MoviesContainer() {
  const [page, setPage] = useState(1);
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchInitialTrendings = async () => {
      let initialTrendings = [];
      for (let i = 0; i < 5; i++) {  // Döngüyü 0'dan 4'e kadar (5 kez) çalıştır
        const result = await getTrendingMovies(`&page=${page + i}`);
        initialTrendings = [...initialTrendings, { data: result.results, page: page + i }];
      }
      setTrendings(initialTrendings);
      setPage(prev => prev + 5);  // Sayfa numarasını 5 artır
    };
    fetchInitialTrendings();
  }, []);

  const fetchMoreData = async () => {
    const newTrendings = await getTrendingMovies(`&page=${page}`);
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
        <SwiperSection key={index} movies={trendings.data} index={1000 - trendings.page} title={index == 0 && "Trending Movies"} />
      ))}
    </InfiniteScroll>
  )
}

