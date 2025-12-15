import MovieCard from "./movieCard";

export default function MovieList({ movies, variant, onRemove }) {
    
    return (

        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-20 mb-50">
                {movies.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    movie={movie}
                    showRemove={variant === "favorites"}
                    onRemove={onRemove}
                    />
            ))}
            </div>
        </div>
    );
}