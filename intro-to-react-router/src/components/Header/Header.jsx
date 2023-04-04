import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const activeStyle = {

}
const Header = () => {
  return (
    <nav className="flex justify-between mb-7" style={activeStyle}>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to={"/accordings"}>accordings</ActiveLink>
      <ActiveLink to={"/friend/1"}>Friend </ActiveLink>
      <NavLink to={"/posts"}>Posts</NavLink>
    </nav>
  );
};

export default Header;
