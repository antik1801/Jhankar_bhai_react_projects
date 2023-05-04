import React from 'react';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const HomeLayout = () => {
    return (
        <div>
            <div className='sticky top-0 '>
            <Header></Header>
            </div>
            <div className='min-h-[calc(100vh-205px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;