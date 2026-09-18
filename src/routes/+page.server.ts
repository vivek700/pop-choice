import { ai } from '$lib/server/config';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// const interation = await ai.interactions.create({
	// 	model: 'gemini-3.5-flash-lite',
	// 	input: 'explain how ai works in a few words.'
	// });
	// console.log(interation.output_text);
};
