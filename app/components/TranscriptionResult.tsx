import type { ReactNode } from "react";
import { Sentence } from "~/components/Sentence";
import { compareSentences } from "~/utils/compareSentences";

export function TranscriptionResult({
  text,
  transcription,
}: { text: string; transcription: string }): JSX.Element {
  const terms = compareSentences(text, transcription);
  return (
    <Sentence>
      <div className="flex flex-wrap gap-1">
        {terms.map((term, index) => {
          if (term.added) {
            return <Added key={index}>{term.value}</Added>;
          }
          if (term.removed) {
            return <Removed key={index}>{term.value}</Removed>;
          }
          return <Correct key={index}>{term.value}</Correct>;
        })}
      </div>
    </Sentence>
  );
}

const Added = ({ children }: { children: ReactNode }) => (
  <span className="whitespace-nowrap underline decoration-red-500 decoration-wavy underline-offset-2">
    {children}
  </span>
);

const Removed = ({ children }: { children: ReactNode }) => (
  <span className="whitespace-nowrap line-through decoration-2 decoration-red-500">
    {children}
  </span>
);

const Correct = ({ children }: { children: ReactNode }) => (
  <span className="whitespace-nowrap underline decoration-2 decoration-green-500 underline-offset-2">
    {children}
  </span>
);
