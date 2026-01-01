
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generateMarketingAudit(brandName: string, niche: string, goals: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class growth marketing consultant for Elevate Creatives agency. 
                 Analyze this brand and provide a high-level growth strategy that highlights our "Agentic AI" capabilities.
                 Brand: ${brandName}
                 Niche: ${niche}
                 Current Goals: ${goals}
                 
                 Your recommendations should include how autonomous AI agents can improve their specific business operations.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "A catchy headline for the audit" },
            summary: { type: Type.STRING, description: "Professional executive summary" },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3-5 high-impact actionable recommendations focusing on Agentic AI and Performance"
            },
            projectedGrowth: { type: Type.STRING, description: "A percentage range of projected growth with Elevate's help" }
          },
          required: ["headline", "summary", "recommendations", "projectedGrowth"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
}
