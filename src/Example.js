import React, { Component } from 'react';
import data from "./data/testmap";
import './Example.css';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Card';

console.log(data);


class Example extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col><div className="gridcontainer">
            {
              data.features.map((feature, i) => {
                return (
                  <div key={i} >
                    <div>
                      <div>
                        <a target="blank" href={feature.properties.URL}>
                          <img className="listphoto" src={feature.properties.photo} alt={feature.properties.Sation_name} />
                        </a>
                        <div>
                          <h3>{feature.properties.Station_name}</h3>
                        </div>
                        <div>
                          <p>{feature.properties.Station_address}</p>
                          <p>{feature.properties.Phone}</p>
                          <p>{feature.properties.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Example;