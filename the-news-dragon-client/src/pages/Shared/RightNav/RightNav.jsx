import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup'
import "./RightNav.css"
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png"
import bg1 from "../../../assets/bg1.png"

const RightNav = () => {
  return (
    <div>
      <h2>Login with</h2>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle className="me-3" />
        Login with google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub className="me-3" />
        Login with github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <Button className="w-100 mb-2" variant="outline-primary"><FaFacebook className="text-primary"/> Facebook</Button>
          <Button className="w-100 mb-2" variant="outline-primary"><FaTwitter className="text-primary"/> Twitter</Button>
          <Button className="w-100 mb-2" variant="outline-primary"> <FaInstagram className="text-danger"/> Instagram</Button>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="">
            <img src={bg} alt="" />
            <p className="text-white">Create an amazing newspaper</p>
      </div>
    </div>
  );
};

export default RightNav;
