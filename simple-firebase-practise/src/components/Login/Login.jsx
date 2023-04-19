import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { app } from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
    const [togglePass,setTogglePass] = useState(false);
    const emailRef = useRef();

    const handleResetPassword = event =>{
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Please give a valid email address to the email field');
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            toast.success(`Please check the email ${email} to reset password`)
        })
        .catch(error=>{
            toast.error(error.message);
        })
       
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            if(!user.emailVerified)
            {
                toast.error('Please loggin with the verified email');
            }
            toast.success("user logged in");
        })
        .catch(error => {
            toast.error(error.message);
        })

    }
    const handleToggle = event =>{
        event.preventDefault();
        setTogglePass(!togglePass);
  }
  return (
    <div>
        <h2>Please Login</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" ref={emailRef}  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={`${togglePass ? "text" : "password"}`} placeholder="Password" name="password" required/>
          <button className="btn btn-primary" onClick={handleToggle}>{togglePass ? "hide" : "see"}</button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" name="terms" required/>
        </Form.Group>
        <p><small>Forget your password? <button className="btn btn-link" onClick={handleResetPassword}>Reset Password</button> </small></p>
        <p><small>Don't have an account? please <Link to={"/register"} >register</Link></small></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
