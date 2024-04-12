import { Ai } from "@cloudflare/ai";
import type { Env } from "~/types";

export async function generateQuote(env: Env) {
  const messages = [
    {
      role: "system",
      content: "You are a processor that returns structured JSON data.",
    },
    {
      role: "user",
      content:
        "Give me a single quote from harry potter movies or books. Return data only as structured JSON.",
    },
  ];
  const ai = new Ai(env.AI);
  const modelName = "@hf/thebloke/mistral-7b-instruct-v0.1-awq";
  const response = await ai.run(modelName, { messages });
  let quote: string;
  try {
    ({ quote } = JSON.parse(response.response));
  } catch {
    console.log("XXX", JSON.stringify(response));
    quote = "Unknown quote";
  }
  return quote;
}
