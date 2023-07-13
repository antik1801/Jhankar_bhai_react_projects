import React from 'react';

import Carosoul from '../Header/Carosoul';
import Category from '../../Category/Category';

const Home = () => {
    return (
        <div>
            <div data-aos="fade-right">
            <Carosoul></Carosoul>
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;