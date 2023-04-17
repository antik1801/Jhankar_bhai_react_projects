import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { addToDb } from './Utils/fakeDB';

const JobHunters = () => {
    const job = useLoaderData()
    const {company,description,id,jobResponsibility,location,logo,office,phone,requirements,salary,title,email} = job[0];

    const handleApplyNow = id =>{
        addToDb(id);
        return toast.success("Job Application Done 🔥 ")
    }

    return (
        <div className='mx-[80px] '>
            <div className='my-[80px] text-center my-container'>
                <h1 className='text-5xl font-black'>Job Details</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-10 justify-between'>
                <div className='border-2 shadow-2xl p-7 rounded-xl bg-purple-200 bg-opacity-60 '>
                    <h1 className='mb-[20px]'><span className='text-3xl font-bold'> Job Description: </span><span className='text-xl'>{description}</span></h1>
                    
                    <h1 className='mb-[20px] '><span className='text-3xl font-bold'> Job Responsiblity: </span><span className='text-xl'>{jobResponsibility}</span> </h1>
                    <h1 className='mb-[20px]'> <span className='text-3xl font-bold'>
                        Educational Requirments:
                        </span> {
                        requirements.map((skill,i) => <li key={i}>{skill}</li>)
                        }</h1>
                    <h1 className='mb-[20px]'><span className='text-3xl font-bold'> Experiences: </span></h1>
                </div>
                <div className='border-2 shadow-2xl p-7 rounded-xl bg-purple-200 bg-opacity-60 '>
                    <h1 className='text-3xl'>Job Details</h1>
                    <div className='flex flex-col justify-between'>
                    <div>
                    <img src={logo} alt="" className='h-24 mt-6'/>
                    <p className='font-semibold'>Position: {title}</p>
                    <p className='font-semibold'>Company: {company}</p>
                    <p className='font-semibold'>Salary: ${salary} USD</p>
                    <p className='font-semibold'>Location: {location}</p>
                    <p className='font-semibold'>Office: {office}</p>
                    <p className='font-semibold'>Phone: {phone}</p>
                    <p className='font-semibold'>email:{email}</p>
                    </div>
                    <div>
                    <button className='btn-primary w-full' onClick={()=>handleApplyNow(id)}>Apply Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobHunters;