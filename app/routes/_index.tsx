import type { MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Spell" },
    { name: "description", content: "Spelling and tongue twister game for kids." },
  ];
};

export default function Index() {
  return (
    <>
      <Form method="post" action="/learning">
        <button type="submit">Begin</button>
      </Form>
    </>
  );
}
