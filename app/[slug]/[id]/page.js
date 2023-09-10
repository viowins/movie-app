import { MovieContainer } from "@/containers"
import Movies from '@/mocks/movies.json'
import { notFound } from "next/navigation"
import metadata from '@/app/layout'

export const getTv = async (params) => {
  const res = await fetch(`${process.env.APP_URL}/api/moviedb?params=${params.slug}/${params.id}`)

  if (res.success === false) {
    throw Error('Response error!')
  }

  return res.json();
}



export default async function TvPage({ params, searchParams }) {
  const movieDetail = Movies.results.find((movie) => movie.id == params.id)

  const tvDetail = await getTv(params)


  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error('Error happened')
  }

  return (
    <>
      <MovieContainer movie={tvDetail} />
    </>
  )
}
