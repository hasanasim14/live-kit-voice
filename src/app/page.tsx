"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare } from "lucide-react";
import LiveKitModal from "@/components/LiveKit/LiveKitModal";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-center gap-3">
      <Popover open={open} onOpenChange={setOpen} modal={false}>
        <PopoverTrigger asChild>
          <Button
            className={`h-14 w-14 rounded-full shadow-xl cursor-pointer transition-transform duration-300 ${
              !open && "hover:scale-110"
            } bg-black`}
            aria-label="Open chat"
          >
            <MessageSquare className="h-6 w-6 text-white" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-80 sm:w-96 p-0 rounded-2xl shadow-2xl bg-gray-900 overflow-hidden"
          align="end"
          side="top"
          style={{ maxHeight: "calc(100vh - 95px)" }}
        >
          {/* White background for modal */}
          <div className="h-[500px] bg-white flex flex-col">
            <LiveKitModal />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
