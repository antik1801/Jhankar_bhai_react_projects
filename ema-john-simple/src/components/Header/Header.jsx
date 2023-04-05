import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
// parent App.jsx
const Header = () => {
  return (
    
    <nav className="header">
      <Link to={"/"}><img src={logo} alt="" /></Link>
      <div>
      <Link to="/">Home</Link>
      <Link to="/orders">Order Review</Link>
      <Link to="/inventory">Manager Inventory</Link>
      <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
