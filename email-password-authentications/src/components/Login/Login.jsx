import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
    const [error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');
        setSuccess('');
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
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('user logged in successful')
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
  return (
    <div>
      <h2>Please Login</h2>
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
        <p><small>New to this website? please <Link to={"/register"}>Register</Link> </small></p>
        <Button className="btn btn-primary" variant="primary" type="submit">
          Login
        </Button>
        <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
      </Form>
    </div>
  );
};

export default Login;
