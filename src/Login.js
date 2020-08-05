import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

export const Login = () => (
  <div className="mysignin" class="text-center" >
    <Form class="sign-in">
      <img class="mylogo" src="/B4BLogo.svg" alt="" width="92" height="92"></img>
      <Form.Group controlId="formBasicEmail">
        <Form.Label class="lead mb-3 font-weight-normal">Please sign in</Form.Label>
        <Form.Label for="inputEmail" class="sr-only">Email address</Form.Label>
        <Form.Control type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
        <Form.Control type="password" id="inputPassword" class="form-control" placeholder="Password" required />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" size="md" type="submit">Sign in</Button>
      </Form.Group>
    </Form>
  </div>
)


