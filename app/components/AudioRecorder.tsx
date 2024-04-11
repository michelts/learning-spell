import { useEffect, useRef } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { Button } from "~/components/Button";
import { Content } from "~/components/Content";
import { HGrid } from "~/components/HGrid";
import { Sentence } from "~/components/Sentence";
import { VGrid } from "~/components/VGrid";

interface Props {
  text: string;
  isProcessing: boolean;
  onRecordDone: (audioData: Blob) => void;
}

export function AudioRecorder({ text, isProcessing, onRecordDone }: Props) {
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
      <Sentence>{text}</Sentence>
      <HGrid>
        <Button
          type="button"
          onClick={() => {
            if (!isRecording) {
              startRecording();
            } else {
              stopRecording();
            }
          }}
          disabled={isProcessing}
          isLoading={isProcessing}
        >
          <ButtonLabel isProcessing={isProcessing} isRecording={isRecording} />
        </Button>
      </HGrid>
    </VGrid>
  );
}

function ButtonLabel({
  isRecording,
  isProcessing,
}: { isRecording: boolean; isProcessing: boolean }) {
  if (isProcessing) {
    return "Please Wait";
  }
  if (isRecording) {
    return "Stop Recording";
  }
  return "Start Recording";
}
