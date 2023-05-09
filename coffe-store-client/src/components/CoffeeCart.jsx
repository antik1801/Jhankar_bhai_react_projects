import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, handleRender }) => {

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  //   console.log(coffee);
  const handleBtnActive = (btn) => {
    setBtnActive(btn);
  };
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
                handleRender();
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl p-10">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Details: {details}</p>
          <p>Supplier: {supplier}</p>
          <h2>Quantity: {quantity}</h2>
          <h2>Category: {category}</h2>
          <h2>Taste: {taste}</h2>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className={`btn`}>View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className={`btn`}>Edit</button>
            </Link>
            <button
              className={`btn bg-orange-600 border-none`}
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
