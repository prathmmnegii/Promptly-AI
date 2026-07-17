import "../css/ChatMessage.css";

function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;