import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const productData = useLoaderData();

    // console.log(productData);
    return (
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 '>
            {
                productData.map((product,i) => 
                <div key={product.id}>
                <p>{i+ ' ' +product.name}</p>
                </div>
                )
            }
        </div>
    );
};

export default Shop;