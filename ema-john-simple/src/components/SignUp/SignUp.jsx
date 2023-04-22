import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const { user, createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPassword.value;

    setError("");
    setSuccess("");
    console.log(email, password, confirmPass);
    if (password != confirmPass) {
      setError("Password not match");
      return;
    } else if (password.length < 8) {
      setError("Password must be 8 charector");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        setSuccess("Successfully created account");
        toast.success("Please check your email to verify");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type={show ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <button onClick={() => setShow(!show)} className="btn-show-Pass">
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </button>
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account ? <Link to={"/login"}>Clicked here</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default SignUp;
