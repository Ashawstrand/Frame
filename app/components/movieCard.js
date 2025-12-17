"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toggleFavorite, getFavorites } from "../utils/favoritesFunctions";
import { auth } from "../utils/firebase";

export default function MovieCard({ movie, showHeart = true }) {
  const [isFave, setIsFave] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!showHeart) return;
    async function checkFav() {
      const faves = await getFavorites();
      setIsFave(faves.some((f) => f.movieId === movie.id));
    }
    checkFav();
  }, [movie.id, showHeart]);

  async function handleToggle() {
    const user = auth.currentUser;
    if (!user) {
      setShowPopup(true);
      return;
    }
    const newState = await toggleFavorite(movie);
    setIsFave(newState);
  }

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <Link href={`/movieDetails/${movie.id}`}>
          <Image
            className="rounded-lg cursor-pointer duration-300 hover:scale-105"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={550}
          />
        </Link>

        {showHeart && (
          <button
            onClick={handleToggle}
            className="absolute top-2 right-1 text-xl"
          >
            <span className="flex items-center justify-center bg-black/2 rounded-full p-2">
            {isFave ? (
              <FaHeart className="text-red-600 text-5xl duration-300 hover:scale-105" />
            ) : (
              <FaRegHeart className="text-white text-5xl duration-300 hover:scale-105" />
            )}
            </span>
          </button>
        )}
      </div>



      {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/70"
      onClick={() => setShowPopup(false)}
    />

    <div className="relative bg-black border-2 border-red-600 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center">
      <h3 className="text-2xl font-bold text-red-600 mb-4">
        Login Required
      </h3>
      <p className="text-lg text-gray-200 mb-8">
        You need to log in to access your favorites.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowPopup(false)}
          className="bg-gray-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Close
        </button>
        <Link
          href="/login"
          onClick={() => setShowPopup(false)}
          className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
