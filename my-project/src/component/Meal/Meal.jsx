import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
    const {idMeal: id, strMeal:title, strArea, strMealThumb:image, strInstructions:subtitle} = meal;
    return (
        <Link to={`../meals/spq`}>
                    <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-2xl ">
        <img
          src={image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-96"
        />
        <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 px-6 py-4 flex flex-col">
            <p>{title}</p>
            <br />
            <p>{subtitle?.substring(0,45)}...</p>
            <br />
            <p className="mt-auto">Price: {id}</p>
        </div>
      </div>
        </Link>
    );
};
export default Meal;