import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const {totalProducts} = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(10)
  // console.log(totalProducts);
  // const itemsPerPage = 10; // TODO ITEMS
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  // let pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // } 

  const pageNumbers = [...Array(totalPages)?.keys()]
 
  // console.log(pageNumbers)
  /*
    pagination steps:
    1. determine the total number of content inside database - done
    2. decide the number of items per page - (temporary)
    3. determine the total number of pages - done
    4. create the pagination buttons
    5. Determine the current page
    6. 
  */
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const options = [5,10,20]
  const handleSelectChange = event =>{
    setItemsPerPage(parseInt(event.target.value))
    setCurrentPage(0)
  }
  return (
    <>
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/orders">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
    {/* Pagination */}
    <div className="pagination">
      <p>Current page no: {currentPage}</p>
      {
        pageNumbers.map(number => 
        <button 
        key={number}
        className={currentPage === number ? 'selected' : ' '}
        onClick={()=>setCurrentPage(number)}
        >{number}</button>)
      }
      <select value={itemsPerPage} onChange={handleSelectChange}>
        {
          options.map(option => ( 
          <option key={option} value={option}>
            {option}
          </option> ))
        }
      </select>
    </div>
    </>
  );
};

export default Shop;
