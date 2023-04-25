import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("");
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
  return (
    <Container className="">
    <h1 className="text-center mt-5">Please Login</h1>
      <Form onSubmit={handleLogin} className="w-25 mx-auto mt-2  bg-body-tertiary">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <p><small>show password</small></p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <p><small>New in booking.com? please <Link to={"/signup"}>Register</Link></small></p>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
    </Container>
  );
};

export default Login;
