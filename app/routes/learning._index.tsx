import { redirect } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { beginPractice } from "~/services/sentences";
import type { Env } from "~/types";

export async function action({ context }: ActionFunctionArgs) {
  const sentence = await beginPractice({ env: context.env as Env });
  return redirect(`/learning/${sentence.sentenceId}`);
}
