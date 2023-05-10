import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import part from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={part} className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute right-5 top-1/2" />
        </div>
        <div className="lg:w-1/2 space-y-6">
        <p className="text-3xl text-orange-400 font-bold">About Us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p>
          the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  
          </p>
          <button className="btn btn-primary bg-[#FF3811] border-none outline-none hover:bg-orange-600">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
