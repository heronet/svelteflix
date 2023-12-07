const base = "https://api.movies.tastejs.com";
export const media_base = "https://images.tmdb.org/t/p";

export async function get(fetch: any, endpoint: string, params?: Record<string, string>) {
	const q = new URLSearchParams(params);
	const response = await fetch(`${base}/${endpoint}?${q}`);

	return await response.json();
}

export function media(file_path: string, width: number) {
	return `${media_base}/w${width}${file_path}`;
}
