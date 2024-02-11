// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14d86.firebaseapp.com",
  projectId: "mern-estate-14d86",
  storageBucket: "mern-estate-14d86.appspot.com",
  messagingSenderId: "1064761822025",
  appId: "1:1064761822025:web:404cc1490e33f609fd2898"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);