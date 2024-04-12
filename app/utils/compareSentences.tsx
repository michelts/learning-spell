import { diffWords } from "diff";

export function compareSentences(sentence: string, transcription: string) {
  return diffWords(prepare(sentence), prepare(transcription), {
    ignoreCase: true,
  }).map((term, index) => ({ ...term, value: term.value.trim(), id: index }));
}

function prepare(sentence: string) {
  return sentence.replaceAll(/[,.?!;:]/g, "");
}
