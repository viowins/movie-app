"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components";
import { useCookies } from "react-cookie";

export default function FavoriteContainer() {
  const [cookies, setCookie] = useCookies(["favorite"]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // İstemci tarafında olduğumuzu belirten bir durum (state) ayarla
  }, []);

  if (!isClient) {
    return null; // İstemci tarafında olana kadar null döndür
  }

  if (cookies.favorite == undefined || cookies.favorite.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl font-semibold">No favorite movies yet</h2>
      </div>
    );
  } else {
    return (
      <div className="relative flex flex-col gap-5 mt-8">
        <h2 className="text-xl font-semibold">Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cookies.favorite.map((movie, key) => (
            <Card key={key} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}
