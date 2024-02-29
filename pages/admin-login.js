import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";

// Styled component for the main container
const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styled component for the form container
const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the input fields
const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Styled component for the submit button
const Button = styled.button`
  width: 300px;
  padding: 10px;
  margin: 10px;
  background-color: #007bff;
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
  // State for storing input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to authenticate the admin
    if (username === 'admin' && password === 'password') {
      // If authentication is successful, you can redirect to admin dashboard or perform other actions
      alert('Login successful');
    } else {
      // If authentication fails, you can show an error message
      alert('Invalid username or password');
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2>Admin Login</h2>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
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
