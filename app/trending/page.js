"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch("/api/trending");
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Failed to fetch trending movies:", err);
      }
    }
    fetchTrending();
  }, []);

  return (
    <div className="bg-black">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
        <Image src="/FrameLogo.png" alt="Frame logo" width={300} height={300} />
        <Link
          href="/login"
          className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Sign Out
        </Link>
      </header>

      <h1 className="text-5xl text-center font-semibold leading-15 mb-20">
        Trending Movies
      </h1>
      
      <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Image
          className="rounded-lg cursor-pointer duration-300 hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          />
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}
