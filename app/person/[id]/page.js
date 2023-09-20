import { Person } from "@/containers"
import { getPerson } from '@/services/movie'

export default async function PersonPage({params}) {
  const person = await getPerson(params.id)

  return (
    <Person person={person} />
  )
}
