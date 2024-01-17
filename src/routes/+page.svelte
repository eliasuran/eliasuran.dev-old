<script lang="ts">
	import type { Project } from '$lib/utils/projects';
	export let data;
	const projects: Project[] = data.projects;
	const posts: PostData[] = data.posts;
	import Projects from '$lib/components/projects.svelte';
	import Blogs from '$lib/components/blogs.svelte';
	import type { PostData } from '$lib/types/postdata.js';
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ delay: 200, duration: 500 }}
	out:fade={{ duration: 200 }}
	class="w-full grid place-items-center"
>
	<div class="flex flex-col gap-6">
		<!-- description -->
		<p>
			Hei, jeg heter Elias og er en 17 år gammel elev på Elvebakken VGS. Jeg liker å gjøre web-dev,
			jobbe med interessante og utfordrende problemer og å bruke Vim :)
		</p>
		<!-- projects -->
		<h2 class="text-xl">prosjekter</h2>
		<div class="w-full grid sm:grid-cols-2 grid-cols-1 gap-4">
			{#each projects as project}
				<Projects {project} />
			{/each}
		</div>
		<!-- blog -->
		<h2 class="text-xl">blogg</h2>
		<div class="w-full flex flex-col gap-4">
			{#each posts as post}
				<Blogs {post} />
			{/each}
		</div>
	</div>
</div>
