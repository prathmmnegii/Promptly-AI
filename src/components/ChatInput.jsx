import { useState } from "react";
import "../css/ChatInput.css";
import { getBotResponse } from "../services/groq";
import TypingIndicator from "./TypingIndicator";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function sendMessage() {
    console.log("✅ sendMessage called");

    if (inputText.trim() === "" || isTyping) return;

    const userText = inputText;

    const userMessage = {
      id: Date.now(),
      message: userText,
      sender: "user",
      time: getCurrentTime(),
    };

    setChatMessages((prev) => [...prev, userMessage]);

    setInputText("");
    setIsTyping(true);

    try {
      console.log("📤 Calling Groq...");

      const botReply = await getBotResponse(userText);

      console.log("📥 Groq Reply:", botReply);

      const botMessage = {
        id: Date.now() + 1,
        message: botReply,
        sender: "robot",
        time: getCurrentTime(),
      };

      setChatMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("❌ ChatInput Error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        message: "Something went wrong.",
        sender: "robot",
        time: getCurrentTime(),
      };

      setChatMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
  }

  return (
    <>
      {isTyping && <TypingIndicator />}

      <div className="chat-input">
        <input
          type="text"
          placeholder={
            isTyping
              ? "Promptly-AI is thinking..."
              : "Ask me anything..."
          }
          value={inputText}
          disabled={isTyping}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage} disabled={isTyping}>
          {isTyping ? "Thinking..." : "Send"}
        </button>
      </div>
    </>
  );
}

export default ChatInput;