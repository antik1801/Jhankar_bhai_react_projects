import React, { useState } from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css"
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
   
    const handleRemoveFromCart = (id) =>{
      const remainingItem = cart.filter(product => product.id !== id)
      setCart(remainingItem);
      removeFromDb(id);
    }

  return (
    <div className="shop-container">
      <div className="review-container">
        {
          cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
        }
      </div>
      <div className="savedCart-container">
        <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Orders;
