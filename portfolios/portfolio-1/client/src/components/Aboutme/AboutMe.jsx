import React from 'react';
import { Col, Row } from 'react-bootstrap';
import antik from "../../assets/img/antik.jpg"
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center mb-5'>About ME</h2>
           <Row>
            <Col md={6} className='text-center'>
                <img src={antik} alt="" className='antik-img'/>
            </Col>
            <Col md={6}>
                <h3 className='text-center'>FrontEnd Developer</h3>
                <p>Hi, I am Gazi Ehsanul Haque. I am a frontend developer. I am 25 years old. I have done my graduation from AIUB.I have done my Internship from IGP Bangladesh as a frontend developer.I have expertise in Reactjs, TailwindCss and also i am familier with NextJS,Mongodb,NodeJS,ExpressJS. I have done more than 25+ Projects and i have done my MERN stack courses from Programming Hero.</p>
            </Col>
           </Row>
        </div>
    );
};

export default AboutMe;