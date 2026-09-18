import { GoogleGenAI } from '@google/genai';
import { AI_KEY } from '$env/static/private';

export const ai = new GoogleGenAI({
	apiKey: AI_KEY
});
