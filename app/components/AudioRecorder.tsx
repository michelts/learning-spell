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

const charToSecondsRate = 6;

export function AudioRecorder({ text, isProcessing, onRecordDone }: Props) {
  const hasBeenCalled = useRef(false);
  const recordingLimit = Number.parseInt(
    String(Math.ceil(text.length / charToSecondsRate)),
  );

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
    if (recordingTime > recordingLimit) {
      stopRecording();
    }
  }, [recordingTime, recordingLimit, stopRecording]);

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
          data-testid="record-button"
        >
          <ButtonLabel
            step={recordingLimit - recordingTime}
            isProcessing={isProcessing}
            isRecording={isRecording}
          />
        </Button>
      </HGrid>
    </VGrid>
  );
}

function ButtonLabel({
  step,
  isRecording,
  isProcessing,
}: { step: number; isRecording: boolean; isProcessing: boolean }) {
  if (isProcessing) {
    return "Please Wait";
  }
  if (isRecording) {
    return (
      <>
        {step ? (
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100/60 text-rose-900">
            {step}
          </span>
        ) : null}{" "}
        Stop Recording
      </>
    );
  }
  return "Start Recording";
}
