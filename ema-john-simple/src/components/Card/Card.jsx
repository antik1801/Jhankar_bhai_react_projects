import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
  const { cart, handleClearCart } = props;
  let total = 0;
  let totalShipping = 0;
  let tax = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
    tax = tax + total * 0.1;
  }
  let grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
      <button className="btn-clear-cart" onClick={handleClearCart}>
        <span> Clear Cart </span>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Card;
