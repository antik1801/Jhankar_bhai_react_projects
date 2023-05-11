import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div>
            <h2>Checkout</h2>
        </div>
    );
};

export default Checkout;