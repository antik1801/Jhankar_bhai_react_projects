import React from 'react';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((sum,item)=> item.price + sum, 0);
    return (
        <div>
            <h3 className="text-3xl">Total items : {cart.length}</h3>
            <h3 className="text-3xl">Total price : $ {total}</h3>
            <button className="btn btn-warning btn-sm">Pay</button>
        </div>
    );
};

export default MyCart;