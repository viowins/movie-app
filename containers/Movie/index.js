import { HeroSection } from "@/components"
import Content from "./Content";;

export default function MovieContainer({ movie = {}, type }) {
  return (
    <>
      <HeroSection type={type} movie={movie} />
      <Content movie={movie} />
    </>
  )
}
