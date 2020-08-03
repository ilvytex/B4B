import Form from 'react-bootstrap/Form';
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import * as restData from "./data/testmap.json";
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Cardlist } from './Cardlist';
import Table from 'react-bootstrap/Table'
import Map from './Map'
import './Home.css';


export const Home = () => (
  <div>

    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form>
    <br></br>

    <Map />
    <br></br>
    <Cardlist />
  </div>
)




