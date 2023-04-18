import React, { useState } from "react";
import "./Register.css";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";

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
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pass)) {
         setError('Password must contain 8 charector 1 upper 1 lower and 1 special charector');
         return;
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
