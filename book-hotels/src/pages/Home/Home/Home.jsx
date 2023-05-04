import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../auth/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container>
      {user && (<h3 className="text-center mt-2">{user.displayName}</h3>|| <h1 className="text-center mt-2">{user.email}</h1>) }
      
    </Container>
  );
};

export default Home;
