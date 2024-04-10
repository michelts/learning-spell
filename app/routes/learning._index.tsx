import { redirect } from "@remix-run/cloudflare";
import { beginPractice } from "~/services/sentences";

export async function action() {
	const sentence = await beginPractice();
	return redirect(`/learning/${sentence.sentenceId}`);
}
