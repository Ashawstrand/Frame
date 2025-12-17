"use client";

import Image from "next/image";


export default function Footer() {
  return (
    <footer className="text-center py-6 bg-black text-gray-400">
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2"
      >
        <Image
          src="/TMDB logo.svg"
          alt="TMDB Logo"
          width={150}
          height={60}
          className="mx-auto h-12"
        />
      </a>
    </footer>
  );
}
