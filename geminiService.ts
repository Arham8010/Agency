import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string
});

export async function generateMarketingAudit(
  brandName: string,
  niche: string,
  goals: string
) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
You are a growth marketing expert.

Brand: ${brandName}
Niche: ${niche}
Goals: ${goals}
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            summary: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            projectedGrowth: { type: Type.STRING }
          },
          required: ["headline", "summary", "recommendations", "projectedGrowth"]
        }
      }
    });

    const text = response.text;

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
}
