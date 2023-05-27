import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width="100" height="100" className="hidden md:block"/>
    </Link>
  );
};

export default Logo;
