import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar-brand-svg{
opacity:30;
},
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #D370E3;
    }
    &:active {
      outline:none;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand><a class="navbar-brand-svg" href="/"><img src="/B4BLogo_white.svg" alt="" width="36" height="36"></img></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="md-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>

            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>

            <Nav.Link href="/Search">BikeFriends</Nav.Link>
          </Nav.Item>
          <Nav.Item>

            <Nav.Link href="/Login">Log In</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>

)