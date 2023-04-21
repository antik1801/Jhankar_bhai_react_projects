import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const [error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const {createUser,googleSignIn,githubSignIn} = useContext(AuthContext)
    // console.log(createUser);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setSuccess("");
        // check password protection
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("Password must contain at least one Uppercase");
            toast.error("Password must contain at least one Uppercase");
            return;
          } else if (!/(?=.*?[a-z])/.test(password)) {
            setError("Password must contain at least one lower digit");
            toast.error("Password must contain at least one lower digit");
            return;
          } else if (!/(?=.*?[0-9])/.test(password)) {
            setError("password must contain at least one number");
            toast.error("password must contain at least one number");
            return;
          } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("Password must contain at least one special symble");
            toast.error("Password must contain at least one special symble");
            return;
          } else if (password.length < 8) {
            setError("Password must have 8 charectors");
            toast.error("Password must have 8 charectors");
            return;
          }
        
        
        createUser(email,password)
        .then(result=>{
            event.target.reset();
            const user = result.user;
            sendVarificationEmail(user);
            console.log(user);
            toast.success("Successfully created account!");
        })
        .catch(error =>{
            console.log(error);
            toast.error(error.message);
        })
        
    }

    const sendVarificationEmail = user =>{
        sendEmailVerification(user)
        .then(()=>{
            toast.success('please check your email to verify')
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }

    const handleGithubLogin =() =>{
        githubSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGoogleSignUp = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    <button className="btn btn-link text-blue-800">
                      Already have an account
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleGoogleSignUp}>Google SignUp</button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleGithubLogin}>Github SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;