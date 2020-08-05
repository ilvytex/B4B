import React from 'react';
import Newlist from './Newlist';
import Map from './Map'
import './Home.css';
// import { Jumbotron01 } from './components/Jumbotron';


// import FormControl from 'react-bootstrap/FormControl'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'


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




