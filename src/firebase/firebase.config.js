// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzReU0iZosd6He-8AiEs13Jbeej_5sS8",
  authDomain: "the-doctors-den.firebaseapp.com",
  projectId: "the-doctors-den",
  storageBucket: "the-doctors-den.appspot.com",
  messagingSenderId: "128380799842",
  appId: "1:128380799842:web:ad568235ffd73a0e43fa3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;