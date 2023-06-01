import React from "react";
import Login from "./components/Login";
import { useState } from "react";
import { auth, provider } from "./firebase-config";
import Chat from "./components/Chat";
import Cookies from "universal-cookie/cjs/Cookies";

function App() {
  const cookies = new Cookies();
  const [Auth, setAuth] = useState(cookies.get("auth-token"));
  if (!Auth) {
    return (
      <div className="App">
        <Login Auth={Auth} setAuth={setAuth} />
      </div>
    );
  }

  return <Chat Auth={Auth} setAuth={setAuth} />;
}

export default App;
