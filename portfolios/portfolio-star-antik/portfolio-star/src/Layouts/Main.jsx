import React from 'react';
import HomePage from '../Pages/Homepage/HomePage';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;