import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const NavBar = () => {
    const [menu,setMenu] = useState(false)
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/",
        },
        {
          id: 2,
          name: "About",
          path: "/about",
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact",
        },
        {
          id: 4,
          name: "Blog",
          path: "/blog",
        },
      ];
    
  return (
    <nav >
        <span onClick={()=>setMenu(!menu)} className="md:hidden">
         <span className="text-5xl">{menu ? <XMarkIcon  className="h-6 w-6 text-purple-500 " /> : <Bars3Icon  className="h-6 w-6 text-purple-500 " />}</span>
         
        </span>
        <ul className={`md:flex absolute md:static duration-500 ${menu ? 'top-6' : '-top-48'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
  );
};

export default NavBar;
