import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
    {
      // 1 hour cache
      next: { revalidate: 3600 },
    }
  );


const data = await response.json();
data.results = data.results.map(show => ({ ...show, media_type: "tv" }));

  return NextResponse.json(data);
}
