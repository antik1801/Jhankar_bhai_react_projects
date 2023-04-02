import React from "react";
import Feature from "../Feature/Feature";
import { v4 as uuid } from 'uuid';

const PriceCart = (props) => {
  const { price } = props;
  // console.log(price.features);
  return (
    <div className="bg-indigo-950 mt-6 p-6 rounded-3xl hover:scale-105 cursor-pointer hover:shadow-gray-800 hover:shadow-2xl">
      <h2 className="text-center">
        {" "}
        <span className="text-purple-500 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-extrabold text-white">/month</span>
      </h2>
      <h5 className="text-2xl font-bold text-white text-center my-6">
        {price.name}
      </h5>
      <p className="text-white underline font-bold text-3xl mb-5">Features:</p>
      {
        price.features.map((feature) =><Feature key={uuid()} feature={feature}></Feature>)
      }
    </div>
  );
};

export default PriceCart;
