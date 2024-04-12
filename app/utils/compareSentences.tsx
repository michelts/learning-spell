import { diffWords } from "diff";

export function compareSentences(sentence: string, transcription: string) {
  return diffWords(prepare(sentence), prepare(transcription), { ignoreCase: true }).map(
    (term) => ({ ...term, value: term.value.trim() }),
  );
}

function prepare(sentence: string) {
  return sentence.replaceAll(/[,.?!;:]/g, '');
}
