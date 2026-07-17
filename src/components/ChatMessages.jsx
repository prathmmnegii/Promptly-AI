import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "../css/ChatMessages.css";

function ChatMessages({ chatMessages }) {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chatMessages]);

  return (
    <div className="chat-messages">

      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
          time={chatMessage.time}
        />
      ))}

      <div ref={bottomRef}></div>

    </div>
  );
}

export default ChatMessages;