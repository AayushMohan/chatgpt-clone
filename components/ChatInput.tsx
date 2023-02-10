import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  return (
    <div>
      <form className="p-5 space-x-5 flex-1">
        <input type="text" placeholder="Type your message here..." />
        <button>
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Modal Selection */}</div>
    </div>
  );
};

export default ChatInput;
