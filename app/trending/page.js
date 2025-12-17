"use client";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MovieList from "../components/movieList";
import { auth, db } from "../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const favesRef = collection(db, "users", user.uid, "favorites");
    const unsubscribe = onSnapshot(favesRef, (snapshot) => {
      const favs = snapshot.docs.map((doc) => ({
        id: doc.data().movieId,
        ...doc.data(),
      }));
      setFavorites(favs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-sans dark:bg-black">
      <Header />

      <h1 className="text-5xl text-center font-semibold leading-15 mt-30 mb-70">
        Trending
      </h1>

      {movies.length === 0 ? (
        <div className="flex flex-1 items-center justify-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <MovieList movies={movies} showHeart favorites={favorites} />
      )}

      <Footer />
    </div>
  );
}
