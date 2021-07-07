import React from "react";

import { Link } from "react-router-dom";
import {
  Image,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import image from "./page_not_found.svg";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <Segment color="teal">
      <Grid columns={2} stackable textAlign="center">
        <Divider vertical>
          <Icon name="chevron circle right" />
        </Divider>

        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Image src={image} size="medium" centered />
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="info circle" />
              <h1> Page Not Found</h1>
              <h4>
                The page you are looking does not exist or have been removed!
              </h4>
            </Header>
            <br />
            <Link to="/">
              <Button color="google plus" compact>
                <Icon name="home" /> Home
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default PageNotFound;
