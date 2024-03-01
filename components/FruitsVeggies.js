import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HoursHeading = styled.div`
  color: #010134;
  font-size: 2.6em;
  font-family: tahoma, sans-serif;
  font-weight: bold;
  font-style: italic;
  margin: 3% 0; 
`;

const HoursText = styled.p`
  text-align: center; 
  color: '#010134'; 
  font-size: 1.1rem;
  font-family: tahoma, sans-serif;
`;

const HomeButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 3%;
`;

const Button = styled.button`
  padding: 3% 2%;
  background-color: ${({ isHovered }) => (isHovered ? '#010134' : 'white')};
  color: ${({ isHovered }) => (isHovered ? 'white' : '#010134')};
  font-size: 1.4rem;
  font-weight: bold;
  border-width: 2px;
  border-style: solid;
  border-color: #010134;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  margin-bottom: 10px; /* Add margin between buttons */
`;

//button animation
const FruitVeggiesButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/pick-your-own">
      <Button isHovered={isHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        Learn More About Our Fruits and Vegetables
      </Button>
    </Link>
  );
  }

  //fading transition
  const containerVariants = {
    a: { opacity: 0 },
    b: { opacity: 1, transition: { duration: 3 } }
  }; 

const Hours = () => {
  return (
    <Container variants={containerVariants} initial="a" whileInView="b" properties>
      <HoursHeading>
        Hand-picked Fruits and Vegetables
      </HoursHeading>
      <HoursText>
        Hudson Valley's original local orchard, hand-picked delicious fruits and vegetables for over 100 years.
      </HoursText>
      <HomeButtons>
        <FruitVeggiesButton />
      </HomeButtons>
    </Container>
  );
}

export default Hours;




