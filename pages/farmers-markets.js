import Head from "next/head";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import LandingPage from '../components/FarmersMarkets';
import LandingPage6 from '../components/TaSH';
import LandingPage7 from '../components/Pleasantville';
import LandingPage5 from '../components/Rhinebeck';
import Footer from "../components/Footer";

const FarmersPics = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  padding: 1.5%;`

const FarmersHeading = styled.p`
margin: 2%;
text-align: center; 
color: ${props => props.color}; 
font-size: 1.8rem;
font-weight: bold;
font-style: italic;
font-family: Arial, sans-serif;
`;

const FarmersText = styled.p`
margin: 1%;
text-align: center; 
color: black; 
font-size: 1.4rem;
font-family: Arial, sans-serif;
`;

const Divider = styled.div`
  margin: 1.2% 0; 
  height: ${props => props.height};
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Mead Orchards Farmers Markets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage        
        bgImage="/farmersmarkets.jpg"
        heading="FARMERS MARKETS"
        subheading1="Eat Fresh. Eat Local. Eat Mead."
        height="80vh"
        headingSize="6rem"
        subheadingSize="3rem"
        imagePosition="center bottom"
      />
      <Divider>
      <FarmersPics>
          <LandingPage5
            bgImage="/rhinebeck.jpg"
            heading="RHINEBECK"
            height="40vh"
            width = "30vw"
            headingSize="3rem"
            subheadingSize="3rem"
            imagePosition="center center"
          />
          <FarmersHeading color = "red">
            CLOSED FOR THE SEASON
            <br />
            We'll Be Back in May 2024
          </FarmersHeading>
          <FarmersText>
            May - Nov
            <br />
            Sundays: 10am - 2pm
            <br />
            <br />
            <a href="https://www.google.com/maps/place/61+E+Market+St,+Rhinebeck,+NY+12572/@41.927395,-73.910309,17z/data=!3m1!4b1!4m6!3m5!1s0x89dd0c487a122e1d:0x20b1167b19b754f1!8m2!3d41.927395!4d-73.910309!16s%2Fg%2F11c5jbqg4f?entry=ttu" target="_blank" rel="noopener noreferrer">
            61 East Market Street
            <br />
            Rhinebeck, NY 12572
            </a>
            <br /><br />
            <a href="http://www.rhinebeckfarmersmarket.com/" target="_blank" rel="noopener noreferrer">
    Click Here for More Info
  </a>
      </FarmersText>
      </FarmersPics>
      <FarmersPics>
        <LandingPage7
          bgImage="/pleasantville.jpg"
          heading="PLEASANTVILLE"
          height="40vh"
          width = "30vw"
          headingSize="3rem"
          subheadingSize="3rem"
          imagePosition="center center"
        />
        <FarmersHeading color = "green">
          OPEN
        </FarmersHeading>
        <FarmersText>
          April - Nov
          <br />
          Saturdays: 8:30am - 1pm
          <br />
          <br />
          Dec - March
          <br />
          Saturdays: 9:30am - 12pm
          <br />
          <br />
          <a href="https://www.google.com/maps/place/10+Memorial+Plaza,+Pleasantville,+NY+10570/@41.1345049,-73.795506,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2bee25d96c47b:0x9d696ee8c009485a!8m2!3d41.1345009!4d-73.793312?shorturl=1" target="_blank" rel="noopener noreferrer">
            Memorial Plaza Parking Lot
          <br />
            10 Memorial Plaza
            <br />
            Rhinebeck, NY 10570
            </a>
            <br /><br />
            <a href="https://www.pleasantvillefarmersmarket.org/" target="_blank" rel="noopener noreferrer">
    Click Here for More Info
          </a>
        </FarmersText>
      </FarmersPics>
      <FarmersPics>
        <LandingPage6
          bgImage="/tarrytown.jpg"
          heading="Tarrytown & Sleepy Hollow"
          height="40vh"
          width = "30vw"
          headingSize="3rem"
          subheadingSize="3rem"
          imagePosition="center center"
        />
        <FarmersHeading color = "green">
          OPEN
        </FarmersHeading>
        <FarmersText>
  May - Nov
  <br />
  Saturdays: 8:30am - 1:30pm
  <br />
  <br />
  Jan - April
  <br />
  Alternating Sat: 9:30am - 12pm
  <br />
  1/13, 1/27, 2/10, 2/24, 3/9, 3/23, 4/6, 4/13, 4/27
  <br />
  <br />
  <a href="https://www.google.com/maps/place/John+Paulding+School/@41.0819837,-73.8572519,17z/data=!4m6!3m5!1s0x89c2eabb36390fb3:0x3b5262368fbb5548!8m2!3d41.0819329!4d-73.8572908!16s%2Fm%2F0763n_m?entry=tts" target="_blank" rel="noopener noreferrer">
    John Paulding School
    <br />
    154 Broadway
    <br />
    Tarrytown, NY 10591
  </a>
  <br /><br />
  <a href="https://tashfarmersmarket.org/" target="_blank" rel="noopener noreferrer">
    Click Here for More Info
  </a>

        </FarmersText>
      </FarmersPics></Divider>
      <Footer />
    </>
    
  );
}
