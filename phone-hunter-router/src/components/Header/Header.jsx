import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { BoltIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full rounded-lg">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link to={"/"} className="nextPage-logo inline-flex items-center">
            {/* <BoltIcon className="h-12 w-12 text-blue-500"></BoltIcon> */}
            {/* <RectangleGroupIcon className="h-12 w-12 text-blue-500"></RectangleGroupIcon> */}
            <span className="ml-2 text-5xl tracking-wider text-gray-800 font-semibold font-mono">
              Phone4u<span className="text-orange-700">Arena</span>
            </span>
          </Link>
          {/* Nav item section started*/}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
                title="Default page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phones"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
                title="books link"
              >
                Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
                title="Developers feedback"
              >
                About us
              </NavLink>
            </li>
          </ul>
          {/* Nav Link Ends */}

          {/* Mobile Navbar Section Starts */}
          <div className="lg:hidden">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="default">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Mobile Navbar Section Ends */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
