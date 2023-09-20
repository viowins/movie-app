"use client";
import React from "react";
import { SkeletonImage } from "@/hooks/skeletonImage";

export default function PersonImages({ profiles }) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {profiles.map((image, key) => (
          <div className="relative overflow-hidden rounded aspect-poster" key={key}>
            <SkeletonImage
              path={`https://image.tmdb.org/t/p/original${image.file_path}`}
              alt={image.file_path}
              sizes="500px"
              style={{ objectFit: "cover" }}
              loading="lazy"
              fill={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
