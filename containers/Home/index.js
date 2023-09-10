import { HeroSection, SwiperSection } from '@/components'


const getPopularMovies = async () => {
  const res = await fetch(`${process.env.APP_URL}/api/moviedb`)

  if (res.success === false) {
    throw Error('Response error!')
  }

  return res.json();
}

export default async function HomeContainer() {
  const movies = await getPopularMovies()


  return (
    <>
    <HeroSection movie={movies.results[0]} />
    <SwiperSection title='Populars' movies={movies.results.slice(1, 10)} index="499" />
    <SwiperSection title='Populars' movies={movies.results.slice(10, 20)} index="498" />
    <SwiperSection title='Populars' movies={movies.results.slice(15, 25)} index='497' />
   
    </>
  )
}
