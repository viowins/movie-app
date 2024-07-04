'use client'
import Link from "next/link";
import cn from 'classnames';
import { SkeletonImage } from "@/hooks/skeletonImage";

export default function Backdrop({ path, to, alt, aspect, ...props }) {

  return (
    <>
      {to ? (
        <>
          <Link className={cn("hidden md:block relative", aspect ? `aspect-${aspect}` : 'aspect-poster', path === 'dummy' && 'bg-white')} href={to}>
            <SkeletonImage
              src={path == 'dummy' ? '/dummy-user-pic.jpg' : `https://image.tmdb.org/t/p/original${path}`}
              fill={true}
              alt={alt}
              loading='lazy'
              sizes="500px"
              style={{ objectFit: path === 'dummy' ? 'contain' : 'cover' }}
              {...props}
            />
          </Link>
          <div className={cn("block md:hidden relative", aspect ? `aspect-${aspect}` : 'aspect-poster', path === 'dummy' && 'bg-white')}>
            <SkeletonImage
              src={path == 'dummy' ? '/dummy-user-pic.jpg' : `https://image.tmdb.org/t/p/original${path}`}
              fill={true}
              alt={alt}
              loading='lazy'
              sizes="500px"
              style={{ objectFit: path === 'dummy' ? 'contain' : 'cover' }}
              {...props}
            />
          </div>
        </>
      ) : (
        <div className={cn("block relative", aspect ? `aspect-${aspect}` : 'aspect-poster', path === 'dummy' && 'bg-white')}>
          <SkeletonImage
            src={path == 'dummy' ? '/dummy-user-pic.jpg' : `https://image.tmdb.org/t/p/original${path}`}
            fill={true}
            alt={alt}
            loading='lazy'
            sizes="500px"
            style={{ objectFit: path === 'dummy' ? 'contain' : 'cover' }}
            {...props}
          />
        </div>
      )}
    </>
  );
}
