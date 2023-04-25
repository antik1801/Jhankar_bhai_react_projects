import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub, FaPhone } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const { logInWithEmailAndPassword, googleLogin, githubLogin } =
    useContext(AuthContext);
  const navigation = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailAndPassword(email, password)
      .then((result) => {
        form.reset();
        const user = result.user;
        toast("successfully Logged in");
        navigation(location?.state?.pathname || "/");
      })
      .catch((error) => {
        setError(error.message);
        toast(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast("Successfully signed in");
        navigation(location?.state?.pathname || "/");
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
        navigation(location?.state?.pathname || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container className="">
      <h1 className="text-center mt-5">Please Login</h1>

      <Form
        onSubmit={handleLogin}
        className="w-25 mx-auto mt-2  bg-body-tertiary"
      >
        {error && (
          <p>
            <small className="text-danger">{error}</small>
          </p>
        )}
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
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="show password"
            onClick={(e) => setToggle(e.target.checked)}
          />
        </Form.Group>
        <Button className="w-100 mb-2" variant="outline-secondary" onClick={handleGoogleLogin}>
          <FaGoogle className="me-3 text-danger" /> Login with google
        </Button>
        <Button className="w-100 mb-2" variant="outline-primary" onClick={handleGithubLogin}>
          <FaGithub className="me-3 text-dark" />
          Login with github
        </Button>
        <Button className="w-100 mb-2" variant="outline-success">
          <FaPhone className="me-3 text-dark" />
          Login with Phone
        </Button>
        <p>
          <small>
            New in booking.com? please <Link to={"/signup"}>Register</Link>
          </small>
        </p>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
