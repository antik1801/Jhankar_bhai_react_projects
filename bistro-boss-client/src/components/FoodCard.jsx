import React, { useContext } from "react";
import Button from "./Button";
import ButtonCart from "./ButtonCart";
import { AuthContext } from "../ContextProviders/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const {user} = useContext(AuthContext);
  const { name, _id, recipe, image, price } = item;
  const [,refetch] = useCart();
  const navigate = useNavigate()
  const location = useLocation();
  const handleAddToCart = item =>{
    console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id,name,image,price,email:user.email}
      refetch(); // refetch cart to update the number of items in cart
      fetch('http://localhost:5000/carts',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire(
            'Item Added to cart!',
            '',
            'success'
          )
        }
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Login required',
        text: 'Please login to add the cart!',
      })
      navigate('/login',{state: {from: location}})
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-80"
        />
        <p className="bg-slate-900 text-white absolute right-0 top-0 mt-4 mr-2 text-xl">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        {/* <Button details="Add to cart" ></Button> */}
        <ButtonCart details={"Add to Cart"} handleAddToCart={handleAddToCart} item={item}></ButtonCart>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
