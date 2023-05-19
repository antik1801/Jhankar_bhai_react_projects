import React, { useEffect, useState } from 'react';
import SingleCard from "../Pages/SinglePages/SingleCard";
import { Link } from "react-router-dom";

const Cars = () => {
    const [cars,setCars] = useState([])
    const url = `http://localhost:5000/category?subCategory=${"cars"}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    },[])
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <SingleCard key={car._id} item={car}></SingleCard>
          ))}
        </div>
       
      </div>
    );
};

export default Cars;