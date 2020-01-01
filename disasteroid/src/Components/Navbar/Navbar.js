import React, { Component } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation" id="navbar">
        <div className="nav-content">
          <ul className=" nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="demo"
                spy={true}
                smooth={true}
                duration={500}
              >
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                duration={500}
              >
                Process
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                duration={500}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
