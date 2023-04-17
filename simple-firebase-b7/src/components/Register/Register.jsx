import React, { useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { EyeIcon } from '@heroicons/react/24/solid';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import "./Register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [controll, setControll] = useState(false);
  const auth = getAuth(app);
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)) {
    
  }
  const handleRegister = (event) => {
    event.preventDefault();
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      setError("bro hobe na email pass lagbe");
    }
  };
  
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <p className="text-danger">{error}</p>
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                  required
                />
                <div className="pass-container">
                  {controll ? (
                    <div className="position-relative d-inline">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="password p-3 m-2"
                        type="text"
                        placeholder="enter your password"
                        required
                      />
                      <EyeSlashIcon className="position-absolute top-0 end-0 eyeSlash" onClick={()=>setControll(!controll)}></EyeSlashIcon>
                    </div>
                  ) : (
                    <div className="position-relative d-inline">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="password p-3 m-2"
                        type="password"
                        placeholder="enter your password"
                        required
                      />

                      <EyeIcon className="position-absolute top-0 end-0 eye" onClick={()=>setControll(!controll)}></EyeIcon>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleRegister}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
        <SocialLoginBtn></SocialLoginBtn>
      </div>
    </div>
  );
};

export default Register;
