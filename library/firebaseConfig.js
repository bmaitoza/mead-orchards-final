import { initializeApp } from "firebase/App";
import { getFirestone } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwXXoNPLO4X5reYFqXB7_llsdGUZBGkCY",
    authDomain: "x",
    projectId: "mead-orchards",
    storageBucket: "x",
    messagingSenderId: "x",
    appId: "x",
    mesurementId: "x"
}

//Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app