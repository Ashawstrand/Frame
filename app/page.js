"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MovieList from "./components/movieList";

export default function Home() {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      const response = await fetch("/api/trending");
      const data = await response.json();
      setTrendingMovies(data.results || []);
    }
    fetchTrending();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
        <Link href="/" className="flex items-center">
          <Image
            className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto"
            src="/FrameLogo.png"
            alt="Frame logo"
            width={300}
            height={300}
          />
        </Link>
        <Link
          href="/login"
          className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Sign In
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-16 w-full bg-white dark:bg-black text-center">
        <h2
          className={`max-w-xl text-5xl mt-30 mb-75 font-semibold leading-15 tracking-tight text-black dark:text-zinc-50 mb-60
            transition-all duration-1500 ease-out
            ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          All your favorite movies, right here.
        </h2>

        <MovieList movies={trendingMovies.slice(0, 12)} />
      </main>

      <footer
      className="text-center">
        <p>This will be a section dedicated to noting the TMDB API</p>
      </footer>
    </div>
  );
}
