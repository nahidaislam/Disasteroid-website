import React, { Component } from "react";
import { Element } from "react-scroll";

// import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
// import DemoPage from "./Components/DemoPage/DemoPage";
import ProcessPage from "./Components/ProcessPage/ProcessPage";
// import GalleryPage from "./Components/GalleryPage/GalleryPage";
// import TeamPage from "./Components/TeamPage/TeamPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Element name="home">
          <HomePage />
        </Element>
        <Element name="process">
          <ProcessPage />
        </Element>
      </div>
    );
  }
}

export default App;
