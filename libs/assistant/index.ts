import "dotenv/config";

import { openai } from "@ai-sdk/openai";
import { streamText, CoreMessage } from "ai";

const { OPENAI_API_KEY } = process.env;

const SYSTEM_PROMPT: CoreMessage = {
  role: "system",
  content: "",
};

export const runtime = "edge";

function toCoreMessage(content: string): CoreMessage {
  return {
    role: "user",
    content,
  };
}

export default async function (messages: string[]) {
  if (!OPENAI_API_KEY) {
    return;
  }

  const result = await streamText({
    model: openai("gpt-4-1106-preview"),
    messages: [SYSTEM_PROMPT, ...messages.map(toCoreMessage)],
  });

  return result.toDataStreamResponse();
}
