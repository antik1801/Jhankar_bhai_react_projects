import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import "./Shop.css"

//parent App.jsx
const shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [storeProduct,setStoreProduct] = useState([]);
    // useEffect itself an asynchronus function doesn't depend on the next useEffect
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleProducts = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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