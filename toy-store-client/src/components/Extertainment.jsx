import React from "react";
import { Link } from "react-router-dom";

const Extertainment = () => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://i.ytimg.com/vi/SrBnsSwTGjM/maxresdefault.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             Household
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <Link to={`/categoryToys/${"household"}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://cdn.vox-cdn.com/thumbor/-X0b8bGfG6I6Xzsg6aK32O-cWHY=/0x0:1680x1000/1200x800/filters:focal(790x246:1058x514)/cdn.vox-cdn.com/uploads/chorus_image/image/64060316/ts2main.0.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              General
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <Link to={`/categoryToys/${"general"}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://ideas.walmart.ca/wp-content/uploads/2022/08/Best_Toys_2022_Hero_Image_01.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              18+
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <Link to={`/categoryToys/${"adult"}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extertainment;
