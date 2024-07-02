import { getMedias } from "@/services/movie"
import MoviesContainer from "@/containers/Movies"

export default async function Movies() {
  const movies = await getMedias('movie')

  return (
    <MoviesContainer medias={movies} />
  )
}
