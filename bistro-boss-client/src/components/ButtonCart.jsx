import React from 'react';

const ButtonCart = ({details, handleAddToCart, item}) => {
    return (
       <button className='btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4' onClick={()=>handleAddToCart(item)}>{details}</button>
    );
};

export default ButtonCart;