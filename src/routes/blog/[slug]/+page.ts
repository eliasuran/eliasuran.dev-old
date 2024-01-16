import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`./../../../posts/${params.slug}.md`);
	if (!post) {
		return { status: 404 };
	}
	return { meta: post.metadata, content: post.default, status: 200 };
};
