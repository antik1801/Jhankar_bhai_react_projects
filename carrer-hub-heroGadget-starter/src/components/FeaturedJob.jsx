import React, { useContext, useState } from 'react';
import { JobContext } from '../App';
import JobFeature from './JobFeature';
import { useLocation, useNavigation } from 'react-router-dom';


const FeaturedJob = () => {
    const jobs = useContext(JobContext);
    const [seeAll,setSeeAll] = useState(true)
    const loc = useLocation();
    const handelSeeAll = () =>{
        setSeeAll(!seeAll);
    }
    return (
        <div className='mt-[100px] mb-[4px]'>
            <div className='text-center'>
                {/* Text */}
            <h1 className='text-4xl font-semibold'>Featured Jobs</h1>
            <p className='text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mx-16 mt-7'>
                {
                  seeAll ?  jobs.slice(0,4).map(job => <JobFeature job={job} key={job.id} ></JobFeature>) : jobs.map(job => <JobFeature job={job} key={job.id} ></JobFeature>) 
                }
            </div>
            <div className={`text-center ${seeAll ? 'block' :'hidden' } my-10`}>
            <button className='btn-primary' onClick={handelSeeAll}>See All</button>
            </div>
            
        </div>
    );
};

export default FeaturedJob;