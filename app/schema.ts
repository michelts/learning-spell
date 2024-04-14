import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ulidFactory } from "ulid-workers";

export const sentences = sqliteTable(
  "sentences",
  {
    id: text("id").primaryKey().$defaultFn(getUlid),
    learningSession: text("learningSession").$defaultFn(getUlid),
    text: text("text").notNull(),
    transcription: text("transcription"),
  },
  (table) => ({
    learningSessionIdx: index("learningSession_idx").on(table.learningSession),
  }),
);

function getUlid() {
  const ulid = ulidFactory();
  return ulid();
}
