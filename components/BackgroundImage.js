import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next.js to handle navigation
import SignupForm from './SignUpPopup'; // Import the SignupForm component

const HomeSectionWrapper = styled.section`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.bgImage});
    background-position: ${props => props.imagePosition};
    background-size: cover;
`;

const LandingTextWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
`;

const HeadingText = styled.h1`
    text-decoration: none;
    color: white;
    font-size: ${props => props.headingSize}; /* Use props to set the font size for the heading */
    text-shadow: 2px 2px 4px black;
    font-family: tahoma, sans-serif;
    font-weight: bold;
    margin: 0;
`;

const SubheadingText = styled.p`
    text-decoration: none;
    color: white;
    font-size: ${props => props.subheadingSize}; /* Use props to set the font size for the subheading */
    text-shadow: 2px 2px 4px black;
    font-family: arial, sans-serif;
    font-weight: bold;
    font-style: italic;
    margin: 0;
`;

const ImageWrapper = styled.img`
    width: 25%;
    height: auto;
    margin: 0%
`;

const Button = styled.button`
    padding: 10px 20px;
    color: ${({ isHovered }) => (isHovered ? '#022F40' : 'white')};
    background-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};
    font-size: 1.2rem;
    font-weight: bold;
    border: solid;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;

const LandingPage = ({ width, bgImage, heading, subheading1, subheading2, height, headingSize, subheadingSize, imagePosition, showButton, logoImage, showLogo }) => {
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleSignupButtonClick = () => {
        setShowSignupForm(true);
    };

    return (
        <HomeSectionWrapper bgImage={bgImage} height={height} imagePosition={imagePosition} width={width}>
            <LandingTextWrapper>
                <HeadingText headingSize={headingSize}>{heading}</HeadingText>
                <br />
                <SubheadingText subheadingSize={subheadingSize}>{subheading1}</SubheadingText>
                <SubheadingText subheadingSize={subheadingSize}>{subheading2}</SubheadingText>
                <br />
                {showLogo && <ImageWrapper src={logoImage} />}
                {showButton && (
                    <>
                        <Button onClick={handleSignupButtonClick}>Sign Up Here</Button>
                        {showSignupForm && <SignupForm onClose={() => setShowSignupForm(false)} />}
                    </>
                )}
            </LandingTextWrapper>
        </HomeSectionWrapper>
    );
};

export default LandingPage;
