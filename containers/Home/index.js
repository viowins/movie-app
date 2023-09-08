import { HeroSection, SwiperSection } from '@/components'

import Movies from '@/mocks/movies.json'


export default  function HomeContainer() {
  
  return (
    <>
    <HeroSection movie={Movies.results[1]} />
    <SwiperSection title='Populars' movies={Movies.results.slice(1, 10)} />
    <SwiperSection title='Populars' movies={Movies.results.slice(1, 10)} />
    <SwiperSection title='Populars' movies={Movies.results.slice(1, 10)} />
   
    </>
  )
}
