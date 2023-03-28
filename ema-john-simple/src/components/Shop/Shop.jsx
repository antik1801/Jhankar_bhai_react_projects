import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

//parent App.jsx
const shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleProducts = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    } 
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=> <Product product={product} key={product.id} handleProducts={handleProducts}></Product>)
            }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default shop;