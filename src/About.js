import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cafeImage from './assets/header_01a.jpg';

const Styles = styled.div`
  .jumbo {
    padding-top: 72px;
    background: url(${cafeImage}) no-repeat;
    background-size: cover;
    color: white;
    height: 400px;
    background-position: top center;
    position: relative;
    z-index: -3;
  }
  p {
    font-size: 2rem;
  }
  .pjumbo{
    font-size: 1rem;
  }

  .overlay {
    background-color: #333;
    height:400px;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
  }
`;

export const About = () => (

  <Styles>

    <Container>
      <h1>About Us</h1>
      <p className="pjumbo">Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>
      <h3>No man, I don't eat pork</h3>
      <p className="pjumbo">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
      </p>
    </Container>
  </Styles >


)