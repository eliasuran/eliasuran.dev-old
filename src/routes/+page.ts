import { getProjects } from '$lib/utils/projects';
import { getPosts } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const projects = await getProjects();
	const posts = await getPosts();
	return { projects: projects, posts: posts };
};
