import Form from 'react-bootstrap/Form';
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import * as restData from "./data/testmap.json";
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Newlist from './Newlist';
import Table from 'react-bootstrap/Table'
import Map from './Map'
import './Home.css';



export const Home = () => (
  <div inline>

    {/*     <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form> */}
    <br></br>

    <Map />
    <br></br>
    <div>
      <Newlist />
    </div>
  </div>
)




