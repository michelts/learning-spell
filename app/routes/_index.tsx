import type { MetaFunction } from "@remix-run/cloudflare";
import { useNavigation } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Content } from "~/components/Content";
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
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  return (
    <VGrid>
      <Content>
        Hello, young spellers! With Learning Spell, you can practice spelling
        like never before. Read a sentence, record your voice, match it, and let
        the learning begin!
      </Content>
      <Form method="post" action="/learning">
        <Button type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Please wait" : "Begin"}
        </Button>
      </Form>
    </VGrid>
  );
}
