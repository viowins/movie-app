import React from 'react'
import { HeroSection, SwiperSection } from '@/components'
import { getTrendings, getHeroMovie, getMeidaVideos } from '@/services/movie'
import LoadMore from './LoadMore'

export default async function HomeContainer({ trendings = [] }) {
  console.log(trendings[0])
  const [heroMovie, { results: heroVideo }, { results: trendings2 }] = await Promise.all([
    getHeroMovie(trendings[0].media_type, trendings[0].id),
    getMeidaVideos(trendings[0].media_type, trendings[0].id),
    getTrendings("&page=2")
  ])

  const trailer = heroVideo.find(({ type }) => type === "Trailer");

  return (
    <>
      <HeroSection movie={heroMovie} mediaType={trendings[0].media_type} id={trendings[0].id} isLinked={true} video={trailer} />
      <SwiperSection title='Trendings' movies={trendings.slice(1, 20)} index={500} />
      <SwiperSection  movies={trendings2} index={499} />
      <LoadMore />
    </>
  )
}
