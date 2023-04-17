import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../assets/hero.jpg'


const MyHome = () => {
  return (
    <section>
    <div className="bg-gray-200">
    <div className="my-container flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900">
      <h1 className="text-2xl w-full sm:text-4xl lg:text-6xl lg:leading-tight lg:max-w-3xl animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black">
        Welcome To Hero Gadgets
      </h1>
      <p className="text-xs sm:text-base md:text-xl max-w-2/3 md:max-w-xl max-w-2xl my-6 text-gray-900">
        Best E-commerce platform for buying high quality Smart Home Appliances
        at extremely affordable Price.
      </p>
      <div className="flex flex-wrap justify-center">
    <Link to={"/about"}>
        <button type="button" className="btn-primary">Shop Now</button>
    </Link>
    <Link to={"/about"} className="btn-outlined">About Us</Link>
    </div>
    </div>
    </div>
    <img src={heroImg} alt="" className="w-5/6 mx-auto mb-12 -mt-28 rounded-lg shadow-md bg-gray-500"/>
    </section>
  );
};

export default MyHome;
