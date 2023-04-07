import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


//parent App.jsx
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [storeProduct, setStoreProduct] = useState([]);
  // useEffect itself an asynchronus function doesn't depend on the next useEffect
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the added products
    for (const id in storedCart) {
      // step 2: Get products from products state
      const addedProducts = products.find((product) => product.id === id);
      if (addedProducts) {
        //step 3: added quantity
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleProducts = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleProducts={handleProducts}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Card cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/orders"}>
            <button className="btn-procced">Orders Review <FontAwesomeIcon icon={faArrowRight} /></button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
