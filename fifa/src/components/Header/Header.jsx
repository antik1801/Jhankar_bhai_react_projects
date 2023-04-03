import React from 'react';
import "./Header.css"
import MainContainer from '../MainContainer/MainContainer';

const Header = () => {
    return (
        <>
        <div className='bg header'>
            <h1 className='club-name neonText'>ব্যারিস্টার সুমন ক্লাব</h1>
        </div>
            <MainContainer></MainContainer>
        </>
    );
};

export default Header;