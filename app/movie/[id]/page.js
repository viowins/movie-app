import { MovieContainer } from "@/containers"
import Movies from '@/mocks/movies.json'
import { notFound } from "next/navigation"

export default function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find((movie) => movie.id == params.id)

  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error('Error happened')
  }

  return <MovieContainer movie={movieDetail} />
}
