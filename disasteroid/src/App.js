import React, { Component } from "react";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Container, Navbar, Nav } from "react-bootstrap";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import DemoPage from "./Components/DemoPage/DemoPage";
import ProcessPage from "./Components/ProcessPage/ProcessPage";
import GalleryPage from "./Components/GalleryPage/GalleryPage";
import TeamPage from "./Components/TeamPage/TeamPage";

import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Disasteroid",
  //     headerLinks: [
  //       { title: "Home", path: "/" },
  //       { title: "Demo", path: "/demo" },
  //       { title: "Process", path: "/process" },
  //       { title: "Gallery", path: "/gallery" },
  //       { title: "Team", path: "/team" }
  //     ],
  //     home: {
  //       title: "Disasteroid",
  //       subTitle: "A dark AR game"
  //     },
  //     demo: {
  //       title: "Disasteroid demo"
  //     },
  //     process: {
  //       title: "The working process"
  //     },
  //     gallery: {
  //       title: "Photo Gallery"
  //     },
  //     team: {
  //       title: "Meet the team"
  //     }
  //   };
  // }

  render() {
    return (
      <div>
        <Navbar />
        {/* <HomePage />
        <DemoPage />
        <ProcessPage />
        <GalleryPage />
        <TeamPage /> */}
        <Element name="home">
          <HomePage />
        </Element>

        <Element name="demo">
          <DemoPage />
        </Element>

        <Element name="process">
          <ProcessPage />
        </Element>
        <Element name="gallery">
          <GalleryPage />
        </Element>
        <Element name="team">
          <TeamPage />
        </Element>
      </div>

      // <Router>
      //   <Container fluid={true}>
      //     <Navbar className="border-bottom" bg="transparent" expand="lg">
      //       {/* <Navbar.Brand>Disasteroid</Navbar.Brand> */}

      //       <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

      //       <Navbar.Collapse id="navbar-toggle">
      //         <Nav className="ml-auto">
      //           <Link className="nav-link" to="/">
      //             Home
      //           </Link>
      //           <Link className="nav-link" to="/demo">
      //             Demo
      //           </Link>
      //           <Link className="nav-link" to="/process">
      //             Process
      //           </Link>
      //           <Link className="nav-link" to="/gallery">
      //             Gallery
      //           </Link>
      //           <Link className="nav-link" to="/team">
      //             Team
      //           </Link>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Navbar>
      //     <Route
      //       path="/"
      //       exact
      //       render={() => (
      //         <HomePage
      //           title={this.state.home.title}
      //           subTitle={this.state.home.subTitle}
      //         />
      //       )}
      //     />
      //     <Route
      //       path="/demo"
      //       render={() => <DemoPage title={this.state.demo.title} />}
      //     />
      //     <Route
      //       path="/process"
      //       render={() => <ProcessPage title={this.state.process.title} />}
      //     />
      //     <Route
      //       path="/gallery"
      //       render={() => <GalleryPage title={this.state.gallery.title} />}
      //     />
      //     <Route
      //       path="/team"
      //       render={() => <TeamPage title={this.state.team.title} />}
      //     />
      //     <Footer />
      //   </Container>
      // </Router>
    );
  }
}

export default App;
