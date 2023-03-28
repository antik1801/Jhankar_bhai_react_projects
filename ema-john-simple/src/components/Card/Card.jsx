import React from "react";
import "./Card.css";
const Card = (props) => {
    const {cart} = props;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Card;
