// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMx5dCccwQe7D6LyUq1g7YSMNePRH_t6E",
  authDomain: "chat-app-c94ba.firebaseapp.com",
  projectId: "chat-app-c94ba",
  storageBucket: "chat-app-c94ba.appspot.com",
  messagingSenderId: "955797215732",
  appId: "1:955797215732:web:da0d8614a965c2bf8041a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
