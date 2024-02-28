import React, { useState } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #010134;
  width: 100%;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AddressColumn = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LogoColumn = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputColumn = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterText = styled.p`
  color: white;
`;

const Logo = styled.img`
  width: 20%;
  height: auto;
`;

const Input = styled.input`
  padding: 10px;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  color: ${({ isHovered }) => (isHovered ? '#022F40' : 'white')};
  background-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};
  font-size: 1.2rem;
  font-weight: bold;
  border: solid;
  border-radius: 5px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <AddressColumn>
        <FooterText>15 Scism Rd. <br /> Tivoli, NY, 12583 <br /><br /> 845-756-5641 <br /> info@meadorchards.com </FooterText>
      </AddressColumn>
      <LogoColumn>
        <Logo src="/MeadLogo.png" />
        <FooterText>&copy; 2024 Mead Orchards. All rights reserved. <br /> </FooterText>
        <FooterText href="admin-login">Admin Login</FooterText>
      </LogoColumn>
      <InputColumn>
        <Input type="email" placeholder="Enter your email" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </InputColumn>
    </FooterWrapper>
  );
};



export default Footer;

