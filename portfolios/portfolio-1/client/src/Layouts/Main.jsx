import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import { Outlet } from 'react-bootstrap-icons';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;