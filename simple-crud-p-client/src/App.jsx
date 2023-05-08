import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  const handelAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user)

    
    fetch(`http://localhost:5000/users`,{
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
    .catch(error =>{

    })

  }

  return (
    <>
      <h1>Simple Crud Application Practise</h1>
      <ToastContainer />
      <form onSubmit={handelAddUser}>
        <input type="text" name='name' placeholder='name' required/>
        <br />
        <input type="email" name='email' placeholder='email' required/>
        <br />
        <button type='submit'>Add user</button>
      </form>
    </>
  )
}

export default App
