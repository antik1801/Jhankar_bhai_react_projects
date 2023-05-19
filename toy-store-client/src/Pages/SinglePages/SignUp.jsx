import React, { useContext, useState } from 'react';
import {Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../ContextProviders/AuthProviders';
import { toast } from 'react-toastify';
import SocialButtons from '../../components/SocialButtons';

const SignUp = () => {
    const [show,setShow] = useState(false)
    const {createUser,userUpdate} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login"
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            updateNameAndPhoto(user, name, photo);
            toast('User created')
            console.log(user);
            navigate("/", {replace:true});
        })
        .catch(err=>{
            toast(err.message)
            console.log(err);
        })

    }

    const updateNameAndPhoto = (user, name, photo) =>{
        userUpdate(user,name,photo)
        .then(()=>{})
        .catch(err=>{
            toast(err.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="link"
                  name="photo"
                  placeholder="PhotoURL"
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
                  type={show ? 'text' : 'password'}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a className="label-text-alt link link-hover" onClick={()=>setShow(!show)}>
                    Show Password
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Register</button>
              </div>
              </form>
              <p>Already have an account? please
              <Link to={"/login"} className="text-orange-600 font-bold"> Login now</Link>
              </p>
              <div className="divider">OR</div>
              <SocialButtons></SocialButtons>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;