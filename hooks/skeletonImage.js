import React, { useState } from "react";
import { Skeleton } from "@/components";
import Image from "next/image";
import cn from "classnames";

function useSkeletonImage() {
  const [loaded, setLoaded] = useState(false);

  return { loaded, setLoaded };
}

function SkeletonImage({ path, alt, ...props }) {
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
          "transition-all duration-150 z-10",
          loaded ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <Image
          src={path}
          alt={alt}
          onLoadingComplete={() => setLoaded(true)}
          {...props}
        />
      </div>
    </>
  );
}

export { useSkeletonImage, SkeletonImage }
