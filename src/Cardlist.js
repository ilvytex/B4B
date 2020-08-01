import React from 'react';
import Container from 'react-bootstrap/container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export const Cardlist = () => (
  <div>
    <Container fluid="md">
      <CardDeck>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="holder.js/100px160" />
            <small className="text-muted">RESTAURANT PHOTO</small>
          </Card.Header>          <Card.Body>
            <Card.Title>Eroica Café</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="holder.js/100px160" />
            <small className="text-muted">RESTAURANT PHOTO</small>
          </Card.Header>          <Card.Body>
            <Card.Title>Volata</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="holder.js/100px160" />
            <small className="text-muted">RESTAURANT PHOTO</small>
          </Card.Header>
          <Card.Body>
            <Card.Title>La Bicicleta</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content.
      </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </div>
)

