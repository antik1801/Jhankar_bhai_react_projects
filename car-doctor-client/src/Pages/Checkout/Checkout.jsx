import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price } = service;
  console.log(service);
  const handleFormSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const fname = form.firstName.value;
    const lname = form.lastName.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(fname,lname, phone, message)
  }
  return (
    <div>
      <h2>Book Service: {title}</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="card-body space-y-10 bg-base-200 p-24 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
          <div className="space-y-10">
            <div className="form-control">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control">
            <textarea name="message" className="textarea textarea-bordered" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
        </div>
        <input type="submit" className="btn btn-block" value={"Order Confirm"}/>
      </div>
      </form>
    </div>
  );
};

export default Checkout;
