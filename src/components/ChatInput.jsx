import { useState } from "react";
import "../css/ChatInput.css";
import { getBotResponse } from "../services/gemini";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage() {
    if (inputText.trim() === "") return;

    const userText = inputText;

    const userMessage = {
      id: Date.now(),
      message: userText,
      sender: "user",
    };

    setChatMessages((prevMessages) => [...prevMessages, userMessage]);

    setInputText("");
    setIsTyping(true);

    const botReply = await getBotResponse(userText);

    const botMessage = {
      id: Date.now() + 1,
      message: botReply,
      sender: "robot",
    };

    setChatMessages((prevMessages) => [...prevMessages, botMessage]);

    setIsTyping(false);
  }

  return (
    <>
      {isTyping && (
        <p
          style={{
            marginLeft: "20px",
            color: "gray",
            fontStyle: "italic",
          }}
        >
          Promptly-AI is typing...
        </p>
      )}

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default ChatInput;