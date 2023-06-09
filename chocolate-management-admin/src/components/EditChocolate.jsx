import React from "react";
import { useLoaderData } from "react-router-dom";
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const EditChocolate = () => {
    const chocolate = useLoaderData()
    const {_id,name,country,category,photo} = chocolate;
    // console.log(chocolate)
  const handleEditChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newChocolate = { name, country, category, photo };
    // console.log(newChocolate);
    fetch(`http://localhost:5000/chocolates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated Item!", "A new Update added!", "success");
        }
      });
  };
  return (
    <div className="bg-gray-200 p-10">
      <div className="bg-white rounded-xl">
        <p className="text-3xl mt-5 bg-gradient-to-r from-[#DC8D48] via-[#91572B] to-[#692911] w-1/2 text-white py-[16px] px-[65px] mx-auto text-center rounded-xl">
          Chocolate Management System
        </p>
        <form className="mx-[113px] py-[48px]" onSubmit={handleEditChocolate}>
       <Link to="/"><button className="btn btn-success">All Chocolate</button></Link>
          <h2 className="text-2xl font-bold text-center">Edit Chocolate</h2>
          <p className="text-center">
            Use the below form to create new product
          </p>
          <div className="form-control w-full mt-5 mb-7">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="name"
                className="input input-bordered w-full p-5"
                required
              />
            </label>
          </div>
          <div className="form-control w-full mt-5 mb-7">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered w-full p-5"
                required
              />
            </label>
          </div>
          <div className="form-control w-full mb-7">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group">
              <input
                name="country"
                defaultValue={country}
                type="text"
                placeholder="Country"
                className="input input-bordered w-full p-5"
                required
              />
            </label>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" defaultValue={category} className="select w-full mb-7 border">
              <option>Economy</option>
              <option>Premium</option>
              <option>Pro</option>
            </select>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn btn-block bg-[#91572B]"
          />
        </form>
      </div>
    </div>
  );
};

export default EditChocolate;
