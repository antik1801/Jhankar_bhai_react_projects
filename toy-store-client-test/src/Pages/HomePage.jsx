import React from "react";
import Banner from "../components/Banner";
import Gellary from "../components/Gellary";
import TabCategory from "../components/TabCategory";
import Marquee from "react-fast-marquee";
import Map from "./SinglePages/Map";
import StaticPlans from "./StaticPlans";

const HomePage = () => {
  return (
    <div className="space-y-10 mb-10">
      <div className="mx-10">
        <Marquee speed="120" gradient="true" pauseOnHover="true">
            <p className="text-blue-600 text-xl font-semibold"> 
            Toy Line BD is the Bangladesh's first toybased website made by Gazi Ehsanul Haque and the programming hero team.
            </p>
        </Marquee>
      </div>
      <div data-aos="flip-left">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up-right">
        <Gellary></Gellary>
      </div>
      <div data-aos="fade-right">
        <TabCategory></TabCategory>
      </div>
        <Map></Map>
      <div>
        <StaticPlans></StaticPlans>
      </div>
    </div>
  );
};

export default HomePage;
