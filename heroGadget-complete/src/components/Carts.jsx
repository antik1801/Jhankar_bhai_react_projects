import React, { useContext, useEffect, useState } from "react";
import {
  deleteShoppingCart,
  getStoredCart,
  removeFromDb,
} from "../utils/fakeDB";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { CardContext } from "../App";
import { toast } from "react-hot-toast";

const Carts = () => {
  let total = 0;
  const [cart, setCart] = useContext(CardContext);
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }
  // Delete shopping cart
  const handleDeleteCart = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("All Items Removed! 👍");
    }
    return toast.error("Cart Empty! 🔥");
  };

  // remove item from shopping cart
  const handleShoppingItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    toast.error('Item Removed! ❌')
    setCart(remaining);
    removeFromDb(id);
  };
  // Back to shop function
  const backToShopHandeller = () => {
    return toast.success("Back to the shop");
  };

  // Place order
  const orderHandeller = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("Order done! 👍");
    }
    return toast.error("Cart Empty! 🔥");
  };
  // clear cart button handeller
  const deleteCartHandler = () => {};

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>

        <ul className="flex  flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
              handleShoppingItem={handleShoppingItem}
            ></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button className="btn-outlined" onClick={handleDeleteCart}>
              Clear Cart
            </button>
          ) : (
            <Link to={"/shop"}>
              <button className="btn-outlined" onClick={backToShopHandeller}>
                Back To Shop
              </button>
            </Link>
          )}
          <button className="btn-primary" onClick={orderHandeller}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
