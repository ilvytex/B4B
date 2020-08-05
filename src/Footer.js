import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import './Footer.css';

const Styles = styled.div`

`;

export const myFooter = () => {
  return (
    <Styles class="navbar fixed-top navbar-dark bg-dark">
      <Container>
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
          <a class="navbar-brand" href="/"><img src="/B4BLogo_white.svg" width="48" height="48" alt="logo"></img></a>
          <div class="d-flex flex-row text-left">
            <p><strong>Barcelona 4 Bicycles</strong><br></br>Carrer de la Bicicleta, 27<br></br><a class="mylink" href="http://wwww.panchovilla.com" alt="panchito">www.b4b.com</a><br></br></p>
          </div>
          <div class="d-flex flex-row-reverse">
            <a href="https://www.instagram.com/wolf_tooth_comp/" alt="Instagram"><img height="24" src="/Instagram_icons_social.svg" alt="Instagram"></img></a>
            <a href="https://www.facebook.com/bluenationbaja/" alt="Facebook"><img height="24" src="/Facebook_icons_social.svg" alt="Facebook"></img></a>
            <a href="https://www.linkedin.com/company/nasa/" alt="Linkedin"><img height="24" src="/Linkedin_icons_social.svg" alt="Linkedin"></img></a>
          </div>
        </nav>
      </Container>
    </Styles>
  )
}
export default myFooter;
