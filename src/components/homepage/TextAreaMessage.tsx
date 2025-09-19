import { useEffect, useRef } from "react";
import { Textarea } from "../ui/textarea";
import { ArrowUp, Clock } from "lucide-react";

interface TextAreaMessageProps {
  message: string;
  isLoading: boolean;
  timeoutState?: boolean;
  setMessage: (message: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  sendMessage?: () => void;
}

export const TextAreaMessage = ({
  message,
  isLoading,
  timeoutState,
  setMessage,
  handleKeyDown,
  sendMessage = () => {},
}: TextAreaMessageProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Focus on the text area
  useEffect(() => {
    if (!isLoading && !timeoutState) {
      inputRef.current?.focus();
    }
  }, [isLoading, timeoutState]);

  return (
    <div className="px-4 py-2 border-t bg-white">
      <div className="bg-gray-100 rounded-3xl p-2 border border-gray-300">
        <div className="flex items-center">
          <Textarea
            ref={inputRef}
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-none bg-transparent resize-none px-2 py-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none shadow-none flex-1 min-h-[20px] max-h-[80px] text-sm"
            style={{ border: "none", outline: "none", boxShadow: "none" }}
            disabled={isLoading || timeoutState}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !message.trim()}
            className={`ml-2 rounded-full p-2 cursor-pointer disabled:opacity-50 ${
              message.trim()
                ? "bg-[#002d88] hover:bg-[#e05615]"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isLoading ? (
              <Clock
                className={`h-5 w-5 ${
                  message.trim() ? "text-white" : "text-gray-500"
                }`}
              />
            ) : (
              <ArrowUp
                className={`h-5 w-5 ${
                  message.trim() ? "text-white" : "text-gray-500"
                }`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
