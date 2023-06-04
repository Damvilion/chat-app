import React from "react";
import "./Chat.css";
import Cookies from "universal-cookie/cjs/Cookies";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Chat = ({ setAuth }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const cookies = new Cookies();
  const handleSignOut = () => {
    cookies.remove("auth-email");
    setAuth(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") {
      return;
    }

    try {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
      });

      setNewMessage("");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-container-box">
        <h1>Chat</h1>
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="chat-content">
        <form onSubmit={handleSubmit} className="new-message">
          <input
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            value={newMessage}
            placeholder="Type your message"
            type="text"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
