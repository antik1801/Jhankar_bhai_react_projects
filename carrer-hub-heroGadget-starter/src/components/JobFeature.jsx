import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const JobFeature = ({job}) => {
    return (
        <div className='border-2 shadow-2xl p-7 rounded-xl bg-purple-200 bg-opacity-60 hover:-translate-y-6 transition-all duration-200'>
            <div className='h-16 w-16 ml-3'>
            <img src={job.logo} alt="" className='object-cover'/>
            </div>
            <h1 className='ml-5 font-semibold'>{job.title}</h1>
            <p className='ml-5 font-black'>{job.company}</p>
            <div>
            <button className='btn-primary'>{job.office}</button>
            <button className='btn-primary'>Full Time</button>
            </div>
            <div className='mt-5'>
                <p className='font-medium ml-5 flex justify-between'>
                    <span>
                   {job.location}
                    </span>
                    <span>
                        Salary: {job.salary}
                    </span>
                    </p>
            </div>
           <Link to={`/jobHunter/${job.id}`}><button className='btn-primary'>See Details</button></Link> 
        </div>
    );
};

export default JobFeature;