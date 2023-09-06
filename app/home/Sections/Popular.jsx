import { Swiper, Card } from '@/components'

export default async function Popular() {

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
