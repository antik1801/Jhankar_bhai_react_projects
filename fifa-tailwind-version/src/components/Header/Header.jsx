import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className="bg-black">
            {/* <Navbar information={information}></Navbar> */}
            <Banner></Banner>
        </div>
    );
};

export default Header;