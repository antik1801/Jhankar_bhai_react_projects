import React from "react";
import { Button, Container } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import "./Header.css";
import Marquee from "react-fast-marquee";

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
    </Container>
  );
};

export default Header;
