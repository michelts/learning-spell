import {useEffect} from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

interface Props {callback: (blob: Blob) => void}

export function AudioRecorder({callback}: Props) {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    recordingTime,
  } = useAudioRecorder();

  useEffect(() => {
    if (recordingBlob) {
      callback(recordingBlob);
    }
  }, [recordingBlob, callback])

  useEffect(() => {
    console.log('XXX', recordingTime);
  }, [recordingTime]);

  return (
    <div>
      <div>
        <button type="button" onClick={() => startRecording()}>Begin</button>
        <button type="button" onClick={() => stopRecording()}>Stop</button>
      </div>
      {recordingBlob ? (
      <figure>
        <figcaption>Sound debug:</figcaption>
        <audio controls src={URL.createObjectURL(recordingBlob)}></audio>
      </figure>): null}
    </div>
  )

}
