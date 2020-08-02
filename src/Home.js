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


export const Home = () => (
  <div>
    <h2>Find a bike friendly venue</h2>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>





    <Map />
    <Cardlist />
  </div>
)




