import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({ results: [] });
    }

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("TMDB request failed");
        }

        const data = await response.json();
        return NextResponse.json({ results: data.results });
    }

    catch (err) {
        console.error(err);
        return NextResponse.json({ results: [], error: "Search Failed" }, { status: 500});
    }

}