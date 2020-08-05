import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Login } from './Login';
import { Search } from './Search';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import Container from 'react-bootstrap/Container'
import Footer from './Footer';
import './App.css';
import './Footer.css';


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
              <Route path="/About" component={About} />
              <Route path="/Search" component={Search} />
              <Route path="/Login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <div className="myFooter">
          <Container align="bottom" expand="lg" >
            <Footer />
          </Container>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
