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

export const Search = () => (

  <Styles>

    <Container>
      {/* <h1>Want your business listed here?</h1>
      <p className="pjumbo">Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
      <h3>NHold on to your butts</h3>
      <p className="pjumbo">LDo you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
      </p> */}

      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-3">Want your business listed here?</h1>
      </div>

      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h1 class="card-title pricing-card-title">Restaurants & Bars</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... </li>

              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary">Register for free</button>
            </div>
          </div>
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h1 class="card-title pricing-card-title">Lodging</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Click here</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Styles>
)



