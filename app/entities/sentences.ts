import { eq } from "drizzle-orm";
import { db } from "~/db";
import { sentences } from "~/schema";
import type { WithEnv } from "~/types";

type Sentence = typeof sentences.$inferInsert;

export async function create({ env, ...values }: WithEnv<Sentence>) {
  const results = await db(env)
    .insert(sentences)
    .values(values)
    .returning({ id: sentences.id });
  return results[0];
}

export async function get({ env, id }: WithEnv<Pick<Sentence, "id">>) {
  const records = await db(env)
    .select()
    .from(sentences)
    .where(eq(sentences.id, id));
  if (records.length === 0) {
    return null;
  }
  return records[0];
}
