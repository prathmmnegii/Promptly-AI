import { useState } from "react";
import Header from "./components/Header";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

function App() {

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      message: "Hello! How can I help you?",
      sender: "robot"
    }
  ]);

  return (
    <>
      <Header />

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;