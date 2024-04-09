import type { MetaFunction } from "@remix-run/cloudflare";
import {AudioRecorder} from '../components/AudioRecorder';

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    { name: "description", content: "Spelling and tongue twister game for kids." },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Learning Spell</h1>
      <p>Repeat the sentence below:</p>
      <p>The quick brown fox jumps over the lazy dog</p>
      <AudioRecorder callback={() => null} />
    </div>
  );
}
