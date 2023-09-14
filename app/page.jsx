import { HomeContainer } from "@/containers"
import { getTrendings } from "@/services/movie";

export default async function Home() {

  const { results: trendings } = await getTrendings();


  return <HomeContainer trendings={trendings} />
}
