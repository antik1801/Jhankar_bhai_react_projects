import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth master</a>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/profile"}>Profile</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/orders"}>Orders</Link>
        {!user &&  <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Login</Link>}
        { !user && <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link> }
        
        {
          user ? <><span>{user.email}</span> <button className="btn btn-xs" onClick={handleLogOut}>Signout</button></>: <Link to={"/login"}><button className="btn btn-xs">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Header;
