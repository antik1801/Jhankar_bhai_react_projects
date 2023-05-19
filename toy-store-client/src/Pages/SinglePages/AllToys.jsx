import React, { useEffect, useState } from "react";
import SingleRows from "./SingleRows";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages)?.keys()];
  useEffect(() => {
    fetch(
      `http://localhost:5000/allToys?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  }, [currentPage, itemsPerPage]);
  const options = [5,10,15,20]
  const handleSelectChange = event =>{
    setItemsPerPage(parseInt(event.target.value))
    setCurrentPage(0)
  }
  return (
    <div className="mx-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Seller Email</th>
              <th>Sub Category</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <SingleRows key={toy._id} toy={toy}></SingleRows>
            ))}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
        {/* Pagination */}
        <div className="pagination text-center space-y-5 mb-10">
          <p>Current page no: {currentPage}</p>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`${currentPage === number ? "selected" : " "} btn btn-primary mr-3`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
          <select value={itemsPerPage} onChange={handleSelectChange} className="select select-bordered max-w-xs">
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllToys;