import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobContext, cartContext } from '../App';
import CartItems from './CartItems';
import FilterJobs from './filterJobs';


const Jobs = () => {
    const { jobs, cartArray } = useLoaderData();
    
    console.log(cartArray);
    return (
        <div>
            <h1 className='text-5xl font-semibold mt-[80px] text-center'> Applied Jobs</h1>
            <div className='flex justify-end'>
                {/* <FilterJobs></FilterJobs> */}
            </div>
            <div className='my-container'>
                {
                cartArray.map(item => <CartItems item={item}></CartItems>)
                }
            </div>
        </div>
    );
};

export default Jobs;