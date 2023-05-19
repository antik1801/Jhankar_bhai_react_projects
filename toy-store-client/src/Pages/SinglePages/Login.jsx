import React, { useContext, useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProviders/AuthProviders";
import { toast } from "react-toastify";
import SocialButtons from "../../components/SocialButtons";

const Login = () => {
    const [show,setShow] = useState(false)
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            toast('Sign in successfull')
            navigate(from, { replace: true });
        })
        .catch(err=>{
            toast(err.message);
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type={show ? 'text' : 'password'}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover" onClick={()=>setShow(!show)}>
                  Show Password
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
            </form>
            <p>New to Toy Line bd? please
            <Link to={"/signup"} className="text-orange-600 font-bold"> Register now</Link>
            </p>
            <div className="divider">OR</div>
            <SocialButtons from={from}></SocialButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
