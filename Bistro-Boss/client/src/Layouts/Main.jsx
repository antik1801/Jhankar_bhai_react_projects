import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from '../Components/Container';

const Main = () => {
    return (
        <div>
            <Container>
            <Outlet></Outlet>
            <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;