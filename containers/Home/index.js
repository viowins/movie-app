import React from 'react'
import { HeroSection, SwiperSection } from '@/components'
import { getHeroMovie, getMeidaVideos } from '@/services/movie'

export default async function HomeContainer({ trendings = [] }) {
  const [heroMovie, heroVideo] = await Promise.all([
    getHeroMovie(trendings[0].media_type, trendings[0].id),
    getMeidaVideos(trendings[0].media_type, trendings[0].id)
  ]) 

  return (
    <>
      <HeroSection movie={heroMovie} mediaType={trendings[0].media_type} id={trendings[0].id} isLinked={true} video={heroVideo} />
      <SwiperSection title='Trendings' movies={trendings.slice(1, 20)} index={500} />
    </>
  )
}
