"use client";
import { useState } from "react";
import { Icon, Button, Poster } from "@/components";
import { motion } from "framer-motion";
import cn from "classnames";
import Link from "next/link";

export default function Card({ title, movie = {}, ...props }) {
  const {
    id,
    media_type,
    poster_path,
    original_title,
    original_name,
    overview,
    adult,
  } = movie;
  const [showCardBody, setShowCardBody] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative transition-all duration-200 hover:shadow-2xl hover:z-[999]"
      onMouseEnter={() => setShowCardBody(true)}
      onMouseLeave={() => setShowCardBody(false)}
      {...props}
    >
      <Poster
        className="object-cover aspect-poster rounded-lg transition-all duration-200 delay-200 group-hover:rounded-b-none"
        to={`/${media_type}/${id}`}
        path={movie.poster_path}
        alt={media_type == "movie" ? movie.original_title : movie.original_name}
      />

      <div
        className={cn(
          "absolute top-full grid transition-all duration-150 delay-200",
          showCardBody ? "grid-rows-1fr" : "grid-rows-0fr"
        )}
      >
        <div className="overflow-hidden rounded-b-lg">
          <div className="bg-zinc-900 px-4 pt-4 pb-5">
            <div className="flex flex-row items-center justify-between flex-nowrap gap-4 mb-3">
              <div className="flex items-center gap-3">
                <Link
                  className="text-lg font-semibold mb-2"
                  href={`/${media_type}/${id}`}
                >
                  {media_type == "movie" ? movie.original_title : movie.original_name}
                </Link>
              </div>
              <Button
                variant="contained"
                color="blueHover"
                width="square"
                rounded="full"
                startIcon={<Icon name="BookmarkOutline" />}
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-zinc-400">2023</span>
              {movie.adult && (
                <span className="bg-zinc-700 rounded text-xs font-semibold text-white py-1 px-1.5">
                  +18
                </span>
              )}
            </div>
            <p
              className="text-zinc-400 font-medium text-sm overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
