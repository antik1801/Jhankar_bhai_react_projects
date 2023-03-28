import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
// parent App.jsx
const Header = () => {
  return (
    
    <nav className="header">
      <img src={logo} alt="" />
      <div>
      <a href="/shop">Order</a>
      <a href="/order">Order Review</a>
      <a href="/inventory">Manager Inventory</a>
      <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
