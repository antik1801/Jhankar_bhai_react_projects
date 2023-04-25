import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordSecurity = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setError("");
    if (!/^(?=.*?[A-Z])/.test(pass)) {
      setError("Password must contain at least one upper letter");
      return;
    } else if (!/^(?=.*?[a-z])/.test(pass)) {
      setError("Password must contain at least one lower letter");
      return;
    } else if (!/^(?=.*?[0-9])/.test(pass)) {
      setError("password must contain at least one digits");
      return;
    } else if (!/^(?=.*?[#?!@$%^&*-])/.test(pass)) {
      setError("Password must contain at least one special charector");
      return;
    } else if (!/^(.{8,}$)/.test(pass)) {
      setError("Password must contain at lease 8 charector");
      return;
    }
  };
  const handleConfirm = (e) => {
    setError("");
    if (e.target.value != password) {
      setError("Confirm Password not matched!");
      return;
    }
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast("Successfully signed in");
        navigate(location?.state?.pathname || "/login");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        toast("Successfully signed in");
        navigate(location?.state?.pathname || "/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (error) {
      setError("Please check all requirments");
      return;
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        form.reset();
        const user = result.user;
        user.displayName = name;
        navigate(location?.state?.pathname || "/login");
        toast("Successfully signed in");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <Container className="">
      <h1 className="text-center mt-5">Please Register</h1>
      <Form
        onSubmit={handleRegister}
        className="w-25 mx-auto mt-2  bg-body-tertiary"
      >
        {error && (
          <p>
            <small className="text-danger">{error}</small>
          </p>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
        </Form.Group>
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
            type={toggle ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handlePasswordSecurity}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type={toggle ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirm"
            onChange={handleConfirm}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            id="checkbox"
            type="checkbox"
            label="show password"
            onClick={(e) => setToggle(e.target.checked)}
          />
        </Form.Group>
        <Button
          className="w-100 mb-2"
          variant="outline-secondary"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="me-3 text-danger" /> Login with google
        </Button>
        <Button
          className="w-100 mb-2"
          variant="outline-primary"
          onClick={handleGithubLogin}
        >
          <FaGithub className="me-3 text-dark" />
          Login with github
        </Button>
        <p>
          <small>
            Already have an account? please <Link to={"/login"}>Login</Link>
          </small>
        </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
