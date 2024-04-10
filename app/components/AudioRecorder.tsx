import {useState, useRef, useEffect} from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

interface Props {onRecordDone: (audioData: Blob) => void}

export function AudioRecorder({onRecordDone}: Props) {
  const [audioData, setAudioData] = useState('');
  const hasBeenCalled = useRef(false);
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    recordingTime,
  } = useAudioRecorder();

  useEffect(() => {
    if (!hasBeenCalled.current && recordingBlob) {
      hasBeenCalled.current = true
      setAudioData(URL.createObjectURL(recordingBlob));
      onRecordDone(recordingBlob);
    }
  }, [recordingBlob, onRecordDone])

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
        <audio controls src={audioData}></audio>
      </figure>): null}
    </div>
  )
}
