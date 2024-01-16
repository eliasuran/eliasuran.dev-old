<script lang="ts">
	import type { PostData } from '$lib/types/postdata';
	export let data;
	const meta: PostData = data.meta;
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-3xl">{meta.title}</h1>
	<div class="flex justify-between text-text/70">
		<h2 class="w-1/2">{meta.desc}</h2>
		<span>{meta.date}</span>
	</div>
	<p>body body</p>
</div>
