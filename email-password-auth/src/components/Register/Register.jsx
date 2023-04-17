import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [email,setEmail] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        console.log(email, password);
    }
    const handleEmailChange = (event) =>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        // console.log(event.target.value);
    }
    return (
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Your email address' onChange={handleEmailChange}/>
                <br />
                <input onBlur={handlePasswordBlur} type="password" name='password'placeholder='Your password'/>
                <br />
                <input type="submit" value={"Register"}/>
            </form>
        </div>
    );
};

export default Register;