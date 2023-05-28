import React from 'react';
import "./Header.css"
import NavBar from '../NavBar/NavBar';
import Container from '../Container/Container';

const Header = () => {
    return (
        <div className='header h-48 '>
        <NavBar></NavBar>
        </div>
    );
};

export default Header;