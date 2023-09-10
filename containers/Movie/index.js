import { HeroSection } from "@/components"
import Content from "./Content";;

export default function MovieContainer({ movie = {} }) {
  return (
    <>
      <HeroSection movie={movie} />
      <Content movie={movie} />
    </>
  )
}
