import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
import * as restData from "./data/testmap.json";



class Restlist extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>List</Header>
              <List>
                {/*  {restData.map(el => {
                  return (
                    <List.Item key={el.properties.Station_id}>
                      <List.Content>
                        {el.properties.Station_lat} {el.properties.Station_lng}
                      </List.Content>
                      <List.Content>{el.properties.Phone}</List.Content>
                    </List.Item>
                  );
                })} */}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Restlist;



