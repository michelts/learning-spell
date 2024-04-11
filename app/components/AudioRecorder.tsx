import { useEffect, useRef } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { Button } from "~/components/Button";
import { Content } from "~/components/Content";
import { HGrid } from "~/components/HGrid";
import { VGrid } from "~/components/VGrid";

interface Props {
	text: string;
	onRecordDone: (audioData: Blob) => void;
}

export function AudioRecorder({ text, onRecordDone }: Props) {
	const hasBeenCalled = useRef(false);
	const {
		isRecording,
		startRecording,
		stopRecording,
		recordingBlob,
		recordingTime,
	} = useAudioRecorder();

	useEffect(() => {
		if (!hasBeenCalled.current && recordingBlob) {
			hasBeenCalled.current = true;
			onRecordDone(recordingBlob);
		}
	}, [recordingBlob, onRecordDone]);

	useEffect(() => {
		console.log("XXX", recordingTime);
	}, [recordingTime]);

	return (
		<VGrid>
			<Content>
				When you are ready, click to start recording and read the sentence below
				aloud:
			</Content>
			<Content>{text}</Content>
			<HGrid>
				<Button
					type="button"
					onClick={() => startRecording()}
					disabled={isRecording}
				>
					{!isRecording ? "Record" : "Recording"}
				</Button>
				<Button
					type="button"
					onClick={() => stopRecording()}
					disabled={!isRecording}
				>
					Stop
				</Button>
			</HGrid>
		</VGrid>
	);
}
