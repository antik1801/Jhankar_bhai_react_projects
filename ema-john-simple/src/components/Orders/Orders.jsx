import React, { useState } from "react";
import Card from "../Card/Card";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remainingItem = cart.filter((product) => product.id !== id);
    setCart(remainingItem);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="savedCart-container">
        <Card cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/checkout"}>
            <button className="btn-procced">Procced checkout
            <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Orders;
