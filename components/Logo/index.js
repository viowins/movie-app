import Link from "next/link"
import Image from "next/image"

export default function Logo({linked}) {
  return (
    <>
      {linked ? (
        <Link href='/'>
          <Image src='/filmly.svg' width='56' height='56' loading='lazy' />
        </Link>
      ) : (
        <Image src='/filmly.svg' width='56' height='56' loading='lazy' />
      )}
    </>
  )
}