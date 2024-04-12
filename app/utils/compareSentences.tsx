import { diffWords } from "diff";

export function compareSentences(sentence: string, transcription: string) {
  return diffWords(sentence, transcription, { ignoreCase: true }).map(
    (term) => ({ ...term, value: term.value.trim() }),
  );
}
