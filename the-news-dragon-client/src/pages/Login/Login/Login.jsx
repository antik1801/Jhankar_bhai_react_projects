import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {

    const {signIn,passwordReset} = useContext(AuthContext);

    const[show,setShow] = useState(false);
    const [error,setError] = useState("");
    const emailRef = useRef();

    const handleLogin = e =>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          if (!user.emailVarified) {
            return toast('Verify First to login the system')
          }
            form.reset();
           toast('successfully loggedin')
        })
        .catch(error =>{
          toast(error.message);
        })
        
    }
    
    const handleResetPassword = event =>{
      const email = (emailRef.current.value);
      if (!email) {
       return toast('Please provide a valid email');
      }
      passwordReset(email)
      .then(()=>{
        toast('Please Check your email');
      })
      .catch(error=>{
        toast(error.message);
      })
    }

  return (
    <Container className="mt-5">
      <Form className="w-100 mx-auto navi p-5" onSubmit={handleLogin}>
        <h2 className="text-center">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" ref={emailRef} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={show ? "text" : "password"} placeholder="Password" name="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="See Password" onClick={(e)=>setShow(e.target.checked)}/>
        </Form.Group>
        <ToastContainer></ToastContainer>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>Forget Password? Please  <Button variant="link" className="p-0" onClick={handleResetPassword}>reset</Button>
        <br />
        </Form.Text>
        <Form.Text className="text-secondary">Don't have an Account?
            <Link to={"/register"} className="text-decoration-none">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
