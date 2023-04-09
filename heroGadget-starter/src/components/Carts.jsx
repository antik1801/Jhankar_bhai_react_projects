import React, { useEffect, useState } from "react";
import { deleteShoppingCart, getStoredCart, removeFromDb } from "../utils/fakeDB";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Carts = () => {
  let total = 0;
  const { cartArray } = useLoaderData();
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }
  // Delete shopping cart
  const handleDeleteCart = () =>{
    deleteShoppingCart();
  }

  // remove item from shopping cart
  const handleShoppingItem = id =>{
    removeFromDb(id);
  }


  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cartArray.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>

        <ul className="flex  flex-col divide-y divide-gray-700">
          {cartArray.map((product) => (
            <CartItem product={product} key={product.id} handleShoppingItem={handleShoppingItem}></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
            {cartArray.length > 0 ? 
             <button className="btn-outlined" onClick={handleDeleteCart}>Clear Cart</button> 
            :
            <Link to={"/shop"}><button className="btn-outlined">Back To Shop</button></Link>
            }
            <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
