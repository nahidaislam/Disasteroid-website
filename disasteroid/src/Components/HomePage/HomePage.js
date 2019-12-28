import React, { Component } from "react";
import earth from "../../Image/earth.png";
import "./HomePage.css";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${earth})`
};

class HomePage extends Component {
  render() {
    return (
      <div className="home-section" id="home">
        <section style={sectionStyle}>
          <h1 className="title"> D I S A S T E R O I D</h1>
          <p id="sub-title">
            A collaborative AR game, aiming to save the world.
          </p>
          <ul class="actions git-button">
            <a
              href="https://github.com/arquLV/Disasteroid"
              target="_blank"
              class="button scrolly"
            >
              GitHub
            </a>
          </ul>
        </section>
      </div>
    );
  }
}
export default HomePage;
