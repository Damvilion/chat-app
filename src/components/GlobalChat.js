import React from "react";
import "./GlobalChat.css";

const GlobalChat = ({ setChatRoom }) => {
  const goBack = () => {
    setChatRoom(null);
  };
  return (
    <div className="global-chat-container">
      <header className="global-header">
        <h1>Chat App</h1>
      </header>
      <div className="global-chat-main">
        <div className="global-chat-box">
          <div className="global-chat-log"></div>
          <div className="global-chat-room"></div>
        </div>
      </div>

      <div className="global-send-container">
        <button onClick={goBack} className="global-send-button">
          Go Back
        </button>
        <button className="global-send-button">Send Message</button>
      </div>
    </div>
  );
};

export default GlobalChat;
