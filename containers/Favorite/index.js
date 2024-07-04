"use client"
import { useCookies } from "react-cookie"

export default function FavoriteContainer() {
  const [cookies] = useCookies(["favorite"])

  return (
    <div>
      <h1>Favorite</h1>
      <pre>{JSON.stringify(cookies.favorite, null, 2)}</pre>
    </div>
  )
}