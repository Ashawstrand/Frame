import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing movie ID" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch credits" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
