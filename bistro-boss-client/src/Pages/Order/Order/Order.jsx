import React, { useState } from "react";
import orderBG from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
// import Tab from "../../../components/Tab";
import imgSalad from "../../../assets/menu/salad-bg.jpg";
import imgPizza from "../../../assets/menu/pizza-bg.jpg";
import imgSoup from "../../../assets/menu/soup-bg.jpg";
import imgDessert from "../../../assets/menu/dessert-bg.jpeg";
import imgOffered from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const category = ['salad','pizza','soup','dessert','drinks'] 
  const {categories} = useParams();
  const initialIndex = category.indexOf(categories)
  const [active, setActive] = useState("tab1");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const handleActive = (active) => {
    setActive(active);
  };
  return (
    <div>
      <Cover title={"Order Cover"} img={orderBG}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads} img={imgSalad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas} img={imgPizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups} img={imgSoup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} img={imgDessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} img={imgOffered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
