import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-end items-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="link"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label" onClick={() => setShow(!show)}>
                    show password?
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                </div>
              </div>
              
            </form>
            <div className="divider">OR</div>
              <div className="text-center mt-4 mb-6">
              <button className="btn btn-circle">
               G
              </button>
              </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp Please now!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
