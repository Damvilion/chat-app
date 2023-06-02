import React from "react";
import "./Chat.css";
import Cookies from "universal-cookie/cjs/Cookies";
import Login from "./Login";

const Chat = ({ Auth, setAuth }) => {
  const cookies = new Cookies();
  const handleSignOut = () => {
    cookies.remove("auth-email");
    setAuth(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-container-box">
        <h1>Chat</h1>
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Chat;
