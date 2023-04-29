import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni cum officia alias quos quis ratione, temporibus tenetur eos sint non tempora iste consequatur! Quasi voluptatem, laborum odio itaque aperiam laudantium, ratione, doloribus dolorem quos error cumque molestiae sequi quod.</p>
            <p>Go back to <Link to={"/register"}>Register</Link> </p>
        </Container>
    );
};

export default Terms;