import { redirect } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { createNextSentence } from "~/services/sentences";
import type { Env } from "~/types";

export async function action({ params, context }: ActionFunctionArgs) {
  const sentenceId = params.sentenceId ?? "";
  if (!sentenceId) {
    throw new Response("", { status: 404 });
  }
  const nextSentence = await createNextSentence({
    env: context.env as Env,
    id: sentenceId,
  });
  if (!nextSentence) {
    throw new Response("", { status: 404 });
  }
  return redirect(`/learning/${nextSentence.id}`);
}
