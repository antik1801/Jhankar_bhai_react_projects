import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import Card from "../Card/Card";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, [cart]);
  const handleAddToCart = (price) => {
    const filteredData = phones?.data?.find(phone=> phone.slug.split("-")[1] == price )
    const phoneCart =[...cart, filteredData];
    setCart(phoneCart)
    
  };
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

export default Home;
