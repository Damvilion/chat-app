import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const Login = ({ Auth, setAuth }) => {
  const cookies = new Cookies();
  const handleSubmit = async (e) => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.email);
      setAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="box">
      <h1>Real Time Chat App</h1>
      <div className="login-container">
        <h1 className="login-text">LOGIN</h1>
        <button onClick={handleSubmit} className="sign-in-button">
          Google Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
