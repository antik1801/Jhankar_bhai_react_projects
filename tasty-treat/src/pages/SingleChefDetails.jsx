import React, { useState } from "react";
import { FaBookmark, FaEye, FaRegBookmark } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const SingleChefDetails = ({ recipee, chefDetailed }) => {
  const [bookMark,setBookMark] = useState(false)
  // console.log(recipee, chefDetailed);
  const handleBookMark =() =>{
    setBookMark(!bookMark)
    
    bookMark ?  toast("Removed from bookmark") : toast("Saved to Bookmark")
    
  }
  return (
    <div className="rounded-2xl shadow-xl">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg h-[280px] w-full"
            src={recipee.recipee_img}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <div className="flex justify-between">
            <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {recipee.recipee_name}
            </h5>
          </a>
          <button className="" onClick={handleBookMark}>{bookMark ? <FaBookmark></FaBookmark>: <FaRegBookmark></FaRegBookmark>}</button>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating style={{ maxWidth: 180 }} value={recipee.rating} readOnly />
            <span>{recipee.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>

            <button
              className="btn btn-success"
              disabled={bookMark}
            >
              Book marked
            </button>
          </div>
          <div className="flex justify-end items-center gap-3 mr-2 mt-2">
            <div> {recipee.views} </div>
            <FaEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefDetails;
