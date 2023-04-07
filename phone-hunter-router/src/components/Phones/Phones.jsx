import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loading/Loading";
import Card from "../Card/Card";
import Phone from "../Phone/Phone";

const Phones = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  const phones = useLoaderData();
  const handleAddToCart = (price) => {
    const filteredData = phones?.data?.find(phone=> phone.slug.split("-")[1] == price )
    const phoneCart =[...cart, filteredData];
    setCart(phoneCart)
    
  };
  const [cart, setCart] = useState([]);
  return (
    <div className="grid md:grid-cols-4 justify-between mt-4">
    <div className="grid md:grid-cols-3 col-span-3">
      {" "}
      {phones?.data?.map((phone, index) => (
        <Phone phone={phone} key={index} handleAddToCart={handleAddToCart}></Phone>
      ))}
    </div>
    <div className="cart col-span-1 border-2 shadow-lg h-1/3 sticky top-0">
      <Card cart={cart? cart : []}></Card>
    </div>
  </div>
  );
};

export default Phones;
