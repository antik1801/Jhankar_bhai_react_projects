import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { toast } from "react-hot-toast";

const Login = () => {

  const { signIn, googleSignIn, githubSignIn, user} = useContext(AuthContext);

  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to={"/register"}>
            <button className="btn btn-link text-blue-800">
              New to Auth master? Please register
            </button>
          </Link>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleGoogleSignUp}>
              Google SignUp
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleGithubLogin}>
              Github SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
