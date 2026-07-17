import "../css/ChatMessage.css";

function ChatMessage({ message, sender, time }) {
  return (
    <div className={`message-row ${sender}`}>
      <div className="avatar">
        {sender === "robot" ? "🤖" : "👤"}
      </div>

      <div className={`chat-message ${sender}`}>
        <p>{message}</p>

        <span className="message-time">
          {time}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;