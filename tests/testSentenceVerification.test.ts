import { expect, test } from "vitest";
import { compareSentences } from "~/utils/compareSentences";

test("should return all words as correct if sentences match", () => {
  const sentence = "That's all folks";
  const transcription = sentence.toLowerCase();
  const output = compareSentences(sentence, transcription);
  expect(output).toEqual([{ value: "that's all folks", count: 7 }]);
});

test("should ignore punctuation", () => {
  const sentence = "That's? all folks!";
  const transcription = "That's all, folks.";
  const output = compareSentences(sentence, transcription);
  expect(output).toEqual([{ value: "That's all folks", count: 7 }]);
});

test("should indicate incorrect words", () => {
  const sentence = "That's all folks";
  const transcription = "This all falcons";
  const output = compareSentences(sentence, transcription);
  expect(output).toEqual([
    { count: 3, added: undefined, removed: true, value: "That's" },
    { count: 1, added: true, removed: undefined, value: "This" },
    { count: 3, value: "all" },
    { count: 1, added: undefined, removed: true, value: "folks" },
    { count: 1, added: true, removed: undefined, value: "falcons" },
  ]);
});
