import React from "react";
import Button from "./Button";

const FoodCard = ({ item , img}) => {
  const { name, _id, recipe, image, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
        <p className="bg-slate-900 text-white absolute right-0 top-0 mt-4 mr-2 text-xl">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        <Button details="Add to cart"></Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
