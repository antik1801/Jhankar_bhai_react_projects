import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProviders/AuthProviders";
import SingleRows from "./SingleRows";
import { useLoaderData } from "react-router-dom";
import SingleRowsForMyToys from "./SingleRowsForMyToys";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [controll,setControll] = useState(false);
  //   const [itemsPerPage, setItemsPerPage] = useState(10);
  //   const [currentPage, setCurrentPage] = useState(0);
  //   const { totalToys } = useLoaderData();
  //   const totalPages = Math.ceil(totalToys / itemsPerPage);
  //   const pageNumbers = [...Array(totalPages)?.keys()];
  const { user } = useContext(AuthContext);
  console.log(user.email);
  useEffect(() => {
    fetch(
      `https://toy-store-server-ashy.vercel.app/sellerItems?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [controll]);
  const handleControll = () =>{
    setControll(!controll)
  }
  //   const options = [5,10]
  //   const handleSelectChange = (event) => {
  //     setItemsPerPage(parseInt(event.target.value));
  //     setCurrentPage(0);
  //   };
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
              <th>Category</th>
              <th>Sub Category</th>
              <th>price</th>
              <th>Quantity</th>
              <th className="text-center">Option</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((toy) => (
              <SingleRowsForMyToys
                key={toy._id}
                toy={toy}
                handleControll={handleControll}
              ></SingleRowsForMyToys>
            ))}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
        {/* Pagination */}
        {/* <div className="pagination text-center space-y-5 mb-10">
          <p>Current page no: {currentPage}</p>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`${
                currentPage === number ? "selected" : " "
              } btn btn-primary mr-3`}
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
        </div> */}
      </div>
    </div>
  );
};

export default MyToys;
