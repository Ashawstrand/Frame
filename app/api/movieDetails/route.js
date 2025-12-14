import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
        );

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch movie" }, {status: 500 }); 
        }

        const data = await response.json();
        return NextResponse.json(data);
    }
        catch (err) {
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
}