"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Trending() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchTrending() {
      const response = await fetch(
        'https://api.themoviedbb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}'
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchTrending();
  }, []);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
      <Image src="/FrameLogo.png" alt="Frame logo" width={300} height={300} />
      <Link
        href="/login"
        className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
      >
        Sign Out
      </Link>
    </header>
  );
}
