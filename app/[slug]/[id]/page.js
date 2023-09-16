import { MovieContainer } from "@/containers"
import { notFound } from "next/navigation"
import { getMediaDetail } from "@/services/movie"

export default async function TvPage({ params, searchParams }) {
  const res = await getMediaDetail(params)

  if (!res) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error('Error happened')
  }

  return (
    <>
      <MovieContainer detail={res} params={params} />
    </>
  )
}
