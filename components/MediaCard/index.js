"use client";
import React from "react";
import { Icon } from "@/components";
import useModal from "@/hooks/modal";
import Image from "next/image";
import cn from "classnames";

export default function MediaCard({ mediaType, media = {}, bordered, aspect }) {
  const { Modal, openModal } = useModal(media.key);

  return (
    <>
      <div className="flex flex-col gap-4 transition-transform duration-200 hover:scale-105">
        <div
          className={cn(
            "relative overflow-hidden rounded",
            bordered && "border-zinc-800",
            aspect && `aspect-${aspect}`
          )}
        >
          {mediaType == "photo" ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${media.file_path}`}
              fill={true}
              alt={media.file_path}
              loading="lazy"
              sizes="500px"
              onLoadingComplete={() => console.log('loading')}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <Image
                src={`http://img.youtube.com/vi/${media.key}/0.jpg`}
                sizes="500px"
                style={{ objectFit: aspect ? aspect : "cover" }}
                alt={media.name}
                fill
              />
              <button
                className="group absolute inset-0 grid place-items-center"
                onClick={openModal}
              >
                <div className="grid place-items-center w-14 h-14 rounded-full text-white/60 tranisiton-all duration-200 group-hover:text-blue-600 group-hover:bg-blue-950/50">
                  <span className="ml-0.5">
                    <Icon name="PlayFill" size={48} />
                  </span>
                </div>
              </button>
            </>
          )}
        </div>

        {mediaType == "video" && (
          <div>
            <h3 className="text-white">{media.name}</h3>
            <p className="text-zinc-400 text-sm">{media.type}</p>
          </div>
        )}
      </div>

      {mediaType == "video" && <Modal />}
    </>
  );
}
