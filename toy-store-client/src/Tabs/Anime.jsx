import React, { useEffect, useState } from "react";
import SingleCard from "../Pages/SinglePages/SingleCard";
import { Link } from "react-router-dom";

const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const url = `https://toy-store-server-ashy.vercel.app/category?subCategory=${"anime"}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {animes.map((anime) => (
          <SingleCard key={anime._id} item={anime}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Anime;
