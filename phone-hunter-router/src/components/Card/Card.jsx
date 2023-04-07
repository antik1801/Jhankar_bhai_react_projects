import React from 'react';

const Card = ({cart}) => {
    console.log(cart)
    return (
        <div className=''>
            <p>Order Summary : {cart.length}</p>
            <p>Price: </p>
        </div>
    );
};

export default Card;