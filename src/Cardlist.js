import React from 'react';
import Container from 'react-bootstrap/container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export const Cardlist = () => (
  <div>
    <br></br>
    <Container fluid="xl">
      <CardDeck className="cardeck">
        <Card>
          <Card.Header>

            <Card.Img variant="top" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Eroica Café</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Volata</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1003605/pexels-photo-1003605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
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
      <br></br>
      <CardDeck>
        <Card>
          <Card.Header>

            <Card.Img variant="top" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Eroica Café</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Volata</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
        content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1003605/pexels-photo-1003605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
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
    <br></br>
  </div>

)

