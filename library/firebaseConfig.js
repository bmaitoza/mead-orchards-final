// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXXoNPLO4X5reYFqXB7_llsdGUZBGkCY",
  authDomain: "mead-orchards.firebaseapp.com",
  projectId: "mead-orchards",
  storageBucket: "mead-orchards.appspot.com",
  messagingSenderId: "212384900214",
  appId: "1:212384900214:web:fda96aedd5b04402feeb57",
  measurementId: "G-ZQG7CE0ERJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);