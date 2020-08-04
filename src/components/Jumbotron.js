import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cafeImage from '../assets/header_01a.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${cafeImage}) no-repeat fixed;
    background-size: cover;
    color: white;
    height: 500px;
    background-position: center center;
    position: relative;
    z-index: -2;
  }
  p {
    font-size: 2rem;
  }

  .overlay {
    background-color: #000;
    height:500px;
    opacity: 0.5;
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
        <h1 class="display-3">Barcelona 4 Bicyles</h1>
        <p class="lead">We are here to help you find bike friendly bars & restaurants</p>
        <hr class="my-2"></hr>
        <p class="lead">
          {/* <a class="btn btn-primary btn-lg" href="#!" role="button"></a> */}
        </p>
      </Container>
    </Jumbo>
  </Styles>


)
