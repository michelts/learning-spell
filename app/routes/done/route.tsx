import { Ai } from "@cloudflare/ai";
import type { MetaFunction, ActionFunctionArgs, AppLoadContext } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useActionData } from "@remix-run/react";

interface Env {
  AI: unknown;
}

interface TranscriptedResponse {
  text: string,
  word_count: number;
  words: Array<{word: string; start: number; end: number}>;
}


export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    { name: "description", content: "Spelling and tongue twister game for kids." },
  ];
};

export async function action({ request, context }: ActionFunctionArgs) {
  const body = await request.formData();
  const response = await getTranscription(body.get('audio') as File, context);
  return json(response);
}

async function getTranscription(audioFile: File, context: AppLoadContext) {
  const input = {audio: [...new Uint8Array(await audioFile.arrayBuffer())]}
  const ai = new Ai((context.env as Env).AI);
  return await ai.run("@cf/openai/whisper", input);
}

export default function Index() {
  const data = useActionData<TranscriptedResponse>();
  if(data === undefined) {
    return <p>Failure</p>
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Done!</h1>
      <p>{data.word_count} words: {data.text}</p>
    </div>
  );
}
