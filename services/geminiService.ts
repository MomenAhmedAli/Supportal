import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Safely retrieve API key without crashing if process is undefined
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    console.warn("Environment access failed", e);
  }
  return '';
};

const apiKey = getApiKey();

// Only initialize AI if key is present to avoid immediate errors
let ai: GoogleGenAI | null = null;
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Failed to initialize GoogleGenAI", e);
  }
}

export const generateChatResponse = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!apiKey || !ai) {
    return "I'm sorry, I'm currently offline (API Key missing or invalid). Please email Momen directly!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-1.5-flash', // Fallback to a known stable model name for this context if preview fails
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts,
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the brain. Please try again later.";
  }
};