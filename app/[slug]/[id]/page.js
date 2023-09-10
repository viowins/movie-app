import { MovieContainer } from "@/containers"
import { notFound } from "next/navigation"
import {getDetail} from "@/services/hooks"

export default async function Page({ params }) {
  const data = await getDetail(`${params.slug}/${params.id}`);
  if (data.success === false) {
    notFound();
  }
  return (
    <>
      <MovieContainer type={params.slug} movie={data}  />
    </>
  )
}
