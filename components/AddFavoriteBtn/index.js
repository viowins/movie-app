"use client";
import { useState, useEffect, use } from "react";
import { Button, Icon } from "@/components";
import { useCookies } from "react-cookie";

export default function AddFavoriteBtn({ data }) {
  const [cookies, setCookie] = useCookies(["favorite"]);
  const [selected, setSelected] = useState(false);

  const handleAddFavorite = () => {
    const currentFavorites = cookies.favorite || [];

    // Eğer favori zaten eklenmişse, yeni favori eklememek için kontrol et
    if (!selected) {
      const updatedFavorites = [...currentFavorites, data];
      setCookie("favorite", updatedFavorites, { path: "/" });
    } else {
      const updatedFavorites = currentFavorites.filter(fav => fav.id !== data.id);
      setCookie("favorite", updatedFavorites, { path: "/" });
    }
  };

  useEffect(() => {
    cookies.favorite && cookies.favorite.some(fav => fav.id === data.id) ? setSelected(true) : setSelected(false);
  }, [cookies])

  return (
    <Button
      variant="contained"
      color="blueHover"
      width="square"
      rounded="full"
      startIcon={<Icon name="BookmarkOutline" />}
      selected={selected}
      onClick={handleAddFavorite}
    />
  );
}
