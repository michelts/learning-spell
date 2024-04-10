import type {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	MetaFunction,
} from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
	Form,
	useActionData,
	useLoaderData,
	useSubmit,
} from "@remix-run/react";
import { AudioRecorder } from "~/components/AudioRecorder";
import { Sentence } from "~/components/Sentence";
import { getSentenceById } from "~/services/sentences";
import { getTranscription } from "~/services/transcription";

interface Env {
	AI: unknown;
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Learning Spell" },
		{
			name: "description",
			content: "Spelling and tongue twister game for kids.",
		},
	];
};

export async function loader({ params }: LoaderFunctionArgs) {
	const sentenceId = Number.parseInt(params.sentenceId ?? "");
	if (Number.isNaN(sentenceId)) {
		throw new Response("", { status: 404 });
	}
	const sentence = await getSentenceById(sentenceId);
	if (!sentence) {
		throw new Response("", { status: 404 });
	}
	return json({ sentence });
}

export async function action({ request, context }: ActionFunctionArgs) {
	const body = await request.formData();
	const transcription = await getTranscription({
		audioFile: body.get("audio") as File,
		aiBind: (context.env as Env).AI,
	});
	return json(transcription);
}

export default function Index() {
	const { sentence } = useLoaderData<typeof loader>();
	const transcription = useActionData<typeof action>();
	const submit = useSubmit();
	const onSubmit = (audioBlob: Blob) => {
		const form = new FormData();
		form.append("audio", audioBlob, "audio.webm");
		submit(form, {
			method: "post",
			action: `/learning/${sentence.sentenceId}`,
			encType: "multipart/form-data",
		});
	};
	return (
		<>
			<Sentence text={sentence.text} />
			{!transcription ? (
				<AudioRecorder onRecordDone={onSubmit} />
			) : (
				<>
					<Sentence text={transcription.text ?? ""} />
					<Form method="post" action={`/learning/${sentence.sentenceId}/retry`}>
						<button type="submit">Retry</button>
					</Form>
					<Form method="post" action={`/learning/${sentence.sentenceId}/next`}>
						<button type="submit">Next</button>
					</Form>
				</>
			)}
		</>
	);
}
