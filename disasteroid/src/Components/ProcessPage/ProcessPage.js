import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import "./ProcessPage.css";

const styles = muiBaseTheme => ({
  // card: {
  //   maxWidth: 300,
  //   margin: "auto",
  //   transition: "0.3s",
  //   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  //   "&:hover": {
  //     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  //   }
  // },
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
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  GOALS AND MOTIVATIONS
                </Typography>
                <Divider className={styles.divider} light />
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  The goal of Disasteroid is to make dark humor themed
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
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  GRAPHICS
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
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  INTERACTION
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
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  3D MODELS
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
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  TECHNOLOGIES
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
          <Grid container item xs={4} spacing={2}>
            <Card className="cards">
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  CHALLENGES AND LESSON LEARNED
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
export default ProcessPage;
{
  /* <Card className="cards">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */
}
