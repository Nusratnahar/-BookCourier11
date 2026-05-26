// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdenHlyb2V4Xt06P30mG-T922Qcf0N0KA",
  authDomain: "book-courier-c4d70.firebaseapp.com",
  projectId: "book-courier-c4d70",
  storageBucket: "book-courier-c4d70.firebasestorage.app",
  messagingSenderId: "351638955650",
  appId: "1:351638955650:web:2cd1e9f27147e7f87bb69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
