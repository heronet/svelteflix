import { get } from "$lib/api";
import type { MovieList } from "$lib/type";
import { views } from "$lib/views";
import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch, url }) => {
	const view = views[params.view];
	const page = url.searchParams.get("page") ?? 1;

	const data: MovieList = await get(fetch, view.endpoint);

	return {
		view: params.view,
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results,
		next_page: data.page < data.total_pages ? data.page + 1 : null
	};
}) satisfies PageLoad;
