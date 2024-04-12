import { generateQuote } from "~/services/quotes";
import type { Env } from "~/types";

const _messages = [
  { sentenceId: 1, text: "The quick brown fox jumps over the lazy dog" },
  { sentenceId: 2, text: "Waltz, bad nymph, for quick jigs vex." },
  { sentenceId: 3, text: "Glib jocks quiz nymph to vex dwarf." },
  { sentenceId: 4, text: "Sphinx of black quartz, judge my vow." },
  { sentenceId: 5, text: "How quickly daft jumping zebras vex!" },
  { sentenceId: 6, text: "The five boxing wizards jump quickly." },
  { sentenceId: 7, text: "Jackdaws love my big sphinx of quartz." },
  { sentenceId: 8, text: "Pack my box with five dozen liquor jugs." },
];

export async function beginPractice(args: { env: Env }) {
  const quote = await generateQuote(args.env);
  return { sentenceId: 1, text: _messages[0] };
}

export async function getSentenceById(sentenceId: number) {
  return _messages.find((message) => message.sentenceId === sentenceId);
}

export async function getNextSentence(sentenceId: number) {
  const index = _messages.findIndex(
    (message) => message.sentenceId === sentenceId,
  );
  if (index === -1 || index + 1 === _messages.length) {
    return null;
  }
  return _messages[index + 1];
}
