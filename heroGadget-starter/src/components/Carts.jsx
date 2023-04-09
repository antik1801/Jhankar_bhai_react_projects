import React from 'react';
import { getStoredCart } from '../utils/fakeDB';

const Carts = () => {
    const cart = getStoredCart();
    console.log(cart);
    return (
        <div>
            cart 
        </div>
    );
};

export default Carts;