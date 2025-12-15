"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function MovieDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`/api/movieDetails?id=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    }

    async function fetchCast() {
      try {
        const response = await fetch(`/api/movieCredits?id=${id}`);
        if (!response.ok) throw new Error("failed to fetch cast");
        const data = await response.json();
        setCast(data.cast || []);
      }
      catch (err) {
        console.error(err);
      }
    }

    if (id) {
      fetchMovie();
      fetchCast();
    }
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="font-semibold">{error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="font-semibold">Loading movie details...</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
        <Image src="/FrameLogo.png" alt="Frame logo" width={300} height={300} />
        <Link
          href="/login"
          className="flex items-center justify-center mr-4 px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Sign Out
        </Link>
      </header>

      <main className="max-w-3xl mx-auto flex flex-col items-center gap-8 mt-5">
        <Image
          className="rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={400}
          height={525}
        />

        <div className="space-y-6 text-center text-lg mb-25">
          <p className="text-white text-xl leading-relaxed mb-10">
            {movie.overview}
          </p>

          <ul className="space-y-2 text-gray-400">
            <li>
              <span className="font-semibold text-white">Release Date:</span>{" "}
              {movie.release_date}
            </li>
            <li>
              <span className="font-semibold text-white">Rating:</span>{" "}
              {movie.vote_average && movie.vote_average > 0
              ? movie.vote_average.toFixed(2) + " / 10"
              : "Not yet rated"}
            </li>

            <li>
              <span className="font-semibold text-white">Runtime:</span>{" "}
              {movie.runtime} mins
            </li>
            <li>
              <span className="font-semibold text-white">Genres:</span>{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </li>

            <li>
              <span className="font-semibold text-white">Cast: </span>{" "}
              {cast.slice(0,10).map((actor) => actor.name).join(", ")}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
