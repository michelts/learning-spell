import * as sentences from "~/entities/sentences";
import { generateQuote } from "~/services/quotes";
import type { Env } from "~/types";

export async function beginPractice({ env }: { env: Env }) {
  const text = await generateQuote({ env });
  const sentence = await sentences.create({ env, text });
  return { id: sentence.id, text };
}

export async function getSentenceById(
  ...args: Parameters<typeof sentences.get>
) {
  return await sentences.get(...args);
}

export async function getNextSentence(
  ...args: Parameters<typeof sentences.get>
) {
  const { env, id } = args[0];
  const latestSentence = await sentences.get({ env, id });
  if (!latestSentence) {
    return null;
  }
  const text = await generateQuote({
    env,
    previousSentences: [latestSentence.text],
  });
  const newSentence = await sentences.create({ env, text });
  return newSentence;
}
