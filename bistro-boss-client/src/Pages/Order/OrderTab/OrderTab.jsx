import React from "react";
import FoodCard from "../../../components/FoodCard";

const OrderTab = ({items,img}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} img={img}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
