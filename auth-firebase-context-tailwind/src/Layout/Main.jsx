import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;