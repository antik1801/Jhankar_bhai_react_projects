import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
    const [error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        if (!/(?=.*?[A-Z].*[A-Z])/.test(password)) {
            setError('Please add two uppercase in your password')            
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password))
        {
            setError('Please add at least one special charector');
            return ;
        }

    }
  return (
    <div>
      <h2>Please Login</h2>
      <p className="text-danger">{error}</p>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="email" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label">
           Accept terms and conditions
          </label>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
