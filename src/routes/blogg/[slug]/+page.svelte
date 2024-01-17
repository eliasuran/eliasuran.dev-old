<script lang="ts">
	import type { PostData } from '$lib/types/postdata';
	export let data;
	const meta: PostData = data.meta;
	const content = data.content;
	const status = data.status;
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.desc} />
	<meta property="og:site_name" content="Elias Rissanen Uran" />
	<meta property="og:url" content={`https://eliasura.dev/blog/${meta.slug}`} />
	<meta name="description" content={meta.desc} />
</svelte:head>

<div in:fade={{ delay: 200, duration: 600 }} out:fade={{ duration: 200 }}>
	{#if status === 200}
		<article class="flex flex-col gap-4">
			<h1 class="text-4xl">{meta.title}</h1>
			<div class="flex justify-between text-text/70">
				<h2 class="w-1/2">{meta.desc}</h2>
				<span>{new Date(meta.date).toLocaleDateString('no-NO')}</span>
			</div>
			<div class="w-[90%] h-[0.5px] self-center bg-text/70" />
			<div class="prose"><svelte:component this={content} /></div>
		</article>
	{:else if status === 404}
		<h1>Post not found: 404</h1>
	{:else}
		<h1>Something went wrong: {status}</h1>
	{/if}
</div>
