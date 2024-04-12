import { Ai } from "@cloudflare/ai";
import type { Env } from "~/types";

export async function getTranscription(args: {
  audioFile: File;
  env: Env;
}) {
  const input = {
    audio: [...new Uint8Array(await args.audioFile.arrayBuffer())],
  };
  const ai = new Ai(args.env.AI);
  return await ai.run("@cf/openai/whisper", input);
}
