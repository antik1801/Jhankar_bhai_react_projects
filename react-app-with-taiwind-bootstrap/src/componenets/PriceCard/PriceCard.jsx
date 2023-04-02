import React from 'react';
import Features from '../Features/Features';

const PriceCard = (props) => {
    const {price:data} = props;
    const {features} = data;
    return (
        <div className='bg-indigo-500 mt-8  py-4 rounded-lg'>
            <div className='text-center'>
            <span className='text-5xl font-semibold'>{data.price}</span>
            <span className=''>/month</span>
            </div>
            <h2 className='text-4xl font-bold text-center'>{data.plan}</h2>
          <div className='my-3'>  {
                features.map((feature,index)=> <Features key={index} feature={feature}></Features>)
            }</div>
            <button className='bg-slate-100 w-full '>Buy now</button>
        </div>
    );
};

export default PriceCard;