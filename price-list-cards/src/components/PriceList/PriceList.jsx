import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="mx-9">
      <h2 className="text-5xl font-bold text-center bg-slate-500 rounded-xl p-5">
        Awsome affordable price
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
        prices.map((price) => (
          <PriceCart key={price.id} price={price} >
          </PriceCart>
        ))
        }
      </div>
    </div>
  );
};

export default PriceList;
