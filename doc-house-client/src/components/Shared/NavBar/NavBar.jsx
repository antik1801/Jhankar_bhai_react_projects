import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png"

const NavBar = () => {
  const listItem = (
    <>
      <Link to={""} className="text-black lg:text-white p-4">Home</Link>
      <Link to={""} className="text-black lg:text-white p-4">About</Link>
      <Link to={""} className="text-black lg:text-white p-4">Appointment</Link>
      <Link to={""} className="text-black lg:text-white p-4">Login</Link>
    </>
  );
  return (
    <div className="navbar bg-transparent text-white fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItem}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl hidden md:block"> <img src={logo} alt="" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {listItem}
        </ul>
      </div> 
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;
