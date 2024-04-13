import { redirect } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { getSentenceById } from "~/services/sentences";
import type { Env } from "~/types";

export async function action({ params, context }: ActionFunctionArgs) {
  const sentenceId = params.sentenceId ?? "";
  if (!sentenceId) {
    throw new Response("", { status: 404 });
  }
  const sentence = await getSentenceById({
    env: context.env as Env,
    id: sentenceId,
  });
  if (!sentence) {
    throw new Response("", { status: 404 });
  }
  return redirect(`/learning/${sentence.id}`);
}
