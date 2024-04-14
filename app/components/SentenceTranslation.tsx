export function SentenceTranslation({ translation }: { translation?: string }) {
  if (!translation) {
    return null;
  }
  return (
    <div className="text-rose-200/80">
      Tip: the translation of this sentence to portuguese is{" "}
      <em>&quot;{translation}&quot;</em>
    </div>
  );
}
