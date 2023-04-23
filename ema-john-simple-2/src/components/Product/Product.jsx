import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// parent Shop.jsx
const Product = (props) => {
  // console.log(product)
  const { id, img, name, price, seller, ratings } = props.product;

  const handleProducts = props.handleProducts;

  return (
    <div className="product">
      <img src={img ? img : "vite.svg"} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p>Manufacturar: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        onClick={() => {
          handleProducts(props.product);
        }}
        className="btn-cart"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
      </button>
    </div>
  );
};

export default Product;
