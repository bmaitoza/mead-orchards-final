import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "firebase/auth";

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 1;
  text-align: center;
`;

const ExitButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #010134;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignupForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <Popup>
      <ExitButton onClick={onClose}>X</ExitButton>
      <Form onSubmit={handleSignup}>
        <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>   
    </Popup>
  );
};

export default SignupForm;
