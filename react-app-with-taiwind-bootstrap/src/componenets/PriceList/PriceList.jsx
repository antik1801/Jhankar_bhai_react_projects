import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    axios.get("price.json").then((data) => setPrices(data.data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center bg-purple-300 font-semibold p-4">
        Awsome PriceList
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
