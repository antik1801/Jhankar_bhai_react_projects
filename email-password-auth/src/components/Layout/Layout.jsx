import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Login/Login';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;