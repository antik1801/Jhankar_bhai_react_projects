import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProviders/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => {
        toast("Log Out successfull");
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn gap-2">
            Inbox
            <div className="badge badge-secondary">+99</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} title={user.displayName} />
              </div>
            </div>
          </li>
          <li>
            <button className="btn btn-ghost mt-1" onClick={handleSignOut}>
              Sign Out
            </button>{" "}
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
      <div className="navbar-start">
        <div className="dropdown text-black">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro Boss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;
