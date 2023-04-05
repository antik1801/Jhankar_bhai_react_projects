import React from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h2>Orders Page:</h2>
      </div>
      <div className="cart-container">
        <Card cart={[]}></Card>
      </div>
    </div>
  );
};

export default Orders;
