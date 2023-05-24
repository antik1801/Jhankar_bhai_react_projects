import React from 'react';
import chef from "../../../assets/home/chef-service.jpg"

const Hero = () => {
    return (
        <div className='relative mb-20'>
            <img src={chef} alt="" />
            <div className='w-4/6 flex justify-center items-center bg-white text-black text-center flex-col absolute top-28 left-52 p-10'>
            <p className='text-3xl mb-5'>Bistro Boss</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi nam, architecto beatae nostrum quo et facere laborum amet rem dignissimos ipsam, incidunt veniam sequi dolores aliquam dolor iste distinctio!</p>
            </div>
        </div>
    );
};

export default Hero;