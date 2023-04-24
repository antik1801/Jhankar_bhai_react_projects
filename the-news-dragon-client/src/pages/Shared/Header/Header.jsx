import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import "./Header.css"

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4 mb-3">
        <img src={logo} alt="" />
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex p-4 navi">
        <Button variant="danger">Latest</Button>
        <Marquee
          className="text-danger"
          speed={100}
          gradient={true}
            gradientColor={[243, 243, 243]}
          pauseOnHover={true}
        >
          I can be a React component, multiple React components, or just some
          text...... AIUB is going to blust at now sharp at 6:50 pm.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#carrer">Carrer</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
