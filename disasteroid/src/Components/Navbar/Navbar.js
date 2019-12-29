import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <nav className="navbar navbar-default navbar-fixed-top sticky">
          <div className="navigationbar">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="demo"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="process"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
