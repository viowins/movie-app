import { HeroSection } from '@/components'

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/api/moviedb?params=movie/565770`,{ cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary0
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <HeroSection title={data.original_title} rating="4.2" year="2023" time="1h 25min" backgroundImage={`${data.backdrop_path}`}>
      An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.
      </HeroSection>
    </>
  )
}
