import { GoogleGenAI } from "@google/genai";

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
      model: "gemini-2.0-flash",  // Use stable model; "gemini-3-flash-preview" may be experimental [web:26][web:32]
      contents: [{
        role: "user",
        parts: [{
          text: `You are a growth marketing expert.

Brand: ${brandName}
Niche: ${niche}
Goals: ${goals}`
        }]
      }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object" as const,
          properties: {
            headline: { type: "string" as const },
            summary: { type: "string" as const },
            recommendations: {
              type: "array" as const,
              items: { type: "string" as const }
            },
            projectedGrowth: { type: "string" as const }
          },
          required: ["headline", "summary", "recommendations", "projectedGrowth"] as const
        }
      }
    });

    const text = response.text();
    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
}
