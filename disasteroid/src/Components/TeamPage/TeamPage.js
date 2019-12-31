import React, { Component } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider
} from "@material-ui/core/";

import arturs from "../../Image/Team/arturs.JPG";
import augustin from "../../Image/Team/augustin.JPG";
import chantal from "../../Image/Team/chantal.JPG";
import miki from "../../Image/Team/miki.JPG";
import nahida from "../../Image/Team/nahida.JPG";
import tingyi from "../../Image/Team/tingyi.JPG";

import "./TeamPage.css";

const styles = muiBaseTheme => ({
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  }
});

class TeamPage extends Component {
  render() {
    return (
      <div className="team-section" id="team">
        <Grid
          container
          direction="rows"
          justify="space-around"
          alignContent="center"
        >
          <Grid item>
            <Card className="team-card">
              <img
                src={arturs}
                alt="profile-pricture"
                className="profile-img"
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Arturs Kurzemnieks
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  Technical lead for the project. Implemented the networking and
                  synchronization of all objects and events in the game to
                  ensure a consistent multiplayer experience, as well as parts
                  of the user interactions, including satellite spawning and
                  bomb mechanics.
                </Typography>

                <FaEnvelope size={25} />
                <FaLinkedin size={25} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="team-card">
              <img
                src={augustin}
                alt="profile-pricture"
                className="profile-img"
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Augustin Bariant
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  We are going to learn different kinds of species in nature
                  that live together to form amazing environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="team-card">
              <img
                src={chantal}
                alt="profile-pricture"
                className="profile-img"
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Chantal Hundscheid
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  We are going to learn different kinds of species in nature
                  that live together to form amazing environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="team-card">
              <img src={miki} alt="profile-pricture" className="profile-img" />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Miguel Alvarez Bordils
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  A satellite with a gun on top of it was 3D printed to
                  represent the special weapon. A image was attached to it in
                  order to be able to track the satellite on the AR scene.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="team-card">
              <img
                src={nahida}
                alt="profile-pricture"
                className="profile-img"
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Nahida Islam
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  We are going to learn different kinds of species in nature
                  that live together to form amazing environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="team-card">
              <img
                src={tingyi}
                alt="profile-pricture"
                className="profile-img"
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Tingyi Li
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  We are going to learn different kinds of species in nature
                  that live together to form amazing environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default TeamPage;
{
  /* <Container>
          <Row className=" justify-content-between p-3">
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={arturs} />
                <Card.Body>
                  <Card.Title>Arturs Kurzemnieks</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img
                  className="profile-img"
                  variant="top"
                  src={augustin}
                />
                <Card.Body>
                  <Card.Title>Augustin Bariant</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={chantal} />
                <Card.Body>
                  <Card.Title>Chantal Hundscheid</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" justify-content-between p-3">
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={miki} />
                <Card.Body>
                  <Card.Title>Miguel Alvarez Bordils</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={nahida} />
                <Card.Body>
                  <Card.Title>Nahida Islam</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={tingyi} />
                <Card.Body>
                  <Card.Title>Tingyi Li</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */
}
