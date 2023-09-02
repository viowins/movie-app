import Image from "next/image"
import Link from "next/link"

export default function Logo({ to }) {
  return (
    <>
      {to ? (
        <Link href="/">
          <Image src="vercel.svg" width="283" height="64" />
        </Link>
      ) : (
        <Image src="vercel.svg" width="283" height="64" />
      )}
    </>
  )
}
