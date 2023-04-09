import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';

const Shop = () => {
    const productData = useLoaderData();
    // console.log(productData);

    const handleAddToCart = id => {
        addToDb(id);
    }


    return (
        <div className='product-container'>
            {
                productData.map((product) => 
                <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>
                )
            }
        </div>
    );
};

export default Shop;