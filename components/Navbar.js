import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 90px;
    position: fixed;
    z-index:10;
    background-color: ${({ affix }) => (affix ? '#010134' : 'transparent')};
    transition: all 0.6s ease;
`;

const MainList = styled.div`
    height: 90px;
    float: center;
`;

const NavLinks = styled.ul`
    width: 95%; 
    height: 100%;
    display: flex;
    justify-content: space-between; // Distribute items evenly along the main axis 
    align-items: center;
    margin: auto; 
    list-style-type: none;
`;

const NavItem = styled.li`
    a {
        text-decoration: none;
        color: white;
        font-size: 1.4rem;
        text-shadow: 2px 2px 4px black;
        font-family: tahoma, sans-serif;
        &:hover {
            color: ${({ affix }) => (affix ? 'navy' : '#FFEB0B')};
        }
    }
`;

// Styled Exit Button
const ExitButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

// Functional component for the navbar
const Navbar = () => {
    // State variables for controlling the affix behavior and login popup visibility
    const [affix, setAffix] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    // Function to handle scrolling and update the affix state
    const handleScroll = () => {
        if (window.scrollY > 150) {
            setAffix(true);
        } else {
            setAffix(false);
        }
    };

    // Effect hook to add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavbarWrapper affix={affix}>
            <div className="container">
                <MainList>
                    <NavLinks>
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="pick-your-own">Pick Your Own</a>
                        </NavItem>
                        <NavItem>
                            <a href="plan-your-visit">Plan Your Visit</a>
                        </NavItem>
                        <NavItem>
                            <a href="farmers-markets">Farmers Markets</a>
                        </NavItem>
                        <NavItem>
                            <a href="about">About</a>
                        </NavItem>
                        <NavItem>
                            <a href="contact">Contact</a>
                        </NavItem>            
                    </NavLinks>
                </MainList>
            </div>
        </NavbarWrapper>
    );
};


export default Navbar;



