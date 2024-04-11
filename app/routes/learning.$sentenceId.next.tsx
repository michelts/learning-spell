import { redirect } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { getNextSentence } from "~/services/sentences";

export async function action({ params }: ActionFunctionArgs) {
  const sentenceId = Number.parseInt(params.sentenceId ?? "");
  if (Number.isNaN(sentenceId)) {
    throw new Response("", { status: 404 });
  }
  const nextSentence = await getNextSentence(sentenceId);
  if (!nextSentence) {
    throw new Response("", { status: 404 });
  }
  return redirect(`/learning/${nextSentence.sentenceId}`);
}
