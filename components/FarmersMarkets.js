import styled from 'styled-components';
import React, { useState } from 'react';
import AnimatedTitle from './typewriter';

const HomeSection2Wrapper = styled.section`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.bgImage});
    background-position: ${props => props.imagePosition};
    background-size: cover;
    background-attachment: fixed;
`;

const LandingTextWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
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
        <HomeSection2Wrapper bgImage={bgImage} height={height} imagePosition={imagePosition} width={width}>
            <LandingTextWrapper>
            <AnimatedTitle text="Farmers Markets" fontSize="6rem" />
                <br />
                <SubheadingText subheadingSize={subheadingSize}>{subheading1}</SubheadingText>
                <SubheadingText subheadingSize={subheadingSize}>{subheading2}</SubheadingText>
                <br />
                {showLogo && <ImageWrapper src={logoImage} />}
                {showButton && (
                    <>
                        <Button>Sign Up Here</Button>
                    </>
                )}
            </LandingTextWrapper>
        </HomeSection2Wrapper>
    );
};

export default LandingPage;