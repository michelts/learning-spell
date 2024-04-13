import { ulidFactory } from "ulid-workers";

import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sentences = sqliteTable("sentences", {
  id: text("id").primaryKey().$defaultFn(getUlid),
  learningSession: text("id").unique().$defaultFn(getUlid),
  text: text("text").notNull(),
  transcription: text("transcription"),
});

function getUlid() {
  const ulid = ulidFactory();
  return ulid();
}
