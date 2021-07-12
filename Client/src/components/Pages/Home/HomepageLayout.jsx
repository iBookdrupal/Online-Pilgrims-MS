import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
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
import HomeSlide from "./HomeSlide";
import image1 from "../../../images/airbus.jpg";
import image2 from "../../../images/pilgrims.jpg";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        ></Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <>
    <ResponsiveContainer>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Religious Groups
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give religious groups superpowers to do things that they
                never thought possible. Let us delight our pilgrims and empower
                them to keep them to their needs and faith through active
                participation
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Pilgrim Journey Conducive
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, yes it
                is because we need all our community members to participate in
                every religious activity
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src={image1} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button inverted color="red" size="large">
                More >>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                What is Pilgrimage?
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Pilgrim is a traveler (literally one who has come from a far)
                who is on a journey to a holy place. Typically, this is a
                physical journey to some place of special significance to the
                adherent of a particular religious belief system.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Register Everwhere
              </Header>
              <p style={{ fontSize: "1.5em" }}>
                You can register anywhere to be part of Adamawa State Pilgrims
                Board traveling system
              </p>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src={image1} />
                <b>Adamawa State Pilgrims Board</b>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
            <a href="#!"> Breaking News of this Year</a>
          </Header>
          <p style={{ fontSize: "1.33em", textAlign: "center" }}>
            Over a quite number of pilgrims travelled for pilrimage journey and
            are interested in using this system to enroll and save them the
            stress of always traveling to the main office for registration and
            manua forms which is not always favourable.
          </p>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">AIM OF THE SYSTEM </a>
          </Divider>

          <p style={{ fontSize: "1.33em", textAlign: "center" }}>
            This project is limited to{" "}
            <strong> Adamawa State Pilgrim Board </strong> which is targeted to
            solve the challenge of record keeping between Muslims Pilgrim (hajj)
            Board and Christian Pilgrims Board for better pilgrimage.
            <Button
              as="a"
              size="large"
              style={{ textAlign: "center", marginTop: "1em" }}
            >
              <a href="/register">I'm Still Quite Interested</a>
            </Button>
          </p>
        </Container>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <Image bordered rounded size="large" src={image2} />
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Register Everwhere
              </Header>
              <p style={{ fontSize: "1.5em" }}>
                You can register anywhere to be part of Adamawa State Pilgrims
                Board traveling system
              </p>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src={image2} />
                <b>Adamawa State Pilgrims Board</b>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </ResponsiveContainer>
  </>
);

export default HomepageLayout;
