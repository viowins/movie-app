import { MovieContainer } from "@/containers"
import { notFound } from "next/navigation"
import { getMediaDetail } from "@/services/movie"

export default async function TvPage({ params, searchParams }) {
  const mediaDetail = await getMediaDetail(params)

  if (!mediaDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error('Error happened')
  }

  return (
    <>
      <MovieContainer movie={mediaDetail} params={params} />
    </>
  )
}
