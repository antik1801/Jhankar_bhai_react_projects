import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [togglePass, setTogglePass] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccessMessage("");

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.emailVerified);
        event.target.reset();
        sendEmailVerification(user);
        toast.success("Successfully created account!");
        setSuccessMessage("Successfully created account!");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
  const sendVarificationEmail = (user) => {
    sendEmailVerification(user).then(() => {
      toast.success(`Please check your email to varify`);
    });
  };
  const handleToggle = (event) => {
    event.preventDefault();
    setTogglePass(!togglePass);
  };

  return (
    <div>
      <h3 className="text-error">{error}</h3>
      <h3 className="text-success">{successMessage}</h3>
      <h2>Please Register if you are new</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={`${togglePass ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            required
          />
          <button className="btn btn-primary" onClick={handleToggle}>
            {togglePass ? "hide" : "see"}
          </button>
        </Form.Group>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="terms"
            className="form-check-input"
            id="terms"
            required
          />
          <label className="form-check-label">
            Agreed terms and conditions
          </label>
        </div>
        <p>
          <small>
            Already have an account? please{" "}
            <Link to={"/login"}>login / signin</Link>
          </small>
        </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <SocialLoginBtn></SocialLoginBtn>
      </Form>
    </div>
  );
};

export default Register;
