"use client";

import { useState, useEffect, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import SimpleVoiceAssistant from "./SimpleVoiceAssisstant";

const LiveKitModal = () => {
  const [token, setToken] = useState<string | null>(null);

  const getToken = useCallback(async () => {
    const defaultName = "Guest-" + Math.floor(Math.random() * 10000);
    try {
      const response = await fetch(
        `https://livekittoken.ai-iscp.com/getToken?name=${encodeURIComponent(
          defaultName
        )}&room=1`
      );
      const token = await response.text();
      setToken(token);
    } catch (error) {
      console.error("Failed to fetch token:", error);
    }
  }, []);

  useEffect(() => {
    getToken();
  }, [getToken]);

  if (!token) {
    return (
      <div className="modal-overlay">
        <div className="modal-content flex items-center justify-center">
          <p>Connecting to support...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="support-room">
          <LiveKitRoom
            serverUrl="wss://mnp-ut0qccsw.livekit.cloud"
            token={token}
            connect={true}
            video={false}
            audio={true}
            // onDisconnected={() => {
            //   setShowSupport(false);
            //   setIsSubmittingName(true);
            // }}
          >
            <RoomAudioRenderer />
            <SimpleVoiceAssistant />
          </LiveKitRoom>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;
