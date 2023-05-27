import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../ContextProviders/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email,password)
    .then(result =>{
      const user = result.user;
      Swal.fire(
        'User Logged in!',
        'Welcome to Bistro boss!',
        'success'
      )
      navigate(from, { replace: true });
    })
    .catch(error=>{
      console.log(error.message);
    })
  };
  const handleValidateCaptcha = event =>{
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
    }
    else {
        setDisabled(true)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Type the captcha above"
                className="input input-bordered"
                name="captcha"
                ref={captchaRef}
                required
              />
              <button className="btn btn-outline btn-xs mt-2" onClick={handleValidateCaptcha}>Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
            <p><small>New Here? <Link to='/signup'>Create an account?</Link> </small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
