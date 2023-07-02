import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from '../Components/Container';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Particlejs from '../Components/Particlejs';

const Main = () => {
    return (
        <div>
            <Container>
            <Particlejs></Particlejs>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div data-aos="fade-left">
            <Footer></Footer>
            </div>
            </Container>
        </div>
    );
};

export default Main;