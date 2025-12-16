import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie, showRemove, onRemove }) {
  return (
    <div className="text-center">
      <Link href={`/movieDetails/${movie.id}`}>
        <Image
          className="rounded-lg cursor-pointer duration-300 hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
        />
      </Link>

      {showRemove && (
        <button
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => onRemove(movie.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
}
