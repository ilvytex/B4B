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
import { Map } from './Map';
//import { Cardlist } from './Cardlist';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar fixed="top" />
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
        <Map />
      </React.Fragment>

    );
  }
}

export default App;
