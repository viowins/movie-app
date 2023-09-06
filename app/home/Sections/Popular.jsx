import { Swiper, Card } from '@/components'

async function getMovies() {
  const res = await fetch(`${process.env.APP_URL}/api/moviedb`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Popular() {
  const movies = await getMovies()

  return (
    <div>
      <Swiper>
        {movies.results.map((movie, key) => (
          <Swiper.Slide key={key}>
            <Card data={movie} />
          </Swiper.Slide>
        ))}
      </Swiper>
    </div>
  )
}
