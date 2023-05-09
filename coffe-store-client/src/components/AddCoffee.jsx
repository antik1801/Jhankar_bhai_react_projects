import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)
        // fetch data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'okay'
                  })
                  form.reset()
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
      <p className="text-3xl font-extrabold text-center">Add a Coffee</p>
      <form onSubmit={handleAddCoffee}>
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
                placeholder="Coffe Name"
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
                placeholder="Available Quantity"
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
                type="text"
                placeholder="Supplier"
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
                placeholder="Taste"
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
                placeholder="Category"
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
                placeholder="Details"
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
