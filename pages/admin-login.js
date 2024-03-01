import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { auth } from '../library/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

const Container = styled.div`
  background-color: #010134;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 300px;
  padding: 10px;
  margin: 10px;
  background-color: #010134;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const AdminLogin = () => {

  const router = useRouter();

  // State for storing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        // setUser(user) // this setUser is a useState in state context
        console.log(`User ${user.email} logged in successfully`);
        router.push('/admin-dashboard');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
        alert(`Error ${errorCode}: ${errorMessage}`);
    });

  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AdminLogin;

