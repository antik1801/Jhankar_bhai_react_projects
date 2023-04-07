import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import Card from "../Card/Card";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loader from "../Loading/Loading";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation.state)
  
  const phones = useLoaderData();
  const [cart, setCart] = useState([]);

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
