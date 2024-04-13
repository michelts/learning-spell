import { eq } from "drizzle-orm";
import { alias } from "drizzle-orm/sqlite-core";
import { SetRequired } from "type-fest";

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

export async function get({
  env,
  id,
}: WithEnv<SetRequired<Pick<Sentence, "id">, "id">>) {
  const records = await db(env)
    .select()
    .from(sentences)
    .where(eq(sentences.id, id));
  if (records.length === 0) {
    return null;
  }
  return records[0];
}

export async function getGroup({
  env,
  id,
}: WithEnv<SetRequired<Pick<Sentence, "id">, "id">>) {
  const parent = alias(sentences, "parent");
  const records = await db(env)
    .select({
      id: parent.id,
      learningSession: parent.learningSession,
      text: parent.text,
      transcription: parent.transcription,
    })
    .from(sentences)
    .innerJoin(parent, eq(parent.id, sentences.id))
    .where(eq(sentences.id, id));
  return records;
}
