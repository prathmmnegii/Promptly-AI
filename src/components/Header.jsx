import "../css/Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header({ setChatMessages }) {
  function handleNewChat() {
    setChatMessages([
      {
        id: 1,
        message: "Hello! How can I help you?",
        sender: "robot",
      },
    ]);

    localStorage.removeItem("chatMessages");
  }

  return (
    <header className="header">
      <h1 className="header-title">
        Promptly-AI
      </h1>

      <div className="header-actions">

        <a
          href="https://github.com/prathmmnegii"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/pratham-negi-982b0731a/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <button
          className="new-chat-btn"
          onClick={handleNewChat}
        >
          + New Chat
        </button>

      </div>
    </header>
  );
}

export default Header;