import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface Message {
  type: string;
  text: string;
}

interface TranscriptionMessage {
  type: "agent" | "user";
  id: string;
  text: string;
  language?: string;
  startTime?: number;
  endTime?: number;
  final?: boolean;
  firstReceivedTime: number;
  lastReceivedTime?: number;
  receivedAtMediaTimestamp?: number;
  receivedAt?: number;
}

const Message = ({ type, text }: Message) => {
  return (
    <div className="message">
      <strong className={`message-${type}`}>
        {type === "agent" ? "Agent: " : "You: "}
      </strong>
      <span className="message-text">{text}</span>
    </div>
  );
};

const SimpleVoiceAssistant = () => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState<TranscriptionMessage[]>([]);

  useEffect(() => {
    const allMessages: TranscriptionMessage[] = [
      ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" as const })) ??
        []),
      ...(userTranscriptions?.map((t) => ({ ...t, type: "user" as const })) ??
        []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);

    setMessages(allMessages);
  }, [agentTranscriptions, userTranscriptions]);

  return (
    <div className="voice-assistant-container flex flex-col h-full">
      <div className="visualizer-container">
        <BarVisualizer state={state} barCount={7} trackRef={audioTrack} />
      </div>

      <div className="control-section flex flex-col flex-1">
        <VoiceAssistantControlBar />

        {/* Scrollable messages */}
        <ScrollArea className="m-2 h-100 rounded-md">
          {messages.map((msg) => (
            <Message key={msg.id} type={msg.type} text={msg.text} />
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default SimpleVoiceAssistant;
