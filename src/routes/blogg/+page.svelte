<script lang="ts">
	import Blogs from '$lib/components/blogs.svelte';
	import type { PostData } from '$lib/types/postdata.js';

	export let data;
	const posts: PostData[] = data.posts;
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ delay: 200, duration: 500 }}
	out:fade={{ duration: 200 }}
	class="w-full flex flex-col gap-4"
>
	{#each posts as post}
		<Blogs {post} />
	{/each}
</div>
