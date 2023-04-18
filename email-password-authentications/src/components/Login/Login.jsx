import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { ToastBar, toast } from "react-hot-toast";
import { app } from "../Firebase/firebase.config";
import { BeakerIcon } from '@heroicons/react/24/solid'

const auth = getAuth(app);

const Login = () => {
    const [error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const [passType, setPassType] = useState(false);
    const emailRef = useRef();
    const handlePassType = () =>{
        setPassType(!passType);
    }

    const handleResetPassword = event =>{
        const email = (emailRef.current.value);
        if (!email) {
            toast.error('Please give a valid email');
            return ;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            toast.success(`Please check your email ${email}`)
        })
        .catch(error => {
            toast.error(error.message);
            setError(error.message);
        })
    }
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');
        setSuccess('');
        if (!/(?=.*?[A-Z].*[A-Z])/.test(password)) {
            toast.error('Please add two uppercase in your password')            
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password))
        {
            toast.error('Please add at least one special charector');
            return ;
        }
        else if (password.length < 6) {
            toast.error('Please must be 6 charector long')
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            if(!loggedUser.emailVerified)
            {
                toast.error('Please loggin with the verified email');
            }
            setSuccess('user logged in successful')
        })
        .catch(error => {
            // console.log(error);
            toast.error(error.message);
        })

    }
  return (
    <div>
      <h2>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email"  name="email" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="relatvie">
          <Form.Label>Password</Form.Label>
          <Form.Control type={`${passType ?"password" : "text"}`} placeholder="Password" name="password"/>
          <button onClick={handlePassType}>{passType ? "see" : "hide"}</button>
        </Form.Group>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label">
           Accept terms and conditions
          </label>
        </div>
        <p><small>Forget your password? please <button className="btn btn-link" onClick={handleResetPassword}>Reset Password</button> </small></p>
        <p><small>New to this website? please <Link to={"/register"}>Register</Link> </small></p>
        <Button className="btn btn-primary" variant="primary" type="submit">
          Login
        </Button>
        {/* {toast.error(error)} */}
      <p className="text-success">{success}</p>
      </Form>
    </div>
  );
};

export default Login;
