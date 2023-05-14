import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result => {
      const user = result.user;
      
      // token generate
      const loggedUser = {
        email: user.email,
      }
      fetch('http://localhost:5000/jwt',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
        },
        body: JSON.stringify(loggedUser)
      })
      .then(res => res.json())
      .then(data =>{
        console.log('JWT Token',data)
        // Warning: LocalStorage is not the best it is the second best to access the token
        localStorage.setItem('car-access-token', data.token)
        navigate(from, { replace: true });
      })
      console.log(loggedUser)
      toast("Login successful")
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
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login"></input>
            </div>
            </form>
            <p className="my-4 text-center">New to car doctors <Link to="/signup" className="text-orange-400 font-bold">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
