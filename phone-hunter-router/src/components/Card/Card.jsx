import React from 'react';

const Card = ({cart}) => {
    console.log(cart)
    const {phone_name,slug,image} = cart;
    const price =  (slug?.split("-")[1])
    return (
        <div className=''>
            <p>Order Summary : {cart.length}</p>
        </div>
    );
};

export default Card;