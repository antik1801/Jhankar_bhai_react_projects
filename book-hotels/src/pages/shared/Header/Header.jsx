import React from "react";
import logo from "/logo.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import moment from "moment";
import "./Header.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <br />
        <h3>{moment().format("dddd, MMMM D YYYY")}</h3>
      </div>
      <div className="bg-gray d-flex rounded-2">
        <Marquee gradient={true} className="text-danger py-2 overflow-hidden fs-1" gradientColor={[243,243,243]}>
          Offer! Our hotel rooms are available only 34 days with 25% of dicount in the EID festible. We can provide shared and couples room.
        </Marquee>
      </div>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto">
            <p>Hello, Gazi Ehsanul Haque</p>
          </Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mx-auto links ">
            <Link to="/home">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </Container>
  );
};

export default Header;
