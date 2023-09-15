'use client'
import React, { useState } from "react";
import { Skeleton } from "@/components";
import Image from "next/image";
import cn from "classnames";

function useImgLoader(aspect) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded((imgLoaded) => !imgLoaded);
  };

  const ImgLoader = () => {
    return (
      <div
        className={cn(
          "block relative",
          aspect ? `aspect-${aspect}` : "aspect-poster"
        )}
      >
        <Image
            src={
              path
                ? `https://image.tmdb.org/t/p/original${path}`
                : "https://placehold.co/600x400"
            }
            fill={true}
            alt={alt}
            objectFit="cover"
            onLoad={() => setImgLoaded(false)}
            loading = 'lazy'
            {...props}
          />
      </div>
    );
  };

  return { imgLoaded, setImgLoaded, ImgLoader, handleImageLoad };
}

export default useImgLoader;
