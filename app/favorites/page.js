"use client";
import { useState, useEffect } from "react";
import MovieList from "../components/movieList";
import Header from "../components/header";
import Footer from "../components/footer";
import { auth, db } from "../utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const favesRef = collection(db, "users", user.uid, "favorites");
    const unsubscribe = onSnapshot(favesRef, (snapshot) => {
      const favs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFavorites(favs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <Header />
      <h1 className="text-5xl text-center font-semibold leading-15 mt-30 mb-70">
        My Favorites
      </h1>
      <MovieList movies={favorites} showHeart  alwaysFilled/>

      <Footer/>
    </div>
  );
}
