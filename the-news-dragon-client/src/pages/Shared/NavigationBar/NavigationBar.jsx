import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./Navigation.css";
import { ToastContainer, toast } from "react-toastify";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout successfull");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/"}  className="text-decoration-none">
                Home
              </Link>
              <Link to={""}  className="text-decoration-none">
                About
              </Link>
              <Link  to={""} className="text-decoration-none">
                Carrer
              </Link>
            </Nav>
            {user && <>Hello, {user?.displayName}</>}
            <Nav>
              {user && (user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  style={{ height: "38px", width: "38px" }}
                  className="rounded-circle"
                />
              ) : (
                <FaUserCircle style={{ fontSize: "38px" }} />
              ))}
              {user ? (
                <Button variant="secondary" onClick={handleLogOut}>
                  Logout
                </Button>
              ) : (
                <Link to={"/login"}>
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ToastContainer></ToastContainer>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
