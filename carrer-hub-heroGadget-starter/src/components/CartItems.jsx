import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const CartItem = ({ item }) => {
  const { id, title, salary, logo, company, location } = item;
  return (
    <div className=" my-8 border-[1px] border-[#E8E8E8] p-[30px] gap-[32px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[32px]">
          <div className="h-[240px] bg-[#F4F4F4] w-[240px] flex justify-center items-center">
            <img src={logo} alt="" className=" h-[100px] w-[120px]" />
          </div>
          <div>
          <h1 className="text-[34px]">{title}</h1>
          <h1 className="text-[24px] text-[#757575] mt-[8px]">{company}</h1>
          
          <div className="flex gap-[16px] mt-[16px]">
            <button className="p-[9px] border-[2px] title-text rounded-[4px] border-[#7E90FE]">
              Remote
            </button>
            <button className="p-[9px] border-[2px] title-text rounded-[4px] border-[#7E90FE]">
              Full Time
            </button>
          </div>
         
          <div className="flex gap-[24px] mt-[24px]">
            <div className="flex gap-[8px]">
              <MapPinIcon className="w-[24px] text-[#757575]"></MapPinIcon>
              <span className="text-[#757575] text-[20px]">{location}</span>
            </div>
            <div className="flex gap-[8px]">
              <CurrencyDollarIcon className="w-[24px] text-[#757575]"></CurrencyDollarIcon>
              <span className="text-[#757575] text-[20px]">{salary}</span>
            </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-[15px] text-white text-[20px] font-[800] ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
