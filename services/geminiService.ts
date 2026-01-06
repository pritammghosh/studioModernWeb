import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are the "Strategy Assistant" for a premium design and development studio.
Your goal is to briefly qualify leads and demonstrate the studio's expertise.
The studio specializes in: Product Strategy, UX/UI Design, and Frontend Engineering.
Tone: Professional, confident, concise, and helpful. "Awwwards" judge vibes but approachable.
Do not write long paragraphs. Keep answers under 50 words unless asked for detail.
If asked about pricing, say projects typically start at $25k and depend on scope.
If asked to start a project, guide them to the contact form.
`;

// Safely access env vars without crashing in browser
const getApiKey = (): string | undefined => {
  try {
    // Check if process exists before accessing it
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore errors in environments where process is restricted
  }
  return undefined;
};

export const initializeChat = (): void => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn("API Key not found. Chat widget will operate in fallback mode.");
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) {
        return "I'm currently unable to connect to the strategy engine. Please use the contact form to reach our team directly.";
    }
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Could you please rephrase that?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm experiencing a temporary connection issue. Please try again in a moment.";
  }
};