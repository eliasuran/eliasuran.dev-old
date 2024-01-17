import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`./../../../posts/${params.slug}.md`);
		return { meta: post.metadata, content: post.default, status: 200 };
	} catch (error) {
		return { status: 404 };
	}
};
