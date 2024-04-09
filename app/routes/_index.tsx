import { Ai } from "@cloudflare/ai";
import type { MetaFunction, ActionFunction } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData, Form, useSubmit } from "@remix-run/react";
import {AudioRecorder} from '../components/AudioRecorder';

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    { name: "description", content: "Spelling and tongue twister game for kids." },
  ];
};

export default function Index() {
  const submit = useSubmit();
  const onSubmit = (audioBlob: Blob) => {
    const form = new FormData();
    form.append('audio', audioBlob, 'audio.webm');
    submit(form, {method: 'post', action: '/done', encType: 'multipart/form-data'});
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Learning Spell</h1>
      <p>Repeat the sentence below:</p>
      <p>The quick brown fox jumps over the lazy dog</p>
      <AudioRecorder callback={onSubmit} />
    </div>
  );
}
