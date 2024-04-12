import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sentences = sqliteTable("sentences", {
  id: text("id").primaryKey(),
  sentence: text("sentence").notNull(),
  transcription: text("transcription"),
});
