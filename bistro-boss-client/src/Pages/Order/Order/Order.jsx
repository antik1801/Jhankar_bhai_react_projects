import React from "react";
import orderBG from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";

const Order = () => {
  return (
    <div>
      <Cover title={"Order Cover"} img={orderBG}></Cover>
      <div className="tabs">
        <a className="tab tab-bordered">Tab 1</a>
        <a className={`tab tab-bordered tab-active`}>Tab 2</a>
        <a className="tab tab-bordered">Tab 3</a>
      </div>
    </div>
  );
};

export default Order;
