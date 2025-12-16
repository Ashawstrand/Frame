"use client";
import { useState, useEffect } from "react";
import MovieList from "../components/movieList";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const favs = await getFavorites();
      setFavorites(favs);
    }
    loadFavorites();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>
      <MovieList movies={favorites} showHeart/>
    </div>
  );
}
