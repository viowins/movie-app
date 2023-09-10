import { HeroSection } from "@/components"

export default function MovieContainer({ movie = {} }) {
  return (
    <HeroSection movie={movie} />
  )
}
