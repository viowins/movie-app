"use client";
import React, { useState, useEffect } from "react";
import { fetchMediaApi } from "@/services/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import { GridSection } from "@/components";

export default async function MoviesContainer({ medias }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [newMovies, setNewMovies] = useState([])

  const fetchMovies = async () => {
    const apiKey = process.env.TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
    );
    const data = await response.json();
    setNewMovies(data.results)

    if (newMovies.length === 0) {
      setHasMore(false);
      return;
    }
  };

  setMovies((prevMovies) => [...prevMovies, ...newMovies]);
  setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
      <GridSection medias={movies} />
  );
}
