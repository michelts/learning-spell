import * as sentences from "~/entities/sentences";
import { generateQuote } from "~/services/quotes";
import { getTranslation } from "~/services/translation";
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

export async function createNextSentence(
  ...args: Parameters<typeof sentences.get>
) {
  const { env, id } = args[0];
  const latestSentences = await sentences.getGroup({ env, id });
  if (!latestSentences.length) {
    return null;
  }
  const text = await generateQuote({
    env,
    previousSentences: latestSentences.map((sentence) => sentence.text),
  });
  const newSentence = await sentences.create({
    env,
    text,
    learningSession: latestSentences[0].learningSession,
  });
  return newSentence;
}

export async function getSentenceTranslation(
  ...args: Parameters<typeof sentences.get>
) {
  const sentence = await sentences.get(...args);
  if (!sentence) {
    return "";
  }
  return await getTranslation({
    env: args[0].env as Env,
    text: sentence.text,
  });
}
