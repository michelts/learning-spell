import type { MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Content } from "~/components/Content";
import { TranscriptionResult } from "~/components/TranscriptionResult";
import { VGrid } from "~/components/VGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    {
      name: "description",
      content: "Spelling and tongue twister game for kids.",
    },
  ];
};

export default function Index() {
  return (
    <VGrid>
      <Content>
        Hello, young spellers! With Learning Spell, you can practice spelling
        like never before. Record your voice, match it with the sentence, and
        let the learning begin!
      </Content>
      <Form method="post" action="/learning">
        <Button type="submit">Begin</Button>
      </Form>
    </VGrid>
  );
}
