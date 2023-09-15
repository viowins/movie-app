import { HomeContainer } from "@/containers"
import { getTrendings } from "@/services/movie";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Home() {

  await delay(2000)

  const { results: trendings } = await getTrendings();


  return <HomeContainer trendings={trendings} />
}
