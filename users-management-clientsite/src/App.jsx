import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const handleAddUser = event =>{
    event.preventDefault()
    const form= event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name,email);
    const user = { name, email}
    console.log(user)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('inside post response', data)
    })

  }
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <>
      <h1>Users Managements System</h1>
      <p>Numbers of users: {users.length}</p>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' required/>
        <br />
        <input type="email" name='email' required/>
        <br />
        <input type="submit" value="add user" />
      </form>
      {
        users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p> )
      }
    </>
  )
}

export default App
