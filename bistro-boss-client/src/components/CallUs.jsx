import React from 'react';

const CallUs = ({number}) => {
    return (
        <div className='h-60 bg-black flex justify-center items-center mb-20'>
            <p className='text-white text-5xl'>Call Us: +{number}</p>
        </div>
    );
};

export default CallUs;