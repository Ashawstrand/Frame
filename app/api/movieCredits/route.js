import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");


    if (!id) {
        return NextResponse.json({ error: "Missing movie ID" }, { status: 400});
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`);
    
        if (!response.ok) {
            throw new Error("Failed to fetch credits from TMDB");
        }

        const data = await response.json();

        return NextResponse.json({ cast: data.cast }); 
    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500});
    }
}