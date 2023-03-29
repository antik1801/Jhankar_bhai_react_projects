import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default shop;