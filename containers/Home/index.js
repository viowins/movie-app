import React from 'react'
import { HeroSection, SwiperSection } from '@/components'
import { getHeroMovie, getMeidaVideos } from '@/services/movie'

export default async function HomeContainer({ trendings = [] }) {
  const [heroMovie, { results: heroVideo }] = await Promise.all([
    getHeroMovie(trendings[0].media_type, trendings[0].id),
    getMeidaVideos(trendings[0].media_type, trendings[0].id)
  ])

  const trailer = heroVideo.find(({ type }) => type === "Trailer");

  return (
    <>
      <HeroSection movie={heroMovie} mediaType={trendings[0].media_type} id={trendings[0].id} isLinked={true} video={trailer} />
      <SwiperSection title='Trendings' movies={trendings.slice(1, 20)} index={500} />
    </>
  )
}
