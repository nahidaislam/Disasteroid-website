import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider
} from "@material-ui/core/";

import ar from "../../Image/Technologies/ARCore.jpg";
import blender from "../../Image/Technologies/blender.jpg";
import unity from "../../Image/Technologies/unity.png";

import "./ProcessPage.css";

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

class ProcessPage extends Component {
  render() {
    return (
      <div className="process-section" id="process">
        <Grid
          container
          direction="rows"
          justify="space-around"
          alignContent="center"
        >
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Goals & motivations
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                  color={"inherit"}
                >
                  The goal of Disasteroid is to make fun dark humor themed
                  collaborative AR game. The game involves the player to save
                  the earth from asteroids using missiles and a special weapon.
                  However, creating the missiles and the special weapon involves
                  using resources from the earth. The player, therefore, has to
                  deal with the dilemma of whether or not they are actually
                  saving the earth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Graphics
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                  color={"inherit"}
                >
                  Disasteroid is an earth-based game. It involves low poly
                  earth. The earth is painted according to a vegetation map to
                  give the player information about the population density. The
                  player can then try to deflect the asteroids in a less dense
                  area.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Interaction
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                  color={"inherit"}
                >
                  The game can be played on android mobiles (Android 7.0 or
                  later). ADD ABOUT THE NETWORKING.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  3D Models
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                  color={"inherit"}
                >
                  A satellite with a gun on top of it was 3D printed to
                  represent the special weapon. A image was attached to it in
                  order to be able to track the satellite on the AR scene.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Technologies
                </Typography>
                <Divider className={styles.divider} light />
                <a href="https://unity.com/" target="_blank">
                  <img src={unity} alt="unity" className="techno-img" />
                </a>
                <a href="https://developers.google.com/ar" target="_blank">
                  <img src={ar} alt="ARCore" className="techno-img" />
                </a>
                <a href="https://www.blender.org/" target="_blank">
                  <img src={blender} alt="blender" className="techno-img" />
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Challenges & Lesson Learned
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                  color={"inherit"}
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
export default ProcessPage;
