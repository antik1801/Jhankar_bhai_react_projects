import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';
import { ProductContext } from '../App';

const Shop = () => {
    const products = useContext(ProductContext);
    // console.log(productData);

    const handleAddToCart = id => {
        addToDb(id);
    }
    console.log(products);

    return (
        <div className='product-container'>
            {
                products.map((product) => 
                <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>
                )
            }
        </div>
    );
};

export default Shop;