import { GoogleGenAI } from "@google/genai";
import { site } from "@/content/site";
import { services, techCategories } from "@/content/services";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: "Please configure your GEMINI_API_KEY in the environment variables to enable the AI." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    // Prepare system instructions
    const systemInstruction = `
You are the official AI Assistant for ${site.name}. 
You are an expert in software engineering, AI, and digital transformation. 
CRITICAL: DO NOT use any markdown formatting (no asterisks, no hashes, no bullet points). Reply in plain text only.
CRITICAL: Keep your responses extremely short, concise, and professional (1-2 sentences maximum). 
Speak naturally and warmly like a human professional, not like a robotic AI.

Company context:
Tagline: ${site.tagline}
Subtext: ${site.subtext}
Contact: ${site.contact.email} | WhatsApp: ${site.contact.whatsapp}

Services:
${services.map(s => `- ${s.title}: ${s.description}`).join("\n")}

Your goal is to answer questions about our company, suggest services, and encourage them to book a strategy call or get a quote.
If asked something unrelated, politely steer them back to our services.

CRITICAL INSTRUCTIONS FOR ACTION BUTTONS:
If the user asks about internships, learning, academy, or students: You MUST include the exact text "[ACTION_INTERNSHIP]" at the very end of your response.
If the user asks about starting a project, getting a quote, business services, or pricing: You MUST include the exact text "[ACTION_QUOTE]" at the very end of your response.`;

    const ai = new GoogleGenAI({});
    
    // Format messages for the API (exclude the initial welcome message from assistant)
    let formattedMessages = messages.filter(m => m.content).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Gemini API requires the first message in the history to be from the user
    if (formattedMessages.length > 0 && formattedMessages[0].role === 'model') {
      formattedMessages.shift();
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: formattedMessages,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini API Error, falling back to Groq:", error);
    
    try {
      if (!process.env.GROQ_API_KEY) throw new Error("No GROQ_API_KEY available for fallback");
      
      // Format messages for OpenAI/Groq compatible format
      const groqMessages = [
        { role: "system", content: systemInstruction },
        ...messages.map(m => ({ 
          role: m.role === 'user' ? 'user' : 'assistant', 
          content: m.content 
        }))
      ];

      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: groqMessages,
          temperature: 0.7
        })
      });

      if (!groqRes.ok) throw new Error("Groq API returned an error");
      
      const groqData = await groqRes.json();
      return NextResponse.json({ reply: groqData.choices[0].message.content });
      
    } catch (groqError) {
      console.error("Groq Fallback Error:", groqError);
      return NextResponse.json(
        { reply: "I'm experiencing some technical difficulties. Please contact our team via WhatsApp." },
        { status: 500 }
      );
    }
  }
}
