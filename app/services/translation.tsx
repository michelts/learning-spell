import { Ai } from "@cloudflare/ai";
import type { Env } from "~/types";

export async function getTranslation(args: {
  env: Env;
  text: string;
}) {
  const ai = new Ai(args.env.AI);
  const { translated_text } = await ai.run("@cf/meta/m2m100-1.2b", {
    text: args.text,
    source_lang: "english",
    target_lang: "portuguese",
  });
  return translated_text;
}
