import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const {signIn,user} = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [error,setError] = useState('');
    
    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setSuccess("");
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Successfully logged in');
            form.reset();
            
        })
        .catch(error =>{
            setError(error.message);
        })
        

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New in ema-john ? <Link to={"/signup"}>Clicked here to register</Link> </small></p>
            <p className='text-error'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;