import { HeroSection, SwiperSection } from '@/components'
import { getPopular } from '@/services/hooks'

export default async function HomeContainer() {
  const data = await getPopular();

  if (data.success === false) {
    notFound();
  }
  return (
    <>
    <HeroSection movie={data.results[0]} />
    {Array(10).fill().map((_,index) => <SwiperSection title='Populars' movies={data.results} key={index} page={++index} index={500-index} />)}
    </>
  )
}
