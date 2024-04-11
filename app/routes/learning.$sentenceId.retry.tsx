import { redirect } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { getSentenceById } from "~/services/sentences";

export async function action({ params }: ActionFunctionArgs) {
  const sentenceId = Number.parseInt(params.sentenceId ?? "");
  if (Number.isNaN(sentenceId)) {
    throw new Response("", { status: 404 });
  }
  const sentence = await getSentenceById(sentenceId);
  if (!sentence) {
    throw new Response("", { status: 404 });
  }
  return redirect(`/learning/${sentence.sentenceId}`);
}
