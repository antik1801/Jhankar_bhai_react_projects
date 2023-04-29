import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./Navigation.css"

const NavigationBar = () => {
  // const { user } = useContext(AuthContext);
  const user = null;
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/"} className="text-decoration-none">
                Home
              </Link>
              <Link to={""} className="text-decoration-none">About</Link>
              <Link to={""} className="text-decoration-none">Carrer</Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle style={{ fontSize: "38px" }} />}

              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Link to={"/login"}>
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
