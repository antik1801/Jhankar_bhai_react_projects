import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
    // console.log(coffee)

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, quantity, supplier, taste, category, details, photo}

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
            }
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error!',
                text: `{${error.message}}`,
                icon: 'error',
                confirmButtonText: 'okay'
              })
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <p className="text-3xl font-extrabold text-center">Update a Coffee</p>
        <form onSubmit={handleUpdateCoffee}>
          {/* Form row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffe Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  type="text"
                  defaultValue={name}
                  placeholder='name'
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  name="quantity"
                  type="text"
                  placeholder='quantity'
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* Form  supplier row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  name="supplier"
                  placeholder='supplier'
                  type="text"
                  defaultValue={supplier}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  name="taste"
                  type="text"
                  placeholder='taste'
                  defaultValue={taste}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* Form categoty and details row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  name="category"
                  type="text"
                  placeholder='category'
                  defaultValue={category}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  name="details"
                  type="text"
                  placeholder='details'
                  defaultValue={details}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
           {/* Form categoty and details row */}
          <div className="mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  type="text"
                  placeholder='photo url'
                  defaultValue={photo}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update coffee" className="btn btn-block" />
        </form>
      </div>
    );
};

export default UpdateCoffee;