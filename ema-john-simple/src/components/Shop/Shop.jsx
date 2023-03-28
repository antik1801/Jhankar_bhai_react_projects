import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

//parent App.jsx
const shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleProducts = (product) =>{
        console.log('product-added',product);
    } 
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=> <Product product={product} key={product.id} handleProducts={handleProducts}></Product>)
            }
            </div>
            <div className="cart-container">
                <h4>Cart container</h4>
            </div>
        </div>
    );
};

export default shop;