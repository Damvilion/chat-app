import React from "react";
import "./Menu.css";
import Cookies from "universal-cookie/cjs/Cookies";
import { useState, useRef } from "react";

const Menu = ({ setAuth }) => {
  const chatRoomRef = useRef();
  const [chatRoom, setChatRoom] = useState("");

  const setChatRoomFunc = (e) => {
    e.preventDefault();
    console.log(chatRoom.current.value);
    setChatRoom(chatRoom.current.value);
  };

  const cookies = new Cookies();

  // handles sign out functionality
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
        <button className="signout-button">Global Chat</button>
        <form className="menu-form" action="">
          <label htmlFor="">Room</label>
          <input
            placeholder="Type the chat room"
            type="text"
            ref={chatRoomRef}
          />
          <button
            className="enter-button"
            onClick={setChatRoomFunc}
            type="submit"
          >
            Enter Chat Room
          </button>
        </form>
      </div>
      <div className="chat-content"></div>
    </div>
  );
};

export default Menu;
