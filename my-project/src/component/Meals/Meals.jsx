import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
//   const { meals } = useLoaderData();
    // console.log(meals)
    const [names,setNames] = useState("egg"); 
    const [meals,setMeals] = useState([]);
    const handleChange =(name) =>{
        setNames(name);
    }
    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`)
      .then(res=> res.json())
      .then(data => setMeals(data));
    },[names])
  return (
    <div>
      <div className="my-container">
      <input type="text" placeholder="Type here" className="input w-full max-w-xs mt-5" onChange={(e)=>handleChange(e.target.value)}/>
        <section className="grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2">
            {/* {console.log(meals)} */}
          {meals?.meals?.map((meal,index) => (
            <Meal meal={meal} key={index}></Meal>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Meals;
