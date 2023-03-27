import React from 'react';
import "./Product.css"

const Product = ({product}) => {
    // console.log(product)
    const {img,name,price,seller,ratings} = product;
    console.log(img)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p>Manufacturar: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;