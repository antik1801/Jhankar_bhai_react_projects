import React from "react";
import "./Card.css";
const Card = (props) => {
    const {cart} = props;
    console.log(props);
    let total = 0;
    let totalShipping = 0;
    let tax = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        tax = tax + (total*0.1);
    }
    let grandTotal = total + totalShipping + tax;


  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Card;
