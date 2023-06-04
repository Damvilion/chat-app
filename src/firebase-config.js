// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAghZyJK09mD7MBAhtLkwdwbgc8eCDMuW0",
  authDomain: "chat-app-9ffee.firebaseapp.com",
  projectId: "chat-app-9ffee",
  storageBucket: "chat-app-9ffee.appspot.com",
  messagingSenderId: "1014591789313",
  appId: "1:1014591789313:web:4806c50d5d4f14a2a7a300",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
