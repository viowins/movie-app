import Image from "next/image"
import Link from "next/link"

export default function Logo({ to }) {
  return (
    <>
      {to ? (
        <Link href="/">
          <Image src="next.svg" width="283" height="64" alt="Logo" />
        </Link>
      ) : (
        <Image src="next.svg" width="283" height="64" alt="Logo" />
      )}
    </>
  )
}
