import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Missing movie ID" }, { status: 400 });
    }
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
        
        // 1 day cache
        {
            next: { revalidate: 86400 },
        }
    );

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch movie" }, { status: 500 }); 
        }

        const data = await response.json();
        return NextResponse.json(data);
    }
        catch (err) {
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
}