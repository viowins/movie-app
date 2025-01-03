import React, { useState } from "react";
import { Skeleton } from "@/components";
import Image from "next/image";
import cn from "classnames";

function useSkeletonImage() {
  const [loaded, setLoaded] = useState(false);

  return { loaded, setLoaded };
}

function SkeletonImage({ path, alt, quality, ...props }) {
  const { loaded, setLoaded } = useSkeletonImage();

  return (
    <>
      {!loaded && (
        <div className="absolute w-full h-full transition-all duration-150">
          <Skeleton />
        </div>
      )}
      <div
        className={cn(
          "relative transition-all duration-150 z-10 h-full",
          loaded ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <Image
          src={path}
          alt={alt}
          onLoad={() => setLoaded(true)}
          quality={quality ? quality : 50}
          {...props}
        />
      </div>
    </>
  );
}

export { useSkeletonImage, SkeletonImage }
