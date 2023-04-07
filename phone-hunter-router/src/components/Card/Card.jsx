import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({cart}) => {
    console.log(cart)
    const {phone_name,slug,image} = cart;
    const price =  (slug?.split("-")[1])
    return (
        <div className=''>
            <p>Order Summary : {cart.length}</p>
            <Link to="/phones">
            <button className='bg-slate-700 text-white w-full'>Checkout</button>
            </Link>
        </div>
    );
};

export default Card;