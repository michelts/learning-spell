import { Ai } from "@cloudflare/ai";

export async function getTranscription(args: {
	audioFile: File;
	aiBind: unknown;
}) {
	const input = {
		audio: [...new Uint8Array(await args.audioFile.arrayBuffer())],
	};
	const ai = new Ai(args.aiBind);
	return await ai.run("@cf/openai/whisper", input);
}
