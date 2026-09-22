import { ai } from './config';
import { supabase } from '$lib/server/supabaseClient';

export async function buildSearchQuery(ques1: string, ques2: string, ques3: string) {
	return `Favorite movie: ${ques1}. Mood: ${ques2}. Tone: ${ques3}.`;
}

export async function movieRecommendation(movie: any, query: string) {
	const systemInstruction = `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movie and a question. Your main job is to formulate a short answer to the question using the provided context. If you are unsure and cannot find the answer in the context, say, "Sorry, I don't know the answer." Please do not make up the answer.`;

	const inputText = `Context: ${movie.content}\n Ouestion: ${query}`;
	const resp = await ai.interactions.create({
		model: 'gemini-3.5-flash-lite',
		input: inputText,
		system_instruction: systemInstruction
	});

	return resp.output_text;
}

export async function embedQuery(text: string) {
	const resp = await ai.models.embedContent({
		model: 'gemini-embedding-001',
		contents: text
	});

	return resp.embeddings?.[0]?.values;
}

export async function findMatches(embedding: number[]) {
	const { data, error } = await supabase.rpc('match_movies', {
		query_embedding: embedding,
		match_threshold: 0.5,
		match_count: 1
	});

	if (error) {
		throw new Error(error?.message);
	}
	return data;
}
