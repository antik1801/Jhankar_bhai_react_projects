import React, { useContext } from "react";
import {Link } from "react-router-dom";
import { AuthContext } from "../ContextProviders/AuthProviders";
import { FaUserAlt } from 'react-icons/fa';
import { toast } from "react-toastify";

const Navigation = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      toast('Logout successfully')
    })
    .catch(err=>{
      toast(err.message)
    })
  }
  const items = (
    <>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/alltoys"}>All Toys</Link></li>
      <li><Link to={`/mytoys`}>My Toys</Link></li>
      <li><Link to={"/addatoy"}>Add a Toy</Link></li>
      {user ? <li> <button className="btn btn-primary" onClick={handleLogOut}>logout</button> </li> : <li><Link to={"/login"}>Login</Link></li>}
      <li><Link to={"/blog"}>Blog</Link></li>
      <li><Link to={"/about"}>About</Link></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
             {items}
            </ul>
          </div>
         <label className="flex items-center">
            <img src="Toy.svg" alt="" className="h-15 w-20"/>
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">Toy Line BD</Link>
         </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          {user && <div className="w-10 rounded-full">
          <img src={user?.photoURL} title={user?.displayName} className="w-10 rounded-full"/>
        </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navigation;
