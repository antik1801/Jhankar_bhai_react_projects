import React from 'react';
import HeaderCarosoul from './HeaderCarosoul';
import HomePageChefCart from './HomePageChefCart';
import { useLoaderData } from 'react-router-dom';
import CarosoulInfo from './CarosoulInfo';
import AwsomeSlider from '../components/AwsomeSlider';
import HeroSection from './HeroSection';

const HomePageLayout = () => {
    const chefs = useLoaderData();
    
    return (
        <div>
            <div className='mx-[10vw] mt-5 mb-10'>
            <HeaderCarosoul></HeaderCarosoul>
            </div>
            <div className='mx-[10vw] mt-5 mb-10'>
            <HeroSection></HeroSection>
            </div>
            <div className="mx-[10vw] grid grid-cols-1 md:grid-cols-3">
            {chefs.map(chef=>
            <HomePageChefCart chef={chef} key={chef.id}></HomePageChefCart>
            )}
            </div>
        </div>
    );
};

export default HomePageLayout;