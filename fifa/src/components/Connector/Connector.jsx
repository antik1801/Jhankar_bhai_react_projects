import React from 'react';
import NavScrollExample from '../Navbar/Navbar';
import { Outlet } from "react-router-dom";

const Connector = () => {
    return (
        <div>
           <NavScrollExample></NavScrollExample>
           <Outlet></Outlet>
        </div>
    );
};

export default Connector;