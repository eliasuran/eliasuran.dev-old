<script lang="ts">
	import '../app.css';
	import LinkIcon from '$lib/components/linkIcon.svelte';
</script>

<main class="w-screen flex flex-col items-center">
	<!-- header -->
	<div class="flex justify-between my-12 w-1/2 text-text/70">
		<a href="/" class="text-lg hover:text-text duration-500">eliasuran.dev</a>
		<div class="flex gap-4">
			<a class="underline duration-500 hover:text-text" href="/blogg">blogg</a>
			<a class="underline duration-500 hover:text-text" href="/musikk">musikk</a>
		</div>
	</div>

	<!-- content -->
	<div class="w-1/2">
		<slot />
	</div>

	<!-- footer -->
	<div class="my-12 w-1/2 flex justify-between text-text/70">
		<div>
			<h3 class="text-xl">Elias Rissanen Uran</h3>
			<span class="hover:text-text duration-500">elias.uran@wemail.no</span>
		</div>
		<div class="flex gap-2 self-end">
			<LinkIcon href="https://github.com/eliasuran" icon="mdi:github" />
			<LinkIcon href="https://www.linkedin.com/in/elias-uran-358987299/" icon="mdi:linkedin" />
		</div>
	</div>
</main>
