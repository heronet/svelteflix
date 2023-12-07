<script lang="ts">
	import ResultsPage from "$lib/components/results-page.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="column">
	<h1>{data.title}</h1>

	<ResultsPage
		movies={data.movies}
		next={data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null}
	/>
</div>
