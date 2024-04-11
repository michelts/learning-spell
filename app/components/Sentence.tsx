import { Content } from "~/components/Content";

export function Sentence(props: { text: string }): JSX.Element {
	return (
		<>
			<Content>
				When you are ready, click to start recording and read the sentence below
				aloud:
			</Content>
			<Content>{props.text}</Content>
		</>
	);
}
