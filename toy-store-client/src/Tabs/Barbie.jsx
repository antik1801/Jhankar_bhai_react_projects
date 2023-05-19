import React, { useEffect, useState } from "react";
import SingleCard from "../Pages/SinglePages/SingleCard";
import { Link } from "react-router-dom";

const Barbie = () => {
  const [barbies, setBaebies] = useState([]);
  const url = `http://localhost:5000/category?subCategory=${"barbie"}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBaebies(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {barbies.map((barbie) => (
          <SingleCard key={barbie._id} item={barbie}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Barbie;
