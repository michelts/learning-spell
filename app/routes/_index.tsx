import type { MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { Button } from '~/components/Button';

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
		<>
			<Form method="post" action="/learning">
				<Button type="submit">Begin</Button>
			</Form>
		</>
	);
}
