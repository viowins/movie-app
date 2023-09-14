import { NotFound } from "@/components"

export default function MovieNotFound() {
  return (
    <NotFound title='This TV series could not be found!'>
      Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
    </NotFound>
  )
}
