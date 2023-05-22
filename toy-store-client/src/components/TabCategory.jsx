import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Barbie from "../Tabs/Barbie";
import Anime from "../Tabs/Anime";
import Cars from "../Tabs/Cars";
import Education from "./Education";
import Extertainment from "./Extertainment";
import Cartoon from "./Cartoon";
const TabCategory = () => {
  return (
    <div className="mx-20">
      <p className="text-center text-3xl font-semibold text-gray-600">Toy Categories</p>
      <Tabs>
        <TabList>
          <Tab>Education</Tab>
          <Tab>Entertainment</Tab>
          <Tab>Cartoon</Tab>
        </TabList>
        <TabPanel>
          <Education></Education>
        </TabPanel>
        <TabPanel>
          <Extertainment></Extertainment>
        </TabPanel>
         <TabPanel>
          <Cartoon></Cartoon>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
