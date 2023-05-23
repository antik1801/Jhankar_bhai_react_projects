import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center my-10 md:w-4/12 mx-auto'>
            <p className='text-yellow-500 italic text-xl mb-2'>---{subheading}---</p>
            <p className='text-5xl uppercase border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;