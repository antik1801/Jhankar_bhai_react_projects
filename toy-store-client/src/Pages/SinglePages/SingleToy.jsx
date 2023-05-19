import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData()
    console.log(toy)
    
};

export default SingleToy;