import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">About</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Online Registration</List.Item>
                  <List.Item as="a">Track Application</List.Item>
                  <List.Item as="a">Generate Passport</List.Item>
                  <List.Item as="a">Travel for Pilgrimage</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  About Online Pilgrims Management System
                </Header>
                <p>
                  Help Adamawa State Pilgrims for pilgrimage to their religious
                  place of witness and observations.{" "}
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <p> Copyright (c) 2021 - Online Pilgrims Management System </p>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  );
};
