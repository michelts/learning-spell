import { ulidFactory } from "ulid-workers";

import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sentences = sqliteTable("sentences", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => {
      const ulid = ulidFactory();
      return ulid();
    }),
  text: text("text").notNull(),
  transcription: text("transcription"),
});
