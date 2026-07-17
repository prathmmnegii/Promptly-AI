import ChatMessage from "./ChatMessage";
import "../css/ChatMessages.css";

function ChatMessages({ chatMessages }) {
  return (
    <div className="chat-messages">
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
}

export default ChatMessages;