"use client";

import Link from "next/link";
import Image from "next/image";
import Search from "./search";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/utils/firebase";
import { useState, useEffect } from "react";

export default function Header() {
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);

  const handleFavoritesClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  
  useEffect(() => {
    if (showModal) {
      //disable background scrolling when popup open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
        <div className="flex justify-start">
          <Link href="/" className="flex items-center">
            <Image
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto"
              src="/FrameLogo.png"
              alt="Frame logo"
              width={300}
              height={300}
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center px-6">
        <Search />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/trending"
            className="text-white text-xl font-semibold hover:text-red-600 transition-colors"
          >
            Trending
          </Link>

          <Link
            href="/favorites"
            onClick={handleFavoritesClick}
            className="flex items-center gap-2 text-white text-xl font-semibold hover:text-red-600 transition-colors"
          >
            Favorites
          </Link>

          {!loading && !user && (
            <Link
              href="/login"
              className="px-8 py-4 text-xl font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Sign In
            </Link>
          )}
          </nav>
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowModal(false)}
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
                onClick={() => setShowModal(false)}
                className="bg-gray-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Close
              </button>
              <Link
                href="/login"
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}