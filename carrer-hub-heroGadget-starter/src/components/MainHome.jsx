import React from 'react';
import Header from './Header';
import Banner from './Banner';
import JobCatagery from './JobCatagery';
import FeaturedJob from './FeaturedJob';

const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatagery></JobCatagery>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default MainHome;