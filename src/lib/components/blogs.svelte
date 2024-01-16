<script lang="ts">
	import type { PostData } from '$lib/types/postdata';

	export let post: PostData;
</script>

<a
	href={`/blog/${post.slug}`}
	class="h-28 flex flex-col gap-2 text-start text-text/70 group hover:text-text duration-500"
>
	<div class="w-full">
		<h3>{post.title}</h3>
		<div class="w-full h-[2px] group-hover:bg-text bg-text/70 duration-500" />
	</div>
	<div class="flex justify-between">
		<p class="line-clamp-2 w-1/2">
			{post.desc}
		</p>
		<p>{new Date(post.date).toLocaleDateString('no-NO')}</p>
	</div>
</a>
