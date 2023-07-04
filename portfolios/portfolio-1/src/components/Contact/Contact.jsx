import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg"
const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send');
    const [state, setState] = useState({})
    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    return (
       <>
       <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="" />
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                </Col>
                <form action="">
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName', e.target.value)}></input>
                        </Col>
                        <Col sm={6} className="px-1"></Col>
                    </Row>
                </form>
            </Row>
        </Container>
       </section>
       </>
    );
};

export default Contact;