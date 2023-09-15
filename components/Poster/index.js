import Image from "next/image";
import Link from "next/link";
import cn from 'classnames';

export default function Backdrop({ path, to, alt, aspect, ...props }) {

  return (
    <>
      {to ? (
        <Link className={cn("block relative", aspect ? `aspect-${aspect}` : 'aspect-poster')} href={to}>
          <Image
            src={
              path
                ? `https://image.tmdb.org/t/p/original${path}`
                : "https://placehold.co/600x400"
            }
            fill={true}
            alt={alt}
            objectFit="cover"
            loading = 'lazy'
            {...props}
          />
        </Link>
      ) : (
        <div className={cn("block relative", aspect ? `aspect-${aspect}` : 'aspect-poster')}>
          <Image
            src={
              path
                ? `https://image.tmdb.org/t/p/original${path}`
                : "https://placehold.co/600x400"
            }
            fill={true}
            alt={alt}
            objectFit="cover"
            loading = 'lazy'
            {...props}
          />
        </div>
      )}
    </>
  );
}
