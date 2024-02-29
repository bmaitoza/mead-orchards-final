import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// Styled component for the main container
const Container = styled.div`
  background-color: #010134;
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

const AdminDashboard = () => {
    
    return (
      <Container>
        <h1>Welcome</h1>
      </Container>
    );
  };
  
  export default AdminDashboard;