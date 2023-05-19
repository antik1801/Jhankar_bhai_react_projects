import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Barbie from "../Tabs/Barbie";
import Anime from "../Tabs/Anime";
import Cars from "../Tabs/Cars";
const TabCategory = () => {
  return (
    <div className="mx-20">
      <p className="text-center text-3xl font-semibold text-gray-600">Toy Categories</p>
      <Tabs>
        <TabList>
          <Tab>Barbie Category</Tab>
          <Tab>Anime Category</Tab>
          <Tab>Cars Collection</Tab>
        </TabList>
        <TabPanel>
          <Barbie></Barbie>
        </TabPanel>
        <TabPanel>
          <Anime></Anime>
        </TabPanel>
         <TabPanel>
          <Cars></Cars>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
