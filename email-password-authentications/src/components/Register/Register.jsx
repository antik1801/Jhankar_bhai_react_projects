import React, { useState } from "react";
import "./Register.css";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  // const handlePasswordChange = (event) =>{
  //     // console.log(event.target.value);
  //     setPass(event.target.value);
  // }
  // const handleEmailChange = (event) =>{
  //     // console.log(event.target.value);
  //     setMail(event.target.value);
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSucces("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (!/(?=.*?[A-Z].*[A-Z])/.test(password)) {
      setError('Please add two uppercase in your password')            
  }
  else if (!/(?=.*?[#?!@$%^&*-])/.test(password))
  {
      setError('Please add at least one special charector');
      return ;
  }
  else if (password.length < 6) {
      setError('Please must be 6 charector long')
  }
    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        event.target.reset();
        setSucces("user has created successfully");
        toast.success("user has created successfully");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });

  };
  return (
    <div>
      <h2>Please Register if you are new</h2>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address here"
          required
        />
        <br />
        <div>
          {control ? (
            <div className="btn-pass">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <button className="btn-show" onClick={() => setControl(!control)}>
                Hide
              </button>
            </div>
          ) : (
            <div className="btn-pass">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <button className="btn-show" onClick={() => setControl(!control)}>
                See
              </button>
            </div>
          )}
        </div>
        <br />
        <input type="submit" value="Register" className="btn btn-primary"/>
        <p><small>Already have an account? please <Link to={"/login"}>login</Link></small></p>
      </form>
    </div>
  );
};

export default Register;
