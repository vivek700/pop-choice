import { z } from 'zod';

export const movieSchema = z.object({
	title: z.string().describe('The name of the movie.'),
	description: z.string().describe('Description of the movie.')
});

export type Movie = z.infer<typeof movieSchema>;
