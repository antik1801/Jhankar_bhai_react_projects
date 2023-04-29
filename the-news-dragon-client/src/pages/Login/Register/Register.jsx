import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, sendVarificationMail ,updateInfo} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast("successfully created account");
        verifyEmail(user)
        updateUserData(result.user, name, photo)
        console.log(user);
      })
      .catch((error) => {
        toast(error.message);
      });
  }

  const verifyEmail = user =>{
    sendVarificationMail(user).then((result) => {
      toast(`Please check your email to varify`);
      }).catch(error=>toast(error.message))
  }

  const updateUserData = (user,displayName,photo) =>{
      console.log('hit');
      updateInfo(user,displayName,photo)
      .then(()=>{
        console.log('User name and photoURL updated')
      })
      .catch(error=>{
        toast(error.message);
      })
  }

  return (
    <Container className="mt-5">
      <Form
        className="w-100 mx-auto bg-light p-5 formant"
        onSubmit={handleRegister}
      >
        <h2 className="text-center">Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter photo"
            name="photo"
            required
          />
        </Form.Group>
        <ToastContainer></ToastContainer>
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
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="d-flex justify-content-between flex-wrap">
            <Form.Check
              type="checkbox"
              label="Accept tems and conditions"
              name="accept"
              required
            />
            <Form.Check
              type="checkbox"
              label="Show password"
              onClick={(e) => setShow(e.target.checked)}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an Account?
          <Link to={"/login"}>Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
