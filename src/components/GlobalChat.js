import React, { useRef, useState } from "react";
import "./GlobalChat.css";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const GlobalChat = ({ chatRoom, setChatRoom }) => {
  const [mes, setNewMes] = useState("");
  const messagesRef = collection(db, "messages");
  const newMessageRef = useRef();
  const goBack = () => {
    setChatRoom(null);
  };

  const handleSubmit = async () => {
    if (newMessageRef.current.value === "") return;

    try {
      await addDoc(messagesRef, {
        text: newMessageRef.current.value,
        createdAt: serverTimestamp(),
        user: auth.currentUser.email,
        room: chatRoom,
      });
      setNewMes("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="global-chat-container">
      <header className="global-header">
        <h1>Chat App</h1>
      </header>
      <div className="global-chat-main">
        <div className="new-square">
          <div className="global-chat-box">
            <div className="global-chat-log"></div>
            <div className="global-chat-room"></div>
          </div>

          <div className="input-box">
            <h1>Chat Room</h1>
            <input
              type="text"
              placeholder="Send your text"
              ref={newMessageRef}
              value={mes}
              onChange={(e) => {
                setNewMes(e.target.value);
              }}
            />
            <h1>Messages</h1>
          </div>
        </div>
      </div>

      <div className="global-send-container">
        <button onClick={goBack} className="global-send-button">
          Go Back
        </button>
        <button onClick={handleSubmit} className="global-send-button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default GlobalChat;
