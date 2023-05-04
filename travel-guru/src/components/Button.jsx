import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <div>
      
        <button className="px-[20px] py-[14px] bg-yellow-400 text-black mt-5">
          {children} <FaArrowRight />{" "}
        </button>
     
    </div>
  );
};

export default Button;
