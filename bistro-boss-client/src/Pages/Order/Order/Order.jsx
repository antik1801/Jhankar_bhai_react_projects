import React, { useState } from "react";
import orderBG from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import Tab from "../../../components/Tab";

const Order = () => {
    const [active,setActive] = useState("tab1")
    const handleActive = active =>{
        setActive(active);
    }
  return (
    <div>
      <Cover title={"Order Cover"} img={orderBG}></Cover>
      <div className="flex justify-center">
        <Tab active={active} handleActive={handleActive}></Tab>
      </div>
    </div>
  );
};

export default Order;
