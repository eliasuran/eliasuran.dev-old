<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ delay: 200, duration: 500 }}
	out:fade={{ duration: 200 }}
	class="w-full flex flex-col gap-4"
></div>
