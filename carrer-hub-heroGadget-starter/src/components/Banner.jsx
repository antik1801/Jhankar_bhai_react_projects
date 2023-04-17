import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" flex justify-between items-center gap-5  px-5 sm:flex-wrap md:flex-nowrap">
      <div>
        <h1 className="text-[80px] font-[800] font-manrope ">
          <span>
            One Step <br /> Closer To Your{" "}
          </span>
          <span className="title-text">Dream Job</span>
        </h1>
        <p className="ml-3 mt-6 w-4/5 text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link to={"/jobCatagory"} className="">
          <button
            className="py-[19px] px-[28px] border-[1px] text-[20px] font-manrope bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] mt-[32px] rounded-[8px]"
          >
            Get Started
          </button>
        </Link>
      </div>
      <div>
        {/* Banner Right side */}
        <img className="fluid  w-full" src={"P3OLG.png"} alt="" />
      </div>
    </div>
  );
};

export default Banner;
