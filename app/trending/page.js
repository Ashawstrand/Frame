"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MovieList from "../components/movieList";

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
        Trending
      </h1>
      
      <MovieList movies={movies} variant="trending" />
    
    </div>
  );
}
