"use client";
import React from "react";
import { Poster } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/styles/swiper.css";
import Link from "next/link";

export default function Casts({ casts }) {
  return (
    <div className="relative flex flex-col gap-5 mt-8">
      <h2 className="text-xl font-semibold">Casts</h2>

      <div className="min-w-full">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {Object.values(casts).map((item, key) => (
            <SwiperSlide
              className="transition-transform duration-200 hover:scale-105"
              key={key}
            >
              <Link href={`/person/${item.id}`}>
                {item.profile_path === null ? (
                  <Poster path="dummy" alt={item.character} />
                ) : (
                  <Poster path={item.profile_path} alt={item.character} />
                )}
                <div className="flex flex-col mt-3">
                  <h3 className="text-white">{item.character}</h3>
                  <span className="text-zinc-400 text-sm">
                    {item.known_for_department}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
