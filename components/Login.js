import { auth } from '@/library/firebaseConfig.js'
import { signInWithEmailAndPassword } from "firebase/auth";

const email = "user@example.com"; //user's email
const password = "userpassword"; //user's password

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log(`User ${user.email} logged in successfully`);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
    });