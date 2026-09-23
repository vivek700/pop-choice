import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import {
	buildSearchQuery,
	embedQuery,
	findMatches,
	movieRecommendation
} from '$lib/server/recommend';

export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();

		const ques1 = fdata.get('ques-1'),
			ques2 = fdata.get('ques-2'),
			ques3 = fdata.get('ques-3');

		if (
			typeof ques1 !== 'string' ||
			!ques1.trim() ||
			typeof ques2 !== 'string' ||
			!ques2.trim() ||
			typeof ques3 !== 'string' ||
			!ques3.trim()
		) {
			return fail(400, { message: 'Please answer all three questions.' });
		}

		try {
			const query = (await buildSearchQuery(ques1, ques2, ques3)) as string;

			const embedding = await embedQuery(query);

			if (!embedding) {
				return fail(500, {
					message: 'Failed to generate embeddings.'
				});
			}

			const movies = await findMatches(embedding);

			const movie = await movieRecommendation(movies[0], query);

			return {
				success: true,
				movie
			};
		} catch (error) {
			console.error(error);
			return fail(500, { message: "It's us not you. Something went wrong." });
		}
	}
} satisfies Actions;
