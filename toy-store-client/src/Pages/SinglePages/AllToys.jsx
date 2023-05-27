import React, { useEffect, useState } from "react";
import SingleRows from "./SingleRows";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [textSearch, setTextSearch] = useState("");
  const { totalToys } = useLoaderData();
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages)?.keys()];
  const [modalData, setModalData] = useState({});
  const [buttonAsc,setButtonDes] = useState(true);
  useEffect(() => {
    fetch(
      `https://toy-store-server-ashy.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}}&sort=${buttonAsc ? 'asc' : 'des'}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  }, [currentPage, itemsPerPage, buttonAsc]);

  const options = [5, 10, 15, 20];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  const handleSearch = (text) => {
    setTextSearch(text);
    fetch(`https://toy-store-server-ashy.vercel.app/toysByTitle/${textSearch}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  const handleModal = (id) => {
    console.log(id);
    fetch(`https://toy-store-server-ashy.vercel.app/allToys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
        console.log(modalData);
      });
  };
  return (
    <div className="mx-10 ">
      <div className="text-center">
        <label htmlFor="">
          <p className="text-xl -ms-5">Search By ToysName / Price</p>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        <button className="btn btn-primary" onClick={()=>{setButtonDes(!buttonAsc)}} >{buttonAsc ? "Sort By Descending" : "Sort By Ascending"}</button>
      </div>
      <div className="">
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
              {toys.map((toy) => (
                <SingleRows
                  key={toy._id}
                  toy={toy}
                  handleModal={handleModal}
                ></SingleRows>
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
                className={`${
                  currentPage === number ? "selected" : " "
                } btn btn-primary mr-3`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
            <select
              value={itemsPerPage}
              onChange={handleSelectChange}
              className="select select-bordered max-w-xs"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Modal section */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-[900px] ">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={modalData.photo}
                alt="Movie"
                className="max-w-[300px]"
              />
            </figure>
            <div className="card-body">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                      >
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                      >
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        {modalData.name}
                      </th>
                      <td class="px-6 py-4">{modalData.price}</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {modalData.subCategory}
                      </td>
                      <td class="px-6 py-4">{modalData.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end modal-action">
            <label htmlFor="my-modal-5" className="btn btn-primary">
              Watch
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
