"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function FavoritesPage(){

  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    async function loadFavorites() {
      const favs = await getFavorites();
      setFavorites(favs);
    }
    loadFavorites();
  }, []);

  return(
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">My Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map(movie => (
          <div key={movie.movieId} className="flex flex-col items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}