import Image from "next/image"
import Link from "next/link"

export default function Backdrop({ path, to, alt, ...props }) {
  return (
    <>
      {to ? (
        <Link className='block relative aspect-poster' href={to}>
          <Image src={path ? `https://image.tmdb.org/t/p/original${path}` : 'https://placehold.co/600x400'} fill alt={alt} {...props} />
        </Link>
      ) : (
        <div className='block relative aspect-poster'>
        <Image src={path ? `https://image.tmdb.org/t/p/original${path}` : 'https://placehold.co/600x400'} fill alt={alt} {...props} />
        </div>
      )}
    </>
  )
}
