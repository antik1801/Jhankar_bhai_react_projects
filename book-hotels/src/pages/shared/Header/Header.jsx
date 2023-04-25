import React, { useContext } from "react";
import logo from "/logo.png";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import moment from "moment";
import "./Header.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error.message))
  }
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
          
          </Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mx-auto links ">
            <Link to="/home">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/pricing">Pricing</Link>
            {
              !user && <Link to="/login">Login</Link>
            }
            {
              !user &&  <Link to="/signup">SignUp</Link>
            }
            {
              user && <Button variant="danger" onClick={handleLogOut}>Logout</Button>
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </Container>
  );
};

export default Header;
