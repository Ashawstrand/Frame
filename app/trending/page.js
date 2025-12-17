"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
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
    <div className="flex min-h-screen flex-col font-sans dark:bg-black">
      <Header/>

      <h1 className="text-5xl text-center font-semibold leading-15 mt-30 mb-75">
        Trending
      </h1>
      
      <MovieList movies={movies} variant="trending" />
    
    </div>
  );
}
