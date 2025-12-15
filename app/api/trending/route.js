import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`,

        //1 hour cache
    {
        next: { revalidate: 3600 },
    }
);

    const data = await response.json();
    return NextResponse.json(data);
}