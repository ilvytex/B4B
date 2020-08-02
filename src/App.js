import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

import Row from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Card';
import myFooter from './Footer';
import './App.css';

// import { Map2 } from './Map';
// import { myFooter } from './Footer';

import { Cardlist } from './Cardlist';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/Login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <div className="footer">
          <Container className="contain" align="bottom" expand="lg" >
            <myFooter /><br></br>
myFooter Here
          </Container>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
