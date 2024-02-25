import { useState } from 'react';
import { auth } from '@/library/firebaseConfig.js';
import { createUserWithEmailAndPassword } from "firebase/auth";

// Functional component for the signup form
const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = (e) => {
        e.preventDefault();

        // Call Firebase function to create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`User ${user.email} signed up successfully`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error ${errorCode}: ${errorMessage}`);
                setError(errorMessage);
            });
    };

    return (
        <form onSubmit={handleSignup}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Sign Up</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default SignupForm;
