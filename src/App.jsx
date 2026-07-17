import { useEffect, useState } from "react";
import Header from "./components/Header";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedChats = localStorage.getItem("chatMessages");

    if (savedChats) {
      return JSON.parse(savedChats);
    }

    return [
      {
        id: 1,
        message: "Hello! How can I help you?",
        sender: "robot",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "chatMessages",
      JSON.stringify(chatMessages)
    );
  }, [chatMessages]);

  return (
    <div className="app">
      <Header
        setChatMessages={setChatMessages}
      />

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;