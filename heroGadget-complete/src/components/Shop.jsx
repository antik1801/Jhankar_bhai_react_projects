import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utils/fakeDB";
import { CardContext, ProductContext } from "../App";
import { toast } from "react-hot-toast";

const Shop = () => {
  
  const [cart, setCart] = useContext(CardContext);
  const products = useContext(ProductContext);
  const handleAddToCart = (product) => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }
    toast.success('Product Added! 🛒')
    setCart(newCart)
    addToDb(product.id)
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
