import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import "./Main.css"
const Main = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;