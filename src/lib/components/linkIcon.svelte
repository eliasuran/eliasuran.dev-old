<script lang="ts">
	import Icon from '@iconify/svelte';
	export let href: string;
	export let icon: string;
</script>

<a {href}>
	<Icon {icon} height={30} class="text-text/70 hover:text-text duration-500" />
</a>
