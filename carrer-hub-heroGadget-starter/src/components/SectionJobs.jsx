import React from 'react';

const  SectionJobs = ({job}) => {
    const {picture,name,description,jobs} = job;
    return (
        <div className="p-[25px] bg-gray-100">
            <img src={picture} alt=""  className="p-[15px] bg-gray-200 rounded-[8px]" />
            <div className='py-[15px] flex flex-col gap-[8px]'>
                <p className='text-[20px] font-[800] text-[#474747]
                font-manrope '>{description}</p>
                <p className='text-[#A3A3A3] font-[500] font-manrope'>{jobs}... jobs available</p>
            </div>
        </div>
    );
};

export default SectionJobs;