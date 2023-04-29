import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
    const[show,setShow] = useState(false);
    const [error,setError] = useState("");

    const handleLogin = e =>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;

        
    }
    
  return (
    <Container className="mt-5">
      <Form className="w-100 mx-auto navi p-5" onSubmit={handleLogin}>
        <h2 className="text-center">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={show ? "text" : "password"} placeholder="Password" name="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="See Password" onClick={(e)=>setShow(e.target.checked)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">Don't have an Account?
            <Link to={"/register"} className="text-decoration-none">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
