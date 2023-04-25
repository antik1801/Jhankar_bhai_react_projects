import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const handlePasswordSecurity = e =>{
        const pass = e.target.value;
        console.log(pass);
       
        if (!/?=.*?[A-Z]/.test(pass)) {
            setError('Password must contain at least one upper letter')
            return
        }
         /*
        else if (!(/?=.*?[a-z]/).test(pass)) {
            setError('Password must contain at least one lower letter');
            return
        }
        else if(!(/?=.*?[0-9]/).test(pass)){
            setError('password must contain at least one digits');
            return
        }
        else if (!(/?=.*?[#?!@$%^&*-]/).test(pass)) {
            setError('Password must contain at least one special charector');
            return
        }
        else if(pass.length < 8) {
            setError('Password must contain at lease 8 charector');
            return
        }
        */
        
    }
    const handleRegister = e =>{
        setError("");

    }
    return (
        <Container className="">
    <h1 className="text-center mt-5">Please Register</h1>
      <Form onSubmit={handleRegister} className="w-25 mx-auto mt-2  bg-body-tertiary">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handlePasswordSecurity} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name="confirm" required/>
        </Form.Group>
        <p><small>show password</small></p>
        <p><small  className='text-danger'>{error}</small></p> 
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <p><small>Already have an account? please <Link to={"/login"}>Register</Link></small></p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      
    </Container>
    );
};

export default SignUp;