import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cafeImage from '../assets/header_03.jpg';

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

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 class="display-3">Barcelona 4 Bicycles</h1>
        <p class="lead">We are here to help you find bike friendly bars & restaurants</p>
        <hr class="my-2"></hr>
        <p class="lead">
        </p>
      </Container>
    </Jumbo>
  </Styles>
)
