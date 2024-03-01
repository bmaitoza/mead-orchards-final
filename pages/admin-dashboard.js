import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { db } from '../library/firebaseConfig';
import { setDoc, getDoc, doc } from 'firebase/firestore'

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
  justify-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
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

const AdminDashboard = () => {
  const mondayInputRef = useRef();
  const tuesdayInputRef = useRef();
  const wednesdayInputRef = useRef();
  const thursdayInputRef = useRef();
  const fridayInputRef = useRef();
  const saturdayInputRef = useRef();
  const sundayInputRef = useRef();

  async function changeHours() {
    // Get the old data
    const docRef = doc(db, 'HoursCollection', 'hours_object_document');
    const docResponse = await getDoc(docRef);
    const data = docResponse.data();

    // Update data for each day if input value is not empty
    if (mondayInputRef.current.value !== '') {
      data.monday = mondayInputRef.current.value;
    }
    if (tuesdayInputRef.current.value !== '') {
      data.tuesday = tuesdayInputRef.current.value;
    }
    if (wednesdayInputRef.current.value !== '') {
      data.wednesday = wednesdayInputRef.current.value;
    }
    if (thursdayInputRef.current.value !== '') {
      data.thursday = thursdayInputRef.current.value;
    }
    if (fridayInputRef.current.value !== '') {
      data.friday = fridayInputRef.current.value;
    }
    if (saturdayInputRef.current.value !== '') {
      data.saturday = saturdayInputRef.current.value;
    }
    if (sundayInputRef.current.value !== '') {
      data.sunday = sundayInputRef.current.value;
    }

    // Update Firestore document with new data
    await setDoc(docRef, data);
  }

  return (
    <Container>
      <FormContainer>
        <Label>Monday</Label>
        <Input ref={mondayInputRef} type="text" name="Monday" />

        <Label>Tuesday</Label>
        <Input ref={tuesdayInputRef} type="text" name="Tuesday" />

        <Label>Wednesday</Label>
        <Input ref={wednesdayInputRef} type="text" name="Wednesday" />

        <Label>Thursday</Label>
        <Input ref={thursdayInputRef} type="text" name="Thursday" />

        <Label>Friday</Label>
        <Input ref={fridayInputRef} type="text" name="Friday" />

        <Label>Saturday</Label>
        <Input ref={saturdayInputRef} type="text" name="Saturday" />

        <Label>Sunday</Label>
        <Input ref={sundayInputRef} type="text" name="Sunday" />

        <Button onClick={changeHours}>Submit</Button>
      </FormContainer>
    </Container>
  );
};

export default AdminDashboard;
