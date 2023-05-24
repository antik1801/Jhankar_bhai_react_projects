import React from "react";
import Button from "../../../components/Button";

const MenuItem = ({ item }) => {
    // console.log(item)
  const { name, _id, recipe, image, price } = item;
  return (
    <div className="flex space-x-2">
      <img className="w-[120px] h-[100px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] bg-slate-200" src={image} alt="check connection" />
      <div>
        <h3 className="uppercase">{name}----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
