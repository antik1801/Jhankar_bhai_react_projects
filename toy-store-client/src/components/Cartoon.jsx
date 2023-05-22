import React from "react";
import { Link } from "react-router-dom";

const Cartoon = () => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://www.emmys.com/sites/default/files/styles/slider_images/public/photos-article/anime-survey2-1170x780.jpg?itok=oeArnEk6"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <Link to={`/categoryToys/${"anime"}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Anime
            </h5>
          </Link>

          <div className="flex items-center justify-between">
            <Link
              to={`/categoryToys/${"anime"}`}
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
            src="https://hips.hearstapps.com/hmg-prod/images/1978-porsche-928-102-1668112560.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Cars
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <Link
              to={`/categoryToys/${"cars"}`}
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
            src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/NZL3ED3AARDSPKOGGMVJQ7MCVQ.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Advance
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <Link
              to={`/categoryToys/${"advance"}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoon;
