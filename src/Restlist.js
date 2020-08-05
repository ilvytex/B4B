import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";

class Restlist extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>List</Header>
              <List>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Restlist;



