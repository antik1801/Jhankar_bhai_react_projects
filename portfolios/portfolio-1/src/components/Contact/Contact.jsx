import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [state, setState] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = event =>{
    event.preventDefault();
    console.log("hit")
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
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>{" "}
                <Col>
                  <textarea rows="10" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                </Col>
              </Row>
              <button type="submit"><span>{buttonText}</span></button>
              {
                status.message && 
                <Col>
                <p className={status.success === false ? 'danger' : 'success'}></p>
                </Col>
              }
            </form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
