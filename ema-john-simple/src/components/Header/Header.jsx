import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      {user && (
        <span className="user">
          Wellcome,{user.displayName}{" "}
          <button onClick={handleLogOut}>Logout</button>{" "}
        </span>
      )}
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default Header;
