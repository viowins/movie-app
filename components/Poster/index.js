import Image from "next/image";
import Link from "next/link";
import cn from 'classnames';

export default function Backdrop({ path, to, alt, aspect, ...props }) {
  
  return (
    <>
      {to ? (
        <Link className={cn("block relative", aspect ? `aspect-${aspect}` : 'aspect-poster', path === 'dummy' && 'bg-white')} href={to}>
          <Image
            src={path == 'dummy' ? '/dummy-user-pic.jpg' : `https://image.tmdb.org/t/p/original${path}`}
            fill={true}
            alt={alt}
            loading = 'lazy'
            sizes="500px"
            style={{ objectFit: path === 'dummy' ? 'contain' : 'cover' }}
            {...props}
          />
        </Link>
      ) : (
        <div className={cn("block relative", aspect ? `aspect-${aspect}` : 'aspect-poster', path === 'dummy' && 'bg-white')}>
          <Image
            src={path == 'dummy' ? '/dummy-user-pic.jpg' : `https://image.tmdb.org/t/p/original${path}`}
            fill={true}
            alt={alt}
            loading = 'lazy'
            sizes="500px"
            style={{ objectFit: path === 'dummy' ? 'contain' : 'cover' }}
            {...props}
          />
        </div>
      )}
    </>
  );
}
