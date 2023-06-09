import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id, img } = service;
  console.log(service);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fname = form.firstName.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const image = img;
    const bookings = {
      customerName: fname,
      date: date,
      phone: phone,
      message: message,
      email: email,
      service_id: _id,
      service: title,
      price: price,
      img: image,
    };
    console.log(bookings);
    fetch("https://car-doctor-server-liard-alpha.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Services added!",
            `Your booking tracking number is ${_id}!`,
            "success"
          );
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl mb-9">Book Service: {title}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="card-body space-y-10 bg-base-200 p-24 rounded-xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
            <div className="space-y-10">
              <div className="form-control">
                <input
                  type="text"
                  name="firstName"
                  defaultValue={user?.displayName}
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  defaultValue={user?.phone}
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="space-y-10">
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <textarea
              name="message"
              className="textarea textarea-bordered"
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-block"
            value={"Order Confirm"}
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
