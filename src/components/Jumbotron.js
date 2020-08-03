import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cafeImage from '../assets/header_01.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${cafeImage}) no-repeat fixed;
    background-size: cover;
    color: white;
    height: 300px;
    background-position: top center;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Barcelona 4 Bicyles</h1>
        <p>We are here to help you find bike friendly bars & restaurants</p>
      </Container>
    </Jumbo>
  </Styles>


)
