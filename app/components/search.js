"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(value)}`
      );
      const data = await response.json();
      setResults(data.results || []);
      setHighlightedIndex(-1);
    } else {
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      router.push(`/movieDetails/${results[highlightedIndex].id}`);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search movies..."
        className="w-full rounded-full pl-10 pr-4 py-4 border border-zinc-700 bg-black text-white 
                 placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black"
      />
      {results.length > 0 && (
        <ul className="absolute mt-2 w-full bg-black border border-zinc-700 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {results.map((movie, index) => (
            <li
              key={movie.id}
              className="flex items-center w-full px-4 py-2 font-semibold hover:bg-red-600 cursor-pointer"
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => router.push(`/movieDetails/${movie.id}`)}
            >
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  className="object-cover rounded mr-3"
                  width={40}
                  height={60}
                />
              )}
              <span className="text-white font-semibold">{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
