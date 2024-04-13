import { Ai } from "@cloudflare/ai";
import type { Env } from "~/types";

const fallbackQuote =
  "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.";

export async function generateQuote(args: {
  env: Env;
  previousSentences?: string[];
}) {
  const messages = Array.from(getMessages(args.previousSentences ?? []));
  const ai = new Ai(args.env.AI);
  const modelName = "@hf/thebloke/mistral-7b-instruct-v0.1-awq";
  const result = (await ai.run(modelName, { messages })) as {
    response: string;
  };
  try {
    const jsonMatch = result.response.replaceAll("\n", "").match(/(\{.*\})/);
    if (!jsonMatch) {
      return fallbackQuote;
    }
    const data = JSON.parse(jsonMatch[0]);
    return data.quote;
  } catch {
    return fallbackQuote;
  }
}

function* getMessages(texts: string[]) {
  yield {
    role: "system",
    content: "You are a quote master.",
  };
  yield {
    role: "user",
    content:
      "Give me a single quote from harry potter movies or books. Return data only as structured JSON.",
  };
  for (const text of texts) {
    yield { role: "system", content: JSON.stringify({ quote: text }) };
    yield {
      role: "user",
      content: "Return another one. Again only as structured JSON.",
    };
  }
}
