import React, { Component } from "react";
import Typical from "react-typical";
import { Typography } from "@material-ui/core/";

import "./DemoPage.css";

class DemoPage extends Component {
  render() {
    return (
      <div className="demo-section" id="demo">
        <div className="demo-text">
          <Typical steps={["D E M O", 500]} loop={10} wrapper="h2" />
          <Typography variant="body1" component="h2">
            Welcome to the Demo of the collaborative AR game <b>Disasteroid</b>!{" "}
            <br />
            Play the video and have fun!
          </Typography>
        </div>

        <div className="vid-container">
          <iframe
            src="https://player.vimeo.com/video/382895194?title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            align="right"
            width="50%"
            height="50%"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default DemoPage;
