import React from "react";
import { Card } from "@/components";

export default function GridSection({ medias }) {

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {medias.map((media, key) => (
        <React.Fragment key={key}>
          {media.backdrop_path && <Card movie={media} /> }
        </React.Fragment>
      ))}
    </div>
  );
}