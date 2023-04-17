import React from "react";
import { Link } from "react-router-dom";

const MyAbout = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold  leading-0 text-center">
        Help Center
      </h1>
      <div className="relative mt-6 mb-12">
    <span className="absolute inset-y-0 flex items-center pl-2">
      <button type="submit" title="search" className="p-4 focus:outline-none focus:ring">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      </button>
      </span>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-300"
      />
      </div>
      </div>
      <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <div className="flex flex-col w-full divide-y divide-gray-700">
      <Link to={"/support"} className="p-4 flex items-center justify-center  sm:py-8 lg:py-12">Billing</Link>
      <Link to={"/support"} className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</Link>
      <Link to={"/support"} className=" flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</Link>
      </div>
      <div className="flex flex-col w-full divide-y divide-gray-700">
      <Link to={"/support"} className="flex items-center justify-center  sm:py-8 lg:py-12">Features</Link>
      <Link to={"/support"} className=" flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact Us</Link>
      <Link to={"/support"} className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact Us</Link>
      </div>
      <div className="flex flex-col w-full divide-y divide-gray-700">
      <Link to={"/support"} className="p-4 flex items-center justify-center  sm:py-8 lg:py-12">My Order</Link>
      <Link to={"/support"} className=" flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</Link>
      <Link to={"/support"} className=" flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</Link>
      </div>
      </div>
    </section>
  );
};

export default MyAbout;
