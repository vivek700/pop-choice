import movies from '../src/lib/data/content.js';
import { GoogleGenAI } from '@google/genai';
import { createClient } from '@supabase/supabase-js';

const ai = new GoogleGenAI({
	apiKey: process.env.AI_KEY
});

const supabase = createClient(
	process.env.PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SECRET_KEY,
);

async function main(input: any) {
	console.log("start embedding...")
	try {
		const data = await Promise.all(
			input.map(async (movie) => {
				const embedResp = await ai.models.embedContent({
					model: 'gemini-embedding-001',
					contents: movie.content
				});

				return {
					title: movie.title,
					releaseyear: movie.releaseYear,
					content: movie.content,
					embedding: embedResp.embeddings[0].values
				};
			})
		);

		console.log("start storing...")
		const { error } = await supabase.from('movies').insert(data);
		if (error) {
			throw error;
		}
		console.log('Embedding and storing complete');
	} catch (error) {
		console.error(error);
	}
}

main(movies);
