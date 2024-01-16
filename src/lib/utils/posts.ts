import type { PostData } from '$lib/types/postdata';

export async function getPosts() {
	let posts: PostData[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<PostData, 'slug'>;
			const post = { ...metadata, slug };
			post.published && posts.push(post as PostData);
		}
	}

	posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}
