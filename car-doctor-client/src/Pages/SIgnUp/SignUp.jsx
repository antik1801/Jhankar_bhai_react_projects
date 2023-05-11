import React, { useContext } from 'react';
import img from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const confirm = form.confirmPassword.value;
        console.log(name,email,password,confirm)
        createUser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="py-6 w-1/2 ">
              <img src={img} alt="" />
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body space-y-4">
            <h1 className="text-5xl text-center font-bold">SignUp Now!</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
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
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                name="confirmPassword"
                  type="text"
                  placeholder="confirmPassword"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="SignUp"></input>
              </div>
              </form>
              <p className="my-4 text-center">Already Have an account?<Link to="/login" className="text-orange-400 font-bold">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;