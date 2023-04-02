import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = (props) => {
    const {feature} = props;
    return (
        <div className='mt-2 flex items-center'>
             <CheckCircleIcon className="h-4 w-4 text-green-500" />
            <span className='text-white ml-2'>{feature}</span>
        </div>
    );
};

export default Feature;