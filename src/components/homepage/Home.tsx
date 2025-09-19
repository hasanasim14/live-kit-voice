"use client";

import type React from "react";
import { Cable, ChevronRight, Gauge, MapPin, Package } from "lucide-react";
import { TextAreaMessage } from "./TextAreaMessage";

interface HomePageProps {
  onCardClick?: (content: string) => void;
  message: string;
  isLoading: boolean;
  timeoutState: boolean;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  sendMessage: (customMessage?: string) => void;
}

export default function HomePage({
  onCardClick,
  message,
  isLoading,
  timeoutState,
  setMessage,
  handleKeyDown,
  sendMessage,
}: HomePageProps) {
  const cardItems = [
    {
      text: "Are you in my area?",
      icon: <MapPin className="h-5 w-5 text-[#002d88]" />,
      query: "Are you in my area?",
    },
    {
      text: "What are your packages?",
      icon: <Package className="h-5 w-5 text-[#002d88]" />,
      query: "What are your packages?",
    },
    {
      text: "My speed is too slow",
      icon: <Gauge className="h-5 w-5 text-[#002d88]" />,
      query: "My speed is too slow",
    },
    {
      text: "How do I get a connection?",
      icon: <Cable className="h-5 w-5 text-[#002d88]" />,
      query: "How do I get a connection?",
    },
  ];

  const handleCardClick = (content: string) => {
    onCardClick?.(content);
  };

  return (
    <div className="flex flex-col h-full max-h-screen bg-gradient-to-br from-[#002d88] via-[#0033aa] to-[#0044cc]">
      <div className="px-4 py-4 border-b border-white/20 backdrop-blur overflow-y-auto flex-1">
        <h2 className="text-xl font-semibold mb-0 text-white drop-shadow-sm">
          👋 How can I help you today?
        </h2>

        <div className="flex-1 px-4 py-2">
          <div className="flex gap-4 mb-4"></div>

          <div className="max-w-sm mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cardItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCardClick(item.query)}
                  className="flex items-center justify-between p-2 group hover:bg-gray-50/80 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-800 font-medium">
                      {item.text}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 stroke-[3] transition-colors duration-200 group-hover:text-[#002d88]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 👇 This will always stay at bottom */}
      <div className="mt-auto">
        <TextAreaMessage
          message={message}
          isLoading={isLoading}
          timeoutState={timeoutState}
          setMessage={setMessage}
          handleKeyDown={handleKeyDown}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
