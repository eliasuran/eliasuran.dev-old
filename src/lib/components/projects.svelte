<script lang="ts">
	import type { Project } from '$lib/utils/projects';
	export let project: Project;
	import LinkIcon from './linkIcon.svelte';
</script>

<div class="h-36 flex flex-col gap-2 text-start text-text/70 group hover:text-text duration-500">
	<div class="w-full">
		<h3>{project.title}</h3>
		<div class="w-full h-[2px] group-hover:bg-text bg-text/70 duration-500" />
	</div>
	<p>{project.desc}</p>
	<div class="self-end flex gap-2">
		{#if project.url}
			<LinkIcon href={project.url} icon="mdi:code-block-html" />
		{/if}
		<LinkIcon href={project.repo} icon="mdi:github" />
	</div>
</div>
