import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const handleSubmit = async (e) => {
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="box">
      <div className="login-container">
        <h1>LOGIN</h1>
        <button onClick={handleSubmit} className="sign-in-button">
          Google Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
