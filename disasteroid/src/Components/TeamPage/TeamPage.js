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
                  missile mechanics.
                </Typography>
                <div className="content">
                  <a href="mailto:artursk@kth.se">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arturs-kurzemnieks/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
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
                <div className="content">
                  <a href="mailto:bariant@kth.se">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/augustin-bariant-2b0986172/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
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
                <div className="content">
                  <a href="mailto:chantalh@kth.se">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chantal-hundscheid/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
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
                  We are going to learn different kinds of species in nature
                  that live together to form amazing environment.
                </Typography>
                <div className="content">
                  <a href="mailto:migab@kth.se">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/miguelalvarezbordils/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
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
                  Graphics lead for the project. Designed the low poly earth,
                  missile, and the satellite using Blender. She was responsible
                  for the 3D printing and decorating of the special weapon,
                  satellite. She was also the project leader and responsible for
                  this website.
                </Typography>
                <div className="content">
                  <a href="mailto:nahida_1994@hotmail.com">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nahida-islam/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
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
                <div className="content">
                  <a href="mailto:tingyi@kth.se">
                    <FaEnvelope size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tingyi-li-3b408616a/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin size={25} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default TeamPage;
