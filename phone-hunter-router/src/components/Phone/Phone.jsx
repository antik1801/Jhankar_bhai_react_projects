import React from 'react';

const Phone = ({phone, handleAddToCart}) => {
    const {phone_name,slug,image} = phone;
    const price =  parseInt(slug.split("-")[1]);
    return (
        <div className='mb-4'>
            <img src={image} alt="" />
            <p>{phone_name}</p>
            <p>{slug}</p>
            <p>Price: {price}</p>
            <button className='btn bg-neutral-200 text-orange-600 p-2 rounded-lg' onClick={()=>handleAddToCart(price)}>Add to cart</button>
        </div>
    );
};

export default Phone;