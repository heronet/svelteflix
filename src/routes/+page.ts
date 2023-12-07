import { get } from "$lib/api";
import type { MovieDetails, MovieList } from "$lib/type";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
	const [trending, now_playing, upcoming] = await Promise.all([
		get(fetch, "trending/movie/day") as Promise<MovieList>,
		get(fetch, "movie/now_playing") as Promise<MovieList>,
		get(fetch, "movie/upcoming") as Promise<MovieList>
	]);

	const featured: MovieDetails = await get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: "images"
	});

	return {
		trending,
		now_playing,
		upcoming,
		featured
	};
}
