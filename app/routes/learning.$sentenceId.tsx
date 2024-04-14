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
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { AudioRecorder } from "~/components/AudioRecorder";
import { Button } from "~/components/Button";
import { Content } from "~/components/Content";
import { HGrid } from "~/components/HGrid";
import { SentenceTranslation } from "~/components/SentenceTranslation";
import { TranscriptionResult } from "~/components/TranscriptionResult";
import { VGrid } from "~/components/VGrid";
import { getSentenceById, getSentenceTranslation } from "~/services/sentences";
import { getTranscription } from "~/services/transcription";
import type { Env } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    {
      name: "description",
      content: "Spelling and tongue twister game for kids.",
    },
  ];
};

export async function loader({ request, params, context }: LoaderFunctionArgs) {
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
  return json({ sentence });
}

export async function action({ request, params, context }: ActionFunctionArgs) {
  const body = await request.formData();
  if (!params.sentenceId) {
    throw new Response("", { status: 404 });
  }
  const [transcription, translation] = await Promise.all([
    getTranscription({
      env: context.env as Env,
      audioFile: body.get("audio") as File,
    }),
    getSentenceTranslation({
      env: context.env as Env,
      id: params.sentenceId,
    }),
  ]);
  return json({ transcription, translation });
}

export default function Index() {
  const { sentence } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const { transcription, translation } = actionData ?? {};
  const submit = useSubmit();
  const navigation = useNavigation();
  const onSubmit = (audioBlob: Blob) => {
    const form = new FormData();
    form.append("audio", audioBlob, "audio.webm");
    submit(form, {
      method: "POST",
      action: `/learning/${sentence.id}`,
      encType: "multipart/form-data",
    });
  };

  if (!transcription?.text) {
    return (
      <AudioRecorder
        text={sentence.text}
        onRecordDone={onSubmit}
        isProcessing={navigation.state !== "idle"}
      />
    );
  }
  return (
    <VGrid>
      <Content>This is what you just read:</Content>
      <TranscriptionResult
        text={sentence.text}
        transcription={transcription.text}
      />
      <HGrid>
        <Form method="post" action={`/learning/${sentence.id}/retry`}>
          <Button
            type="submit"
            disabled={navigation.state !== "idle"}
            isLoading={
              navigation.state !== "idle" &&
              navigation.location.pathname === `/learning/${sentence.id}/retry`
            }
          >
            Retry
          </Button>
        </Form>
        <Form method="post" action={`/learning/${sentence.id}/next`}>
          <Button
            type="submit"
            disabled={navigation.state !== "idle"}
            isLoading={
              navigation.state !== "idle" &&
              navigation.location.pathname === `/learning/${sentence.id}/next`
            }
          >
            Next
          </Button>
        </Form>
      </HGrid>
      <SentenceTranslation translation={translation} />
    </VGrid>
  );
}
